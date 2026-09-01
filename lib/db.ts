import sql from "mssql";

const config = {
  user: process.env.DB_USER,

  password: process.env.DB_PASSWORD,

  server: process.env.DB_SERVER!,

  database: process.env.DB_DATABASE,

  options: {
    trustServerCertificate: true,
  },
};
let pool: sql.ConnectionPool | null = null;

export async function connectDB() {
  if (pool) return pool;

  pool = await sql.connect(config);

  return pool;
}
