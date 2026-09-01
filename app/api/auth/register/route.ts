import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { connectDB } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    // Validation
    if (!name || !email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required",
        },
        { status: 400 },
      );
    }

    const db = await connectDB();

    // Check if user already exists
    const existingUser = await db.request().input("email", email).query(`
        SELECT Id
        FROM Users
        WHERE email = @email
      `);

    if (existingUser.recordset.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "email already exists",
        },
        { status: 409 },
      );
    }

    // Hash password
    const hashedpassword = await bcrypt.hash(password, 10);

    // Insert new user
    await db
      .request()
      .input("name", name)
      .input("email", email)
      .input("password", hashedpassword).query(`
        INSERT INTO admin
        (
            name,
            email,
            password
        )
        VALUES
        (
            @name,
            @Email,
            @password
        )
      `);

    return NextResponse.json(
      {
        success: true,
        message: "Registration successful",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Server Error",
      },
      { status: 500 },
    );
  }
}
