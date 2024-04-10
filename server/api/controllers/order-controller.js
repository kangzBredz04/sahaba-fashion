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
