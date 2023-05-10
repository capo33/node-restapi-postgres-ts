import { Pool } from "pg";

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "Kapocafe123+",
  database: "typescriptapi",
  port: 5432,
});