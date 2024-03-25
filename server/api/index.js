import express from "express";
import "dotenv/config";

const app = express();

app.listen(process.env.API_PORT, () =>
  console.log("Server berhasil dijalankan.")
);
