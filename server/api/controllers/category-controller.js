import argon2 from "argon2";
import jwt from "jsonwebtoken";
import { pool } from "../config/db.js";

// Controller untuk menambahkan kategori produk
export const addCategory = async (req, res) => {
  try {
    const result = await pool.query(
      "INSERT INTO category (name) VALUES ($1) RETURNING *",
      [req.body.name]
    );
    res.json({
      category: result.rows[0],
      message: "Kategori berhasil ditambahkan.",
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getAllCategory = async (_req, res) => {};
