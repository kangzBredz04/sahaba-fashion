import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { api } from "./utils";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

export const AllContext = createContext();

function App() {
  const [user, setUser] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/product/get-all").then((response) => setProducts(response));
    api.get("/auth/my-account").then((response) => setUser(response.data));
  }, []);

  // useEffect(() => {
  //   api.get("/auth/my-account").then((response) => setUser(response.data));
  // }, []);

  console.log(user);
  return (
    <AllContext.Provider value={{ user, setUser, products, setProducts }}>
      <Header />
      <Outlet context={[user, setUser]} />
      <Footer />
    </AllContext.Provider>
  );
}

export default App;
