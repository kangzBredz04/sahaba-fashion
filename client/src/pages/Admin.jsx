import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { createContext, useEffect, useState } from "react";
import { api } from "../utils";
import Loading2 from "../components/Loading2";

export const AdminContext = createContext();

export default function Admin() {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   api
  //     .get("/product/get-all")
  //     .then((pr) => setProducts(pr))
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }, []);

  useEffect(() => {
    // Simulasi pengambilan data produk
    setTimeout(() => {
      api
        .get("/product/get-all")
        .then((pr) => {
          setProducts(pr);
          setLoading(false);
        })
        .catch((e) => {
          console.log(e);
        });
    }, 500); // Simulasi loading selama 2 detik
  }, [products?.id]);

  return (
    <AdminContext.Provider value={{ products, setProducts }}>
      <div className="flex h-screen overflow-hidden font-KumbhSans">
        {loading && <Loading2 />}
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
