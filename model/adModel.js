import pool from "../config/config.js"; // Import MySQL connection pool
// Register a new admin
export const registerAdmin = async (username, passwordHash) => {
  try {
    const [result] = await pool.execute(
      "INSERT INTO admin_login (username, password_hash) VALUES (?, ?)",
      [username, passwordHash]
    );
    return result;
  } catch (error) {
    throw error;
  }
};
// Get admin by username (for login verification)
export const getAdminByUsername = async (username) => {
  try {
    const [rows] = await pool.execute(
      "SELECT * FROM admin_login WHERE username = ?",
      [username]
    );
    return rows[0]; // Returns the admin object or undefined
  } catch (error) {
    throw error;
  }
};