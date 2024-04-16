import { pool } from "../config/db.js";

export const getOrderByIdUser = async (req, res) => {
  try {
    const result = await pool.query(
      `
      SELECT o.id, u.username, p.name_product, p.image_1, p.price, s.name_size, o.total_product, o.payment_method, o.address, o.status
      FROM orders o
      JOIN users u ON o.id_user = u.id
      JOIN products p ON o.id_product = p.id
      JOIN sizes s ON o.id_size = s.id WHERE o.id_user = $1
    `,
      [req.params.id]
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getAllOrder = async (req, res) => {
  try {
    const result = await pool.query(
      `
      SELECT o.id, u.username, p.name_product, s.name_size, o.total_product, o.payment_method, o.address, o.status
      FROM orders o
      JOIN users u ON o.id_user = u.id
      JOIN products p ON o.id_product = p.id
      JOIN sizes s ON o.id_size = s.id 
    `
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const addOrderUser = async (req, res) => {
  const { id_user, orders, payment_method, no_telp, address, status } =
    req.body;
  try {
    for (const order of orders) {
      const { id_product, id_size, total_product } = order;
      await pool.query(
        "INSERT INTO orders (id_user, id_product, id_size, total_product, payment_method,no_telp, address) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
        [
          id_user,
          id_product,
          id_size,
          total_product,
          payment_method,
          no_telp,
          address,
        ]
      );
      await pool.query(
        "DELETE FROM carts WHERE id_user = $1 AND id_product = $2 AND id_size = $3",
        [id_user, id_product, id_size]
      );
      await pool.query(
        "UPDATE stocks SET quantity = (quantity - $1) WHERE id_product = $2 AND id_size = $3",
        [total_product, id_product, id_size]
      );
    }
    res.status(200).json({ msg: "Pesanan telah berhasil" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const updateStatus = async (req, res) => {
  const { id, status } = req.body;
  try {
    await pool.query("UPDATE orders SET status = $1 WHERE id = $2", [
      status,
      id,
    ]);
    res.status(200).json({
      msg: "Status berhasil diubah.",
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
