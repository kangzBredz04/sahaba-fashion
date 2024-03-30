import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { createContext, useEffect, useState } from "react";
import { api } from "../utils";

export const AdminContext = createContext();

export default function Admin() {
  const [products, setProducts] = useState();

  useEffect(() => {
    api
      .get("/product/get-all")
      .then((product) => console.log(product))
      .catch((e) => {
        console.log(e);
      });
  }, []);

  // console.log(products);

  return (
    <AdminContext.Provider value={{ products, setProducts }}>
      <div className="flex h-screen overflow-hidden font-KumbhSans">
        {/* Sidebar */}
        <SideBar />
        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Navbar */}
          <Navbar />
          {/* Main Content */}
          <Outlet />
          <Footer />
        </div>
      </div>
    </AdminContext.Provider>
  );
}
