import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { api } from "./utils";

export const AuthContext = createContext();

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    api
      .get("/auth/get-current-user")
      .then((me) => {
        if (me) {
          console.log(me);
        } else {
          console.log("Salah");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <AuthContext.Provider value={{}}>
      <Outlet context={[user, setUser]} />
    </AuthContext.Provider>
  );
}

export default App;
