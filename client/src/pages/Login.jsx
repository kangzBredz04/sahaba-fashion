import { useNavigate, useOutletContext } from "react-router-dom";
import { api } from "../utils.js";
import { useState } from "react";

export default function Login() {
  const [user, setUser] = useOutletContext();

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

  // const decode = jwt.decode();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    api.post("/auth/login", login).then((response) => {
      if (!response.token) {
        alert(response.msg);
      } else {
        alert(response.message);
        const data = api.get("/auth/my-account").then((res) => {
          // console.log(res.data.role);
          setUser(res.data);
          if (res.data.role === "admin") {
            console.log("Masuk sebagai admin");
            navigate("/admin");
            // window.location.reload();
          } else {
            console.log("Masuk sebagai user");
            navigate("/");
            // window.location.reload();
          }
          localStorage.setItem("role", res.data.role);
          localStorage.setItem("id", res.data.id);
        });
        setUser(data);
        localStorage.setItem("token", response.token);
      }
    });
  }

  // if (user) {
  //   return <Navigate to="/home" />;
  // } else {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center p-10">
        {/* pemisah */}
        <div className="w-full md:w-1/3 lg:w-1/2 p-6">
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
              className="w-full px-4 py-4 font-bold mb-4 text-sm text-white bg-black hover:bg-gray-500"
            >
              LOGIN
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
  // }
}
