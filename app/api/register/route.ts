import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import sql from "mssql";
import { getDbConnection } from "../../lib/db";

export async function POST(request: Request) {
  try {
    const { name, email, phoneNumber, password } = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email, phoneNumber and password are required",
        },
        { status: 400 }
      );
    }

    const db = await getDbConnection();

    const existingUser = await db
      .request()
      .input("email", sql.VarChar(255), email)
      .query(`
        SELECT id
        FROM users
        WHERE email = @email
      `);

    if (existingUser.recordset.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Email already registered",
        },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db
      .request()
      .input("name", sql.VarChar(100), name)
      .input("email", sql.VarChar(255), email)
      .input("phoneNumber", sql.VarChar(155), phoneNumber)
      .input("password", sql.VarChar(255), hashedPassword)
      .query(`
        INSERT INTO users (name, email, phoneNumber, password)
        VALUES (@name, @email, @phoneNumber, @password)
      `);

    return NextResponse.json(
      {
        success: true,
        message: "Registration successful",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Register error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Registration failed",
      },
      { status: 500 }
    );
  }
}