import { pool } from "../config/db.js";

// Controller untuk menambahkan data produk
export const addProduct = async (req, res) => {
  try {
    const result = await pool.query(
      "INSERT INTO products (name_product, price, description, image_1, image_2) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [
        req.body.name_product,
        req.body.price,
        req.body.description,
        req.body.image_1,
        req.body.image_2,
      ]
    );
    res.json({
      student: result.rows[0],
      message: "Produk berhasil ditambahkan.",
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Controller untk mendapatkan semua data produk
export const getAllProduct = async (_req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Controller untuk mendapatkan semua data produk beserta data ukuran dan stok
export const getAllProduct2 = async (_req, res) => {
  try {
    const result = await pool.query(
      `SELECT
      p.id, p.name_product, p.price, c.name_category, s.name_size, st.quantity
      FROM  stocks st
      JOIN products p ON st.id_product = p.id
      JOIN sizes s ON st.id_size = s.id
      JOIN categorys c ON st.id_category = c.id`
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Controller untuk mengubah data produk berdasarkan id
export const updateProduct = async (req, res) => {
  try {
    await pool.query(
      "UPDATE products SET name_product = $1, price = $2, description = $3, image_1 = $4, image_2 = $5 WHERE id = $6",
      [
        req.body.name_product,
        req.body.price,
        req.body.description,
        req.body.image_1,
        req.body.image_2,
        req.params.id,
      ]
    );
    res.status(200).json({
      message: "Produk berhasil diubah.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error.message });
  }
};

// Controller untuk menghapus data produk berdasarkan id
export const deleteProduct = async (req, res) => {
  try {
    await pool.query("DELETE FROM products WHERE id = $1", [req.params.id]);
    res.send("Produk berhasil dihapus.");
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
