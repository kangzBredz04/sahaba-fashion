import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { api } from "./utils";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const AllContext = createContext();

function App() {
  const [user, setUser] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/product/get-all").then((response) => setProducts(response));
  }, []);

  // console.log(products);
  // useEffect(() => {
  //   api
  //     .get("/auth/my-account")
  //     .then((me) => {
  //       if (me) {
  //         console.log(me);
  //       } else {
  //         console.log("Salah");
  //       }
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }, []);

  return (
    <AllContext.Provider value={{ user, setUser, products, setProducts }}>
      <Header />
      <Outlet />
      <Footer />
    </AllContext.Provider>
  );
}

export default App;
