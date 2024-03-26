import express from "express";
import {
  getCurrentUser,
  loginAccount,
  logoutAccount,
  registerAccount,
} from "../controllers/auth-controller.js";
import { verifyToken } from "../middleware/auth-middleware.js";

const router = express.Router();

router.get("/get-current-user", verifyToken, getCurrentUser); // Router untuk mendapatkan data user yang sedang login
router.post("/register", registerAccount); // Router untuk daftar akun (register)
router.post("/login", loginAccount); // Router untuk login akun
router.get("/logout", verifyToken, logoutAccount); // Router untuk logout account

export default router;
