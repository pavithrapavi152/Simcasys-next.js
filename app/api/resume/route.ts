import { NextResponse } from "next/server";
import { containerClient } from "@/lib/azureBlob";
import { transporter } from "@/lib/mail";
import { connectDB } from "@/lib/db";
import sql from "mssql";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const fullName = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const jobRole = formData.get("jobRole") as string;

    const resume = formData.get("resume") as File | null;

    const db = await connectDB();

    // Validation
    if (!fullName || !email || !phone || !jobRole || !resume) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required",
        },
        { status: 400 },
      );
    }

    const isPdf =
      resume.type === "application/pdf" ||
      resume.name.toLowerCase().endsWith(".pdf");

    if (!isPdf) {
      return NextResponse.json(
        {
          success: false,
          message: "Only PDF files are allowed",
        },
        { status: 400 },
      );
    }

    // Maximum 5 MB
    if (resume.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        {
          success: false,
          message: "Maximum file size is 5 MB",
        },
        { status: 400 },
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

    // Blob Client
    const blockBlobClient = containerClient.getBlockBlobClient(fileName);

    // Upload PDF
    await blockBlobClient.uploadData(buffer, {
      blobHTTPHeaders: {
        blobContentType: "application/pdf",
      },
    });

    // Blob URL
    const resumeUrl = blockBlobClient.url;

    // insert the user
    await db
      .request()
      .input("name", sql.NVarChar, fullName)
      .input("email", sql.NVarChar, email)
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
      html: `
    <h2>New Resume Received</h2>

    <p><strong>Name:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Job Role:</strong> ${jobRole}</p>

    <p>
      <strong>Resume:</strong>
      <a href="${resumeUrl}" target="_blank">View Resume</a>
    </p>

    <hr>

    <p>A new candidate has submitted a resume through the SimcaSys Careers page.</p>
  `,
    });

    // Email to User
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "We Have Received Your Resume",
      html: `
    <h2>Hello ${fullName},</h2>

    <p>Thank you for applying to <strong>SimcaSys Pvt Ltd</strong>.</p>

    <p>Your resume has been received successfully.</p>

    <h3>Application Details</h3>

    <p><strong>Name:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Job Role:</strong> ${jobRole}</p>

    <br>

    <p>Our recruitment team will review your application. If your profile matches our requirements, we will contact you.</p>

    <p>Thank you for your interest in SimcaSys.</p>

    <br>

    <p>Regards,</p>
    <p><strong>SimcaSys Pvt Ltd</strong></p>
  `,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Resume uploaded successfully",
        resumeUrl,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Resume Upload Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 },
    );
  }
}
