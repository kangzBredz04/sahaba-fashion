import express from "express";
import { verifyToken } from "../middleware/auth-middleware.js";
import {
  addProduct,
  getAllProduct,
} from "../controllers/product-controller.js";

const router = express.Router();

router.get("/get-all-product", verifyToken, getAllProduct); // Router untuk mendapatkan semua produk
router.post("/add-product", verifyToken, addProduct); // Router untuk menambahkan data produk

export default router;
