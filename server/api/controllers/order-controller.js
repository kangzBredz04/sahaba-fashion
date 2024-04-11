import { pool } from "../config/db.js";

export const getOrderByIdUser = async (req, res) => {
  try {
    const result = await pool.query(
      `
      SELECT u.username, p.name_product, s.name_size, o.quantity, o.payment_method, o.address, o.status
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
      SELECT o.id, u.username, p.name_product, s.name_size, o.quantity, o.payment_method, o.address, o.status
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
  const { id_user, orders, payment_method, address, status } = req.body;
  try {
    for (const order of orders) {
      const { id_product, id_size, quantity } = order;
      await pool.query(
        "INSERT INTO orders (id_user, id_product, id_size, quantity, payment_method, address) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
        [id_user, id_product, id_size, quantity, payment_method, address]
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
