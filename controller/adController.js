import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { registerAdmin, getAdminByUsername } from "../model/adModel.js";
import { config } from "dotenv";
config()
// Admin Registration Controller
export const register = async (req, res) => {
  const { username, password } = req.body;
  try {
    // Check if the username already exists
    const existingAdmin = await getAdminByUsername(username);
    if (existingAdmin) {
      return res.status(400).json({ message: "Username already exists!" });
    }
    // Hash password before storing it in the database
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);
    // Register the admin
    const result = await registerAdmin(username, passwordHash);
    res.status(201).json({ message: "Admin registered successfully!", adminId: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error registering admin" });
  }
};
// Admin Login Controller
export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    // Get admin details from database
    const admin = await getAdminByUsername(username);
    if (!admin) {
      return res.status(400).json({ message: "Admin not found!" });
    }
    // Compare entered password with stored hash
    const isMatch = await bcrypt.compare(password, admin.password_hash);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials!" });
    }
    // Generate JWT token for authentication
    const token = jwt.sign(
      { adminId: admin.admin_id, username: admin.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.status(200).json({ message: "Login successful!", token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error logging in" });
  }
};