import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";

import AuthRoute from "./routes/auth-route.js";
import ProductRoute from "./routes/product-route.js";
import SizeRoute from "./routes/size-route.js";
import StockRoute from "./routes/stock-route.js";
import CartRoute from "./routes/cart-route.js";
import WishlistRoute from "./routes/wishlist-route.js";
import OrderRoute from "./routes/order-route.js";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "https://sahaba-fashion.vercel.app"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

const router = express.Router();
app.use("/api", router);

router.use("/auth", AuthRoute);
router.use("/product", ProductRoute);
router.use("/size", SizeRoute);
router.use("/stock", StockRoute);
router.use("/cart", CartRoute);
router.use("/wishlist", WishlistRoute);
router.use("/order", OrderRoute);

app.listen(process.env.API_PORT, () =>
  console.log("Server berhasil dijalankan.")
);
