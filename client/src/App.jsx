import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { api } from "./utils";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Loading from "./components/Loading";

export const AllContext = createContext();

function App() {
  const [user, setUser] = useState({});
  const [cart, setCart] = useState([]);
  const [register, setRegister] = useState({});
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  // const [carts, setCarts] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get("/product/get-all").then((response) => setProducts(response));
    api.get("/auth/my-account").then((response) => setUser(response.data));
    api
      .get(`/cart/get/${localStorage.getItem("id")}`)
      .then((response) => setCart(response));
    api
      .get(`/wishlist/get/${localStorage.getItem("id")}`)
      .then((response) => setWishlist(response));
    api
      .get(`/order/get/${localStorage.getItem("id")}`)
      .then((res) => setOrders(res));
  }, [user?.id, cart]);

  // console.log(orders);
  return (
    <AllContext.Provider
      value={{
        products,
        setProducts,
        wishlist,
        setWishlist,
        register,
        setRegister,
        orders,
        setOrders,
        cart,
        setCart,
      }}
    >
      <Header />
      <Outlet context={[user, setUser]} />
      <Footer />
    </AllContext.Provider>
  );
}

export default App;
