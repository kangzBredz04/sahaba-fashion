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
// import MyAccount from "./pages/MyAccount.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
        path: "/product/:id",
        element: <DetailProduct />,
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin",
    element: <Admin />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/admin",
        element: <DashboardAdmin />,
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
