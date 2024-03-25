import express from "express";
import {
  getCurrentUser,
  loginAccount,
  registerAccount,
} from "../controllers/auth-controller.js";

const router = express.Router();

router.get("/get-current-user", getCurrentUser); // Router untuk mendapatkan data user yang sedang login
router.post("/register", registerAccount); // Router untuk daftar akun (register)
router.post("/login", loginAccount); // Router untuk login akun

export default router;
