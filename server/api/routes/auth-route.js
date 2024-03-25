import express from "express";
import { getCurrentUser } from "../controllers/auth-controller.js";

const router = express.Router();

router.get("/get-current-user", getCurrentUser); // Get data login

export default router;
