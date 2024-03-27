import { pool } from "../config/db.js";

// Controller untuk menambahkan stok produk
export const addStock = async (req, res) => {
  try {
    const result = await pool.query(
      "INSERT INTO stocks (id_product, id_size, quantity, id_category) VALUES ($1, $2, $3, $4) RETURNING *",
      [
        req.body.id_product,
        req.body.id_size,
        req.body.quantity,
        req.body.id_category,
      ]
    );
    res.json({
      stock: result.rows[0],
      message: "Stok berhasil ditambahkan.",
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Controller untuk mendapatkan semua data stok
export const getAllStock = async (_req, res) => {
  try {
    const result = await pool.query("SELECT * FROM stocks");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Controller untuk mengubah data stok berdasarkan id
export const updateStock = async (req, res) => {
  try {
    await pool.query(
      "UPDATE stocks SET id_product = $1, id_size = $2, quantity = $3, id_category = $4 WHERE id = $5",
      [
        req.body.id_product,
        req.body.id_size,
        req.body.quantity,
        req.body.id_category,
        req.params.id,
      ]
    );
    res.status(200).json({
      message: "Stok berhasil diubah.",
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Controller untuk menghapus data stok berdasarkan id
export const deleteStock = async (req, res) => {
  try {
    await pool.query("DELETE FROM stocks WHERE id = $1", [req.params.id]);
    res.send("Stock berhasil dihapus.");
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};