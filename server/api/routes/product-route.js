import express from "express";
import { verifyToken } from "../middleware/auth-middleware.js";
import { getAllProduct } from "../controllers/product-controller.js";

const router = express.Router();

router.get("/get-all-product", getAllProduct); // Router untuk mendapatkan semua produk

export default router;
