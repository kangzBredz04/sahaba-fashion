import argon2 from "argon2";
import jwt from "jsonwebtoken";
import { pool } from "../config/db.js";

// Controller untuk daftar akun (register)
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

// Controller untuk login
export const loginAccount = async (req, res) => {
  const { usernameoremail, password } = req.body;
  try {
    // Mencari data user berdasarkan username atau email
    const result = await pool.query(
      "SELECT * FROM users WHERE username = $1 OR email = $2",
      [usernameoremail, usernameoremail]
    );

    if (result.rows[0]) {
      // Verifikasi antara password yang diinputkan di client dengan database
      const isPasswordValid = await argon2.verify(
        result.rows[0].password,
        password
      );

      if (isPasswordValid) {
        const token = jwt.sign(result.rows[0], process.env.SECRET_KEY);

        // Set cookie
        res.cookie("token", token, {
          httpOnly: true,
        });

        res.status(200).json({
          token,
          message: "Login berhasil !!!",
        });
      } else {
        return res.status(401).json({ msg: "Password salah !!!" });
      }
    } else {
      return res.status(404).json({ msg: "User tidak ditemukan !!!" });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Controller untuk mendapatkan user yang sedang login
export const getCurrentUser = async (req, res) => {
  try {
    return res.json({
      status: "Berhasil",
      msg: `${req.user.username} sedang login`,
      data: req.user,
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to retrieve current user data. User is not logged in",
    });
  }
};
