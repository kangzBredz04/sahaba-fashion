import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { createContext, useEffect, useState } from "react";
import { api } from "../utils";
import Loading2 from "../components/Loading2";
import UnauthorizedPage from "./UnauthorizedPage";

export const AdminContext = createContext();

export default function Admin() {
  const [products, setProducts] = useState();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [popUp, setPopUp] = useState(false);
  const [editedProduct, setEditedProduct] = useState();
  const [editedUser, setEditedUser] = useState();
  const [admin, setAdmin] = useState({});
  const [stocks, setStocks] = useState([]);
  const [sizes, setSizes] = useState([]);

  useEffect(() => {
    // Simulasi pengambilan data produk
    setTimeout(() => {
      api.get("/product/get-all").then((res) => setProducts(res));
      api.get("/auth/get-all").then((res) => setUser(res));
      api.get("/auth/my-account").then((res) => setAdmin(res.data));
      api.get("/stock/get-all").then((res) => setStocks(res));
      api.get("/size/get-all").then((res) => setStocks(res));
      setLoading(false);
    }, 500);
  }, [products?.id]);

  // console.log(stocks);

  if (localStorage.getItem("role") == "admin") {
    return (
      <AdminContext.Provider
        value={{
          products,
          setProducts,
          popUp,
          setPopUp,
          editedProduct,
          setEditedProduct,
          loading,
          setLoading,
          user,
          setUser,
          editedUser,
          setEditedUser,
          stocks,
          setStocks,
          sizes,
          setSizes,
        }}
      >
        <div className="flex h-screen overflow-hidden font-KumbhSans">
          {loading && <Loading2 />}
          {/* Sidebar */}
          <SideBar />
          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            {/* Navbar */}
            <Navbar />
            {/* Main Content */}
            <Outlet context={[admin, setAdmin]} />
            <Footer />
          </div>
        </div>
      </AdminContext.Provider>
    );
  } else {
    return <UnauthorizedPage />;
  }
}
