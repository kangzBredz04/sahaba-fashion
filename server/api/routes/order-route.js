import express from "express";
import { verifyToken } from "../middleware/auth-middleware.js";
import { addOrderUser, getOrderByIdUser } from "../controllers/order-controller.js";

const router = express.Router();

router.get("/get/:id", verifyToken, getOrderByIdUser); 
router.post("/add", verifyToken, addOrderUser); 
// router.put("/update/:id", verifyToken, updateCart); // Router untuk mengubah data keranjang berdasarkan id
// router.delete("/delete/:id", verifyToken, deleteCart); // Router untuk menghapus data keranjang berdasarkan id

export default router;
