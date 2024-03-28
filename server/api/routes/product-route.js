import express from "express";
import { verifyToken } from "../middleware/auth-middleware.js";
import {
  addProduct,
  deleteProduct,
  getAllProduct,
  getAllProduct2,
  updateProduct,
} from "../controllers/product-controller.js";

const router = express.Router();

router.get("/get-all", getAllProduct); // Router untuk mendapatkan semua produk
router.post("/add", verifyToken, addProduct); // Router untuk menambahkan data produk
router.put("/update/:id", verifyToken, updateProduct); // Router untuk mengubah data produk berdasarkan id
router.delete("/delete/:id", verifyToken, deleteProduct); // Router untuk menghapus data produk berdasarkan id

router.get("/get-all-2", getAllProduct2); // Router untuk mendapatkan semua produk termasuk stok dan ukuran

export default router;
