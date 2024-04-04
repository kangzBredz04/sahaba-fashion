import express from "express";
import { verifyToken } from "../middleware/auth-middleware.js";
import {
  addWishlist,
  deleteWishlistByIdUser,
  getWishlistByIdUser,
} from "../controllers/wishlist-controller.js";

const router = express.Router();

router.post("/add", verifyToken, addWishlist);
router.get("/get/:id", verifyToken, getWishlistByIdUser);
router.delete("/delete", verifyToken, deleteWishlistByIdUser);

export default router;
