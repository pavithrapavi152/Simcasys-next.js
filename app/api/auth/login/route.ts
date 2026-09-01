import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import sql from "mssql";
import { connectDB } from "@/lib/db";
import { generateToken } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "Email and Password are required",
        },
        { status: 400 },
      );
    }

    const db = await connectDB();

    const result = await db.request().input("email", sql.VarChar, email).query(`
        SELECT *
        FROM admin
        WHERE Email = @email
      `);

    if (result.recordset.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "User not found",
        },
        { status: 404 },
      );
    }

    const user = result.recordset[0];

    console.log("user", user);

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid Password",
        },
        { status: 401 },
      );
    }

    const response = NextResponse.json({
      success: true,
      message: "Login Successful",
      user: {
        id: user.Id,
        name: user.name,
        email: user.email,
      },
    });

    return response;
  } catch (error) {
    console.error("Login API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Server Error",
      },
      { status: 500 },
    );
  }
}
