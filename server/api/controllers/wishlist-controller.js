import { pool } from "../config/db.js";

export const addWishlist = async (req, res) => {
  const { id_user, id_product, status } = req.body;
  try {
    const sumStock = await pool.query(
      "SELECT SUM(quantity) AS total_stock FROM stocks WHERE id_product = $1 GROUP BY id_product",
      [id_product]
    );

    if (sumStock.rows[0]) {
      await pool.query(
        "INSERT INTO wishlists (id_user, id_product, status) VALUES ($1, $2, $3) RETURNING *",
        [req.body.id_user, req.body.id_product, "IN STOCK"]
      );
      res.status(200).json({ msg: "Produk berhasil dimasukan ke wishlist" });
    } else {
      await pool.query(
        "INSERT INTO wishlists (id_user, id_product, status) VALUES ($1, $2, $3) RETURNING *",
        [req.body.id_user, req.body.id_product, "OUT STOCK"]
      );
      res.status(200).json({ msg: "Produk berhasil dimasukan ke wishlist" });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getWishlistByIdUser = async (req, res) => {
  try {
    const result = await pool.query(
      `
      SELECT w.id, w.id_product, p.image_1, p.name_product, p.price, w.status
      FROM wishlists w
      JOIN products p ON w.id_product = p.id
      WHERE w.id_user = $1
    `,
      [req.params.id]
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deleteWishlistByIdUser = async (req, res) => {
  try {
    await pool.query(
      "DELETE FROM wishlists WHERE id_user = $1 AND id_product = $2",
      [req.body.id_user, req.body.id_product]
    );
    res.send("Produk berhasil dihapus dari wishlist.");
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
