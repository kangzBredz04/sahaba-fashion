import { Navigate, useOutletContext } from "react-router-dom";
import { api } from "../utils.js";
import { useState } from "react";

export default function Login() {
  const [login, setLogin] = useState({
    usernameoremail: "",
    password: "",
  });

  // Event saat mengetik pada textfield
  function handleChange(e) {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  }
  const [user, setUser] = useOutletContext();

  function handleSubmit(e) {
    e.preventDefault();
    api.post("/auth/login", login).then(async (response) => {
      if (!response.token) {
        alert(response.msg);
      }
      const data = await api.get("/auth/get-current-user");
      setUser(data);
      return console.log(data);
    });
  }

  if (user) {
    return <Navigate to="/" />;
  } else {
    return (
      <div className="container mx-auto">
        <div className="flex justify-center items-center h-screen">
          {/* pemisah */}
          <div className="w-full md:w-1/2 lg:w-1/3 p-6">
            <h1 className="text-xl font-bold mb-6 font-KumbhSans text-center">
              LOGIN
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-xs font-semibold mb-2 font-KumbhSans"
                  htmlFor="nama"
                >
                  USERNAME OR EMAIL ADDRESS *
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 focus:border-black focus:outline-none focus:ring-black focus:font-KumbhSans"
                  type="text"
                  id="usernameoremail"
                  name="usernameoremail"
                  value={login.usernameoremail}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-xs font-semibold mb-2 font-KumbhSans"
                  htmlFor="password"
                >
                  PASSWORD *
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 focus:border-black focus:outline-none  focus:ring-black focus:font-KumbhSans"
                  type="password"
                  id="password"
                  name="password"
                  value={login.password}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-4 font-bold mb-4 text-white bg-black"
              >
                Login
              </button>
              <div className="mb-4 text-center">
                <p className="font-KumbhSans text-xs">
                  Not A Member?{" "}
                  <a href="/register" className="underline">
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
