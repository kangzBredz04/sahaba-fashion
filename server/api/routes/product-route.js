import express from "express";
import { verifyToken } from "../middleware/auth-middleware.js";
import {
  addProduct,
  deleteProduct,
  getAllProduct,
  updateProduct,
} from "../controllers/product-controller.js";

const router = express.Router();

router.get("/get-all-product", verifyToken, getAllProduct); // Router untuk mendapatkan semua produk
router.post("/add-product", verifyToken, addProduct); // Router untuk menambahkan data produk
router.put("/update-product/:id", verifyToken, updateProduct); // Router untuk mengubah data produk berdasarkan id
router.delete("/delete-product/:id", verifyToken, deleteProduct); // Router untuk menghapus data produk berdasarkan id

export default router;
