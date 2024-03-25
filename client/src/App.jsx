import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

export const AuthContext = createContext();

function App() {
  const [user, setUser] = useState();
  return (
    <AuthContext.Provider value={{}}>
      <Outlet context={[user, setUser]} />
    </AuthContext.Provider>
  );
}

export default App;
