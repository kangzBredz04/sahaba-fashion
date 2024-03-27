import express from "express";
import {
  deleteAccount,
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
router.post("/login", loginAccount); // Router untuk login akun
router.get("/logout", verifyToken, logoutAccount); // Router untuk logout account
router.put("/update/:id", verifyToken, updateAccount);
router.put("/update-role/:id", verifyToken, updateRole);
router.delete("/delete/:id", verifyToken, deleteAccount);

export default router;
