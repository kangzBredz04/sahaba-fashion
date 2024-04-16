import express from "express";
import { verifyToken } from "../middleware/auth-middleware.js";
import {
  addStock,
  deleteStock,
  getAllStock,
  getSizeBydIdProduct,
  updateStock,
} from "../controllers/stock-controller.js";

const router = express.Router();

router.get("/get-all", verifyToken, getAllStock); // Router untuk mendapatkan semua stok
router.get("/get-size/:id", verifyToken, getSizeBydIdProduct);
router.post("/add", verifyToken, addStock); // Router untuk menambahkan data stok
router.put("/update/:id", verifyToken, updateStock); // Router untuk mengubah data stok berdasarkan id
router.delete("/delete/:id", verifyToken, deleteStock); // Router untuk menghapus data stok berdasarkan id

export default router;
