import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { api } from "./utils";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

export const AllContext = createContext();

function App() {
  const [user, setUser] = useState();
  const [cart, setCart] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/product/get-all").then((response) => setProducts(response));
    api.get("/auth/my-account").then((response) => setUser(response.data));
    api
      .get(`/cart/get/${localStorage.getItem("id")}`)
      .then((response) => console.log(response));
  }, [user?.id, cart]);

  // useEffect(() => {
  //   api
  //     .get(`/cart/get/${localStorage.getItem("id")}`)
  //     .then((response) => console.log(response));
  // }, [cart]);

  console.log(user);
  return (
    <AllContext.Provider value={{ products, setProducts }}>
      <Header />
      <Outlet context={[user, setUser]} />
      <Footer />
    </AllContext.Provider>
  );
}

export default App;
