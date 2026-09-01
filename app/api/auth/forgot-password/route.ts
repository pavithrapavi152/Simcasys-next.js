import { NextResponse } from "next/server";
import sql from "mssql";
import { connectDB } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email) {
      return NextResponse.json(
        {
          success: false,
          message: "email is required",
        },
        { status: 400 },
      );
    }

    // Connect to database
    const pool = await connectDB();

    // Check if user exists
    const result = await pool.request().input("email", sql.NVarChar, email)
      .query(`
        SELECT Id, fullname, email
        FROM Users
        WHERE email = @email
      `);

    if (result.recordset.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "email not found",
        },
        { status: 404 },
      );
    }

    // Later you'll generate a reset token and send an email.
    // For now we'll just return success.

    return NextResponse.json(
      {
        success: true,
        message: "User found. Password reset process can continue.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("forgot password error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 },
    );
  }
}
