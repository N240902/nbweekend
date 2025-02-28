import mysql from "mysql2/promise";
import dotenv from "dotenv";

// Load environment variables from .env file

dotenv.config();


// Create a MySQL connection pool
const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  waitForConnections: true, // Optional: helps manage waiting for available connections
  connectionLimit: 10, // Optional: limit the number of connections in the pool
  queueLimit: 0 // Optional: no limit on the queue of waiting connections
});

async function testConnection() {
  try {
    const [rows] = await pool.execute("SELECT 1");
    console.log("Connected to MySQL!");
  } catch (err) {
    console.error("Connection failed:", err.message);
  }
}

testConnection();



export default pool;

