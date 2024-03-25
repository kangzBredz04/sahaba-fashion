import argon2 from "argon2";
import { pool } from "../config/db.js";

export const registerAccount = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashPassword = await argon2.hash(password);
    const result = await pool.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
      [username, email, hashPassword]
    );
    res.status(201).json({ msg: "Pendaftaran berhasil", data: result.rows[0] });
  } catch (error) {
    // console.log(error);
    res.status(500).json({ error });
  }
};

// Controller untuk mendapatkan user yang sedang login
export const getCurrentUser = async (req, res) => {
  try {
    return res.json({
      status: "Berhasil",
      //   msg: `${req.user.username} sedang login`,
      //   data: req.user,
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to retrieve current user data. User is not logged in",
    });
  }
};
