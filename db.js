import pkg from "pg";
import dotenv from "dotenv";

const { Pool } = require(pkg);

dotenv.config();

export const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATATABLE,
  port: process.env.PGPORT
});