import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";

import AuthRoute from "./routes/auth-route.js";
import ProductRoute from "./routes/product-route.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/auth", AuthRoute);
app.use("/product", ProductRoute);

app.listen(process.env.API_PORT, () =>
  console.log("Server berhasil dijalankan.")
);