import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import sql from "mssql";
import { getDbConnection } from "../../lib/db";

export async function POST(request: Request) {
  try {
    // Get data from request
    const { email, password } = await request.json();

    // Check required fields
    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "Email and password are required",
        },
        { status: 400 }
      );
    }

    // Connect to database
    const pool = await getDbConnection();

    // Find user by email
    const result = await pool
      .request()
      .input("email", sql.VarChar(255), email)
      .query(`
        SELECT id, name, email, password
        FROM users
        WHERE email = @email
      `);

    // Check whether user exists
    if (result.recordset.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "User does not exist",
        },
        { status: 404 }
      );
    }

    // Get user
    const user = result.recordset[0];

    // Check password
    const passwordMatch = await bcrypt.compare(
      password,
      user.password
    );

    // Wrong password
    if (!passwordMatch) {
      return NextResponse.json(
        {
          success: false,
          message: "Incorrect password",
        },
        { status: 401 }
      );
    }

    // Login successful
    return NextResponse.json(
      {
        success: true,
        message: "Login successful",
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}