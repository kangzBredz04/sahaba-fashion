import { pool } from "../config/db.js";

export const getOrderByIdUser = async (req, res) => {
  try {
    const result = await pool.query(
      `
      SELECT p.image_1, p.name_product, s.name_size, c.total_product, p.price 
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
