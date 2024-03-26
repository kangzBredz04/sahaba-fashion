import express from "express";
import { verifyToken } from "../middleware/auth-middleware.js";
import {
  addCategory,
  getAllCategory,
} from "../controllers/category-controller.js";

const router = express.Router();

router.get("/get-all-category", verifyToken, getAllCategory); // Router untuk mendapatkan semua kategori
router.post("/add-category", verifyToken, addCategory); // Router untuk menambahkan data kategori

export default router;
