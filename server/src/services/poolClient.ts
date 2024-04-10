// Libraries import
import postgres from "pg";

const { Pool } = postgres;
export const pool = new Pool(); // DB connection : pools will use environment variables for connection information
