// backend/models/db.js
const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: parseInt(process.env.PGPORT, 10),
});

pool.on("connect", () => {
  console.log("✅ Connected to PostgreSQL database");
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
