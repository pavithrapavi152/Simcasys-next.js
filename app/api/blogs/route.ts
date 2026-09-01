import { NextResponse } from "next/server";
import sql from "mssql";
import { getDbConnection } from "../../lib/db";

// ===============================
// GET ALL BLOGS
// ===============================

export async function GET() {
  try {
    const pool = await getDbConnection();

    const result = await pool.request().query(`
      SELECT
        id,
        title,
        slug,
        content,
        image,
        adminid,
        created_at,
        updated_at
      FROM blogs
      ORDER BY created_at DESC
    `);

    return NextResponse.json(
      {
        success: true,
        blogs: result.recordset,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Blog fetch error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch blogs",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

// ===============================
// CREATE NEW BLOG
// ===============================

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      title,
      slug,
      content,
      image,
      adminid,
    } = body;

    // Check required fields
    if (!title || !slug || !content || !adminid) {
      return NextResponse.json(
        {
          success: false,
          message: "Title, slug, content and adminid are required",
        },
        { status: 400 }
      );
    }

    // Check Admin UUID
    if (
      typeof adminid !== "string" ||
      !/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/.test(
        adminid
      )
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Admin ID must be a valid UUID",
        },
        { status: 400 }
      );
    }

    const pool = await getDbConnection();

    const result = await pool
      .request()
      .input("title", sql.NVarChar, title)
      .input("slug", sql.NVarChar, slug)
      .input("content", sql.NVarChar(sql.MAX), content)
      .input("image", sql.NVarChar, image || null)
      .input("adminid", sql.UniqueIdentifier, adminid)
      .query(`
        INSERT INTO blogs
        (
          title,
          slug,
          content,
          image,
          adminid
        )
        OUTPUT
          INSERTED.id,
          INSERTED.title,
          INSERTED.slug,
          INSERTED.content,
          INSERTED.image,
          INSERTED.adminid,
          INSERTED.created_at,
          INSERTED.updated_at
        VALUES
        (
          @title,
          @slug,
          @content,
          @image,
          @adminid
        )
      `);

    return NextResponse.json(
      {
        success: true,
        message: "Blog created successfully",
        blog: result.recordset[0],
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Blog create error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create blog",
        error:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      { status: 500 }
    );
  }
}

