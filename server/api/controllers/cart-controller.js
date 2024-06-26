import { pool } from "../config/db.js";

// Controller untuk menambahkan barang kedalam keranjang
export const addCart = async (req, res) => {
  const { id_user, id_product, total_product, id_size } = req.body;
  try {
    // Query mendapatkan keranjang produk dan ukuran yang sama
    const findCart = await pool.query(
      "SELECT * FROM carts WHERE id_user = $1 AND id_product = $2 AND id_size = $3",
      [id_user, id_product, id_size]
    );

    const findStock = await pool.query(
      "SELECT * FROM stocks WHERE id_product = $1 AND id_size = $2",
      [id_product, id_size]
    );

    // Pengecekan keranjang terhadap user, prooduk dan ukuran yang sama
    if (findCart.rows[0]) {
      if (findStock.rows[0].quantity < total_product) {
        res.send("Stok tidak mencukupi");
      } else {
        await pool.query(
          "UPDATE carts SET total_product = total_product + $1 WHERE id = $2",
          [total_product, findCart.rows[0].id]
        );
        res.status(200).json({
          msg: "Berhasil ditambahkan ke keranjang",
        });
      }
    } else {
      if (findStock.rows[0].quantity < total_product) {
        res.send("Stok tidak mencukupi");
      } else {
        await pool.query(
          "INSERT INTO carts (id_user, id_product, total_product, id_size) VALUES ($1, $2, $3, $4) RETURNING *",
          [id_user, id_product, 1, id_size]
        );
        res.status(200).json({
          msg: "Berhasil ditambahkan ke keranjang",
        });
      }
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Controller untuk mendapatkan data keranjang berdasarkan id user
export const getCartByIdUser = async (req, res) => {
  try {
    const result = await pool.query(
      `
      SELECT c.id, c.id_product, c.id_size, p.image_1, p.name_product, s.name_size, c.total_product, p.price 
      FROM carts c 
      JOIN products p ON c.id_product = p.id
      JOIN sizes s ON c.id_size = s.id WHERE c.id_user = $1
    `,
      [req.params.id]
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Controller untuk mengubah data keranjang berdasarkan id
export const updateCart = async (req, res) => {
  try {
    const findCart = await pool.query(" SELECT * FROM carts WHERE id = $1", [
      req.params.id,
    ]);

    const findStock = await pool.query(
      "SELECT * FROM stocks WHERE id_product = $1 AND id_size = $2",
      [findCart.rows[0].id_product, findCart.rows[0].id_size]
    );

    if (req.body.total_product > findStock.rows[0].quantity) {
      res.status(404).json({ status: 404, msg: "Stok tidak mencukupi" });
    } else {
      await pool.query("UPDATE carts SET total_product = $1 WHERE id = $2", [
        req.body.total_product,
        req.params.id,
      ]);
      res.status(200).json({
        msg: "Keranjang berhasil di ubah",
      });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Controller untuk menghapus data stok berdasarkan id
export const deleteCart = async (req, res) => {
  try {
    await pool.query("DELETE FROM carts WHERE id = $1", [req.params.id]);
    res.status(200).json({ msg: "Keranjang berhasil dihapus." });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
