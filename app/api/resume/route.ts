import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    // =====================================
    // 1. GET FORM DATA
    // =====================================

    const formData = await request.formData();

    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const resume = formData.get("resume");

    // =====================================
    // 2. VALIDATE FORM DATA
    // =====================================

    if (
      !name ||
      !email ||
      !phone ||
      !(resume instanceof File)
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Name, email, phone and resume are required",
        },
        { status: 400 }
      );
    }

    // =====================================
    // 3. CHECK RESUME SIZE
    // Maximum: 5 MB
    // =====================================

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
          message: "Resume file must be smaller than 5 MB",
        },
        { status: 400 }
      );
    }

    // =====================================
    // 4. CHECK FILE TYPE
    // =====================================

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(resume.type)) {
      return NextResponse.json(
        {
          success: false,
          message: "Only PDF, DOC and DOCX files are allowed",
        },
        { status: 400 }
      );
    }

    // =====================================
    // 5. CHECK EMAIL CONFIGURATION
    // =====================================

    const emailUser = process.env.EMAIL_USER;
    const emailPassword = process.env.EMAIL_PASSWORD;
    const adminEmail = process.env.ADMIN_EMAIL;

    if (!emailUser || !emailPassword || !adminEmail) {
      console.error("Email environment variables are missing");

      return NextResponse.json(
        {
          success: false,
          message:
            "Email server configuration is missing",
        },
        { status: 500 }
      );
    }

    // =====================================
    // 6. CONVERT RESUME TO BUFFER
    // =====================================

    const resumeBuffer = Buffer.from(
      await resume.arrayBuffer()
    );

    // =====================================
    // 7. CREATE GMAIL TRANSPORTER
    // =====================================

    const transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    });

    // =====================================
    // 8. VERIFY EMAIL CONNECTION
    // =====================================

    await transporter.verify();

    console.log("Email server connected successfully");

    // =====================================
    // 9. SEND RESUME TO ADMIN
    // =====================================

    await transporter.sendMail({
      from: emailUser,
      to: adminEmail,

      subject: `New Resume Application - ${name}`,

      text: `
New Resume Application
======================

Name: ${name}
Email: ${email}
Phone: ${phone}

A new applicant has submitted a resume through the Simcasys Careers page.

Please find the applicant's resume attached.
      `,

      attachments: [
        {
          filename: resume.name,
          content: resumeBuffer,
        },
      ],
    });

    console.log("Resume email sent to admin");

    // =====================================
    // 10. SEND CONFIRMATION TO USER
    // =====================================

    await transporter.sendMail({
      from: emailUser,
      to: email,

      subject:
        "Resume Submitted Successfully - Simcasys Technologies",

      text: `
Dear ${name},

Thank you for submitting your resume to Simcasys Technologies.

We have successfully received your application.

Your submitted details:

Name: ${name}
Email: ${email}
Phone: ${phone}

Our team will review your resume and contact you if your profile matches our current opportunities.

Thank you for your interest in Simcasys Technologies.

Regards,
Simcasys Technologies
      `,
    });

    console.log("Confirmation email sent to user");

    // =====================================
    // 11. SUCCESS RESPONSE
    // =====================================

    return NextResponse.json(
      {
        success: true,
        message:
          "Resume submitted successfully. Confirmation email sent.",
      },
      { status: 200 }
    );
  } catch (error) {
    // =====================================
    // 12. ERROR
    // =====================================

    console.error("Resume API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to submit resume. Please try again.",
      },
      { status: 500 }
    );
  }
}

