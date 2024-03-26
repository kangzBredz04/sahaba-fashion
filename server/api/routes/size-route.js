import express from "express";
import { verifyToken } from "../middleware/auth-middleware.js";
import {
  addSize,
  deleteSize,
  getAllSize,
  updateSize,
} from "../controllers/size-controller.js";

const router = express.Router();

router.get("/get-all", verifyToken, getAllSize); // Router untuk mendapatkan semua ukuran
router.post("/add", verifyToken, addSize); // Router untuk menambahkan data ukuran
router.put("/update/:id", verifyToken, updateSize); // Router untuk mengubah data ukuran berdasarkan id
router.delete("/delete/:id", verifyToken, deleteSize); // Router untuk menghapus data ukuran berdasarkan id

export default router;
