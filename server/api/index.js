import express from "express";
import "dotenv/config";

import AuthRoute from "./routes/auth-route.js";

const app = express();

app.use(express.json());

app.use("/auth", AuthRoute);

app.listen(process.env.API_PORT, () =>
  console.log("Server berhasil dijalankan.")
);
