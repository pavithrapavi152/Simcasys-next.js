import sql from "mssql";

const config: sql.config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER!,
  database: process.env.DB_DATABASE_NAME,
  port: parseInt(process.env.DB_PORT || "1433"),
  options: {
    encrypt: true,
    trustServerCertificate: false,
  },
};

let pool: sql.ConnectionPool | null = null;

export async function getDbConnection() {
  if (pool) {
    return pool;
  }

  pool = await sql.connect(config);

  return pool;
}