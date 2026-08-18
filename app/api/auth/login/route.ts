import { connectDB } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const db = await connectDB();

    //  sql query checking the
    const result = await db
      .request()

      .input("Email", email).query(`
                SELECT *
                FROM Users
                WHERE Email=@Email
            `);

    console.log("sql res", result);

    if (result.recordset.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "User not found",
        },
        { status: 404 },
      );
    }
    return NextResponse.json(
      {
        sucess: true,
        message: "Login success",
      },
      { status: 200 },
    );
  } catch (error) {
    console.log("error login", error);

    return NextResponse.json(
      {
        success: false,
        message: "Server Error",
      },
      { status: 500 },
    );
  }
}
