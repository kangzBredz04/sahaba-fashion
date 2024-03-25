import express from "express";
import {
  getCurrentUser,
  registerAccount,
} from "../controllers/auth-controller.js";

const router = express.Router();

router.get("/get-current-user", getCurrentUser); // Router untuk mendapatkan data user yang sedang login
router.post("/register", registerAccount); // Router untuk daftar akun (register)

export default router;
