import express from "express";
import { verifyToken } from "../middleware/auth-middleware.js";
import {
  addCategory,
  deleteCategory,
  getAllCategory,
  updateCategory,
} from "../controllers/category-controller.js";

const router = express.Router();

router.get("/get-all", verifyToken, getAllCategory); // Router untuk mendapatkan semua kategori
router.post("/add", verifyToken, addCategory); // Router untuk menambahkan data kategori
router.put("/update/:id", verifyToken, updateCategory); // Router untuk mengubah data kategori berdasarkan id
router.delete("/delete/:id", verifyToken, deleteCategory); // Router untuk menghapus data kategori berdasarkan id

export default router;
