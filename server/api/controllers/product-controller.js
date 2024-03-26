import argon2 from "argon2";
import jwt from "jsonwebtoken";
import { pool } from "../config/db.js";

// Controller untk mendapatkan semua data produk
export const getAllProduct = async (_req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
