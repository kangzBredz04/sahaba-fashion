import { pool } from "../config/db.js";

// Controller untuk menambahkan kategori produk
export const addCategory = async (req, res) => {
  try {
    const result = await pool.query(
      "INSERT INTO categorys (name_category) VALUES ($1) RETURNING *",
      [req.body.name_category]
    );
    res.json({
      category: result.rows[0],
      message: "Kategori berhasil ditambahkan.",
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Controller untuk mendapatkan semua data kategori
export const getAllCategory = async (_req, res) => {
  try {
    const result = await pool.query("SELECT * FROM categorys");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Controller untuk mengubah data kategori berdasarkan id
export const updateCategory = async (req, res) => {
  try {
    await pool.query("UPDATE categorys SET name_category = $1 WHERE id = $2", [
      req.body.name_category,
      req.params.id,
    ]);
    res.status(200).json({
      message: "Kategori berhasil diubah.",
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Controller untuk menghapus data kategori berdasarkan id
export const deleteCategory = async (req, res) => {
  try {
    await pool.query("DELETE FROM categorys WHERE id = $1", [req.params.id]);
    res.send("Kategori berhasil dihapus.");
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
