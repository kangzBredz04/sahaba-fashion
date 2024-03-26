import { pool } from "../config/db.js";

// Controller untuk menambahkan ukuran produk
export const addSize = async (req, res) => {
  try {
    const result = await pool.query(
      "INSERT INTO sizes (name) VALUES ($1) RETURNING *",
      [req.body.name]
    );
    res.json({
      category: result.rows[0],
      message: "Ukuran berhasil ditambahkan.",
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Controller untuk mendapatkan semua data ukuran
export const getAllSize = async (_req, res) => {
  try {
    const result = await pool.query("SELECT * FROM sizes");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Controller untuk mengubah data ukuran berdasarkan id
export const updateSize = async (req, res) => {
  try {
    await pool.query("UPDATE sizes SET name = $1 WHERE id = $2", [
      req.body.name,
      req.params.id,
    ]);
    res.status(200).json({
      message: "Ukuran berhasil diubah.",
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Controller untuk menghapus data ukuran berdasarkan id
export const deleteSize = async (req, res) => {
  try {
    await pool.query("DELETE FROM sizes WHERE id = $1", [req.params.id]);
    res.send("Ukuran berhasil dihapus.");
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
