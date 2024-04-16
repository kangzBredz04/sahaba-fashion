import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import NewArrivals from "./pages/NewArrivals.jsx";
import DetailProduct from "./pages/DetailProduct.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Admin from "./pages/Admin.jsx";
import ProductAdmin from "./pages/ProductAdmin.jsx";
import DashboardAdmin from "./pages/DashboardAdmin.jsx";
import ErrorPageAdmin from "./pages/ErrorPageAdmin.jsx";
import MyAccount from "./pages/MyAccount.jsx";
import CartUser from "./pages/CartUser.jsx";
import Shop from "./pages/Shop.jsx";
import MyAccountAdmin from "./pages/MyAccountAdmin.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import UserAdmin from "./pages/UserAdmin.jsx";
import StockAdmin from "./pages/StockAdmin.jsx";
import OrderAdmin from "./pages/OrderAdmin.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import CheckOut from "./pages/CheckOut.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/new-arrivals",
        element: <NewArrivals />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/profile",
        element: <MyAccount />,
      },
      {
        path: "/product/:id",
        element: <DetailProduct />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/cart",
        element: <CartUser />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/checkout",
        element: <CheckOut />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    errorElement: <ErrorPageAdmin />,
    children: [
      {
        path: "/admin",
        element: <DashboardAdmin />,
      },
      {
        path: "/admin/profile",
        element: <MyAccountAdmin />,
      },
      {
        path: "/admin/user",
        element: <UserAdmin />,
      },
      {
        path: "/admin/stock",
        element: <StockAdmin />,
      },
      {
        path: "/admin/order",
        element: <OrderAdmin />,
      },
      {
        path: "/admin/product",
        element: <ProductAdmin />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
