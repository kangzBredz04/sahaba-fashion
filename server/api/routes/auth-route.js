import express from "express";
import {
  addAccount,
  deleteAccount,
  getAllUser,
  getCurrentUser,
  loginAccount,
  logoutAccount,
  registerAccount,
  updateAccount,
  updateRole,
} from "../controllers/auth-controller.js";
import { verifyToken } from "../middleware/auth-middleware.js";

const router = express.Router();

router.get("/my-account", verifyToken, getCurrentUser); // Router untuk mendapatkan data user yang sedang login
router.post("/register", registerAccount); // Router untuk daftar akun (register)
router.post("/add", addAccount); // Router untuk daftar akun melalui admin
router.post("/login", loginAccount); // Router untuk login akun
router.get("/logout", verifyToken, logoutAccount); // Router untuk logout account
router.get("/get-all", verifyToken, getAllUser); // Router untuk mendapatkan semua user
router.put("/update/:id", verifyToken, updateAccount); // Router untuk update data user
router.put("/update-role/:id", verifyToken, updateRole); // Router untuk update role user
router.delete("/delete/:id", verifyToken, deleteAccount); // Router untuk delete akun user

export default router;
