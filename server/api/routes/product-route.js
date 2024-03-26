import express from "express";
import { verifyToken } from "../middleware/auth-middleware.js";
import {
  addProduct,
  deleteProduct,
  getAllProduct,
  updateProduct,
} from "../controllers/product-controller.js";

const router = express.Router();

router.get("/get-all", verifyToken, getAllProduct); // Router untuk mendapatkan semua produk
router.post("/add", verifyToken, addProduct); // Router untuk menambahkan data produk
router.put("/update/:id", verifyToken, updateProduct); // Router untuk mengubah data produk berdasarkan id
router.delete("/delete/:id", verifyToken, deleteProduct); // Router untuk menghapus data produk berdasarkan id

export default router;
