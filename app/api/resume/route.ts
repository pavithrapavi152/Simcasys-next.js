import { NextResponse } from "next/server";
import { containerClient } from "@/lib/azureBlob";
import { transporter } from "@/lib/mail";
import { connectDB } from "@/lib/db";
import sql from "mssql";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();


    const fullName = formData.get("fullName")?.toString().trim();
    const name = formData.get("name")?.toString().trim();

    const fullName = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const jobRole = formData.get("jobRole") as string;


    const email = formData.get("email")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const jobRole = formData.get("jobRole")?.toString().trim();

    // Support both "fullName" and "name"
    const applicantName = fullName || name;

    const resume = formData.get("resume");

    // Validation
    if (!applicantName || !email || !phone || !resume) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email, phone and resume are required",
        },
        { status: 400 }
      );
    }

    if (!(resume instanceof File)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please upload a valid resume file",
        },
        { status: 400 }
      );
    }

    // Maximum 5 MB
    const maxFileSize = 5 * 1024 * 1024;

    if (resume.size === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Please select a resume file",
        },
        { status: 400 }
      );
    }

    if (resume.size > maxFileSize) {
      return NextResponse.json(
        {
          success: false,
          message: "Maximum file size is 5 MB",
        },
        { status: 400 }
      );
    }

    // Only PDF
    const isPdf =
      resume.type === "application/pdf" ||
      resume.name.toLowerCase().endsWith(".pdf");

    if (!isPdf) {
      return NextResponse.json(
        {
          success: false,
          message: "Only PDF files are allowed",
        },
        { status: 400 }
      );
    }

    // Check existing user
    const userExists = await db
      .request()
      .input("email", sql.NVarChar, email)
      .input("phone", sql.NVarChar, phone).query(`
    SELECT *
    FROM Users
    WHERE Email = @email
       OR PhoneNumber = @phone
  `);

    if (userExists.recordset.length > 0) {
      const user = userExists.recordset[0];

      return NextResponse.json(
        {
          success: false,
          message: "User with this email or phone number already exists.",
        },
        { status: 400 },
      );
    }

    // Convert file to Buffer
    const arrayBuffer = await resume.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Unique filename
    const fileName = `resume-${Date.now()}-${resume.name}`;

    // Upload to Azure Blob Storage
    const blockBlobClient =
      containerClient.getBlockBlobClient(fileName);

    await blockBlobClient.uploadData(buffer, {
      blobHTTPHeaders: {
        blobContentType: "application/pdf",
      },
    });

    const resumeUrl = blockBlobClient.url;

<<<<<<< HEAD
    // Connect to database
    const db = await connectDB();

    // Save resume URL against the user's email
=======
    // insert the user
>>>>>>> feature/resume-upload
    await db
      .request()
      .input("name", sql.NVarChar, fullName)
      .input("email", sql.NVarChar, email)
<<<<<<< HEAD
      .input("resumeUrl", sql.NVarChar, resumeUrl)
      .query(`
        UPDATE Users
        SET ResumeUrl = @resumeUrl
        WHERE Email = @email
      `);

    // Send email to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New Resume Received - ${applicantName}`,
=======
      .input("phone", sql.NVarChar, phone)
      .input("jobRole", sql.NVarChar, jobRole)
      .input("resumeUrl", sql.NVarChar, resumeUrl).query(`
        INSERT INTO Users (
          Name,
          Email,
          phoneNumber,
          JobRole,
          ResumeUrl
        )
        VALUES (
          @name,
          @email,
          @phone,
          @jobRole,
          @resumeUrl
        )
      `);

    // email to  admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: "New Resume Received",
>>>>>>> feature/resume-upload
      html: `
        <h2>New Resume Received</h2>

        <p><strong>Name:</strong> ${applicantName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        ${
          jobRole
            ? `<p><strong>Job Role:</strong> ${jobRole}</p>`
            : ""
        }

        <p>
          <strong>Resume:</strong>
          <a href="${resumeUrl}" target="_blank">
            View Resume
          </a>
        </p>

        <hr>

        <p>
          A new candidate has submitted a resume
          through the SimcaSys Careers page.
        </p>
      `,
    });

<<<<<<< HEAD
    // Send confirmation email to applicant
=======
    // Email to User
>>>>>>> feature/resume-upload
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "We Have Received Your Resume",
      html: `
        <h2>Hello ${applicantName},</h2>

        <p>
          Thank you for applying to
          <strong>SimcaSys Pvt Ltd</strong>.
        </p>

        <p>
          Your resume has been received successfully.
        </p>

        <h3>Application Details</h3>

        <p><strong>Name:</strong> ${applicantName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        ${
          jobRole
            ? `<p><strong>Job Role:</strong> ${jobRole}</p>`
            : ""
        }

        <p>
          Our recruitment team will review your application.
          If your profile matches our requirements,
          we will contact you.
        </p>

        <p>
          Thank you for your interest in SimcaSys.
        </p>

        <p>Regards,<br />
        <strong>SimcaSys Pvt Ltd</strong></p>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Resume uploaded successfully",
        resumeUrl,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Resume Upload Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}