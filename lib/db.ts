
import sql from "mssql";

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,

    server: process.env.DB_SERVER!,

    database: process.env.DB_NAME,

    options: {
        encrypt: true,
        trustServerCertificate: false,
    }
};


let pool: sql.ConnectionPool | null = null;


export async function connectDB() {

    try {

        if (pool) {
            return pool;
        }


        pool = await sql.connect(config);

        console.log("Azure SQL Connected Successfully");


        return pool;


    } catch (error) {

        console.log("Database Connection Error:", error);

        throw error;

    }
}