import express from "express";
import { verifyToken } from "../middleware/auth-middleware.js";
import {
  addOrderUser,
  getAllOrder,
  getOrderByIdUser,
  updateStatus,
} from "../controllers/order-controller.js";

const router = express.Router();

router.get("/get/:id", verifyToken, getOrderByIdUser);
router.get("/get-all", verifyToken, getAllOrder);
router.post("/add", verifyToken, addOrderUser);
router.put("/update-status", verifyToken, updateStatus);
// router.delete("/delete/:id", verifyToken, deleteCart); // Router untuk menghapus data keranjang berdasarkan id

export default router;
