import express from "express";
import { verifyToken } from "../middleware/auth-middleware.js";
import {
  addCart,
  deleteCart,
  getAllCart,
  updateCart,
} from "../controllers/cart-controller.js";

const router = express.Router();

router.get("/get-all", verifyToken, getAllCart); // Router untuk mendapatkan semua keranjang
router.post("/add", verifyToken, addCart); // Router untuk menambahkan data keranjang
router.put("/update/:id", verifyToken, updateCart); // Router untuk mengubah data keranjang berdasarkan id
router.delete("/delete/:id", verifyToken, deleteCart); // Router untuk menghapus data keranjang berdasarkan id

export default router;
