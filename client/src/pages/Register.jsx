/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { api } from "../utils";
import { AllContext } from "../App";
import { useNavigate, useOutletContext } from "react-router-dom";

export default function Register() {
  const { register, setRegister } = useContext(AllContext);
  const [user, setUser] = useOutletContext();

  const navigate = useNavigate();
  return (
    <div className="container mx-auto font-KumbhSans">
      <div className="flex justify-center items-center h-screen">
        <div className="w-full md:w-1/3 lg:w-1/2 p-6">
          <h1 className="text-xl font-bold mb-6 font-KumbhSans text-center">
            REGISTER
          </h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              api.post("/auth/register", register).then((res) => {
                alert(res.msg);
              });
              api.get("/auth/my-account").then((res) => {
                setUser(res.data);
                localStorage.setItem("role", res.data.role);
                localStorage.setItem("id", res.data.id);
                window.location.href = "/";
              });
            }}
          >
            <div className=" flex flex-row gap-4">
              <div className="mb-4 grow">
                <label
                  className="block text-xs font-semibold mb-2"
                  htmlFor="first_name"
                >
                  NAMA DEPAN *
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 focus:border-black focus:outline-none focus:font-KumbhSans "
                  type="text"
                  id="first_name"
                  name="first_name"
                  value={register.first_name}
                  onChange={(e) =>
                    setRegister({
                      ...register,
                      first_name: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="mb-4 grow">
                <label
                  className="block text-xs font-semibold mb-2"
                  htmlFor="last_name"
                >
                  NAMA BELAKANG *
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 focus:border-black focus:outline-none focus:ring-black focus:font-KumbhSans"
                  type="text"
                  id="last_name"
                  name="last_name"
                  value={register.last_name}
                  onChange={(e) =>
                    setRegister({
                      ...register,
                      last_name: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-xs font-semibold mb-2"
                htmlFor="username"
              >
                USERNAME *
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 focus:border-black focus:outline-none focus:ring-black focus:font-KumbhSans"
                type="text"
                id="username"
                name="username"
                value={register.username}
                onChange={(e) =>
                  setRegister({
                    ...register,
                    username: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-xs font-semibold mb-2 "
                htmlFor="email"
              >
                EMAIL *
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 focus:border-black focus:outline-none  focus:ring-black focus:font-KumbhSans"
                type="email"
                id="email"
                name="email"
                value={register.email}
                onChange={(e) =>
                  setRegister({
                    ...register,
                    email: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-xs font-semibold mb-2"
                htmlFor="password"
              >
                PASSWORD *
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 focus:border-black focus:outline-none  focus:ring-black focus:font-KumbhSans"
                type="password"
                id="password"
                name="password"
                value={register.password}
                onChange={(e) =>
                  setRegister({
                    ...register,
                    password: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className="mb-4">
              <p className="text-xs">
                Data pribadi Anda akan digunakan untuk mendukung aktivitas Anda
                di web ini, untuk mengelola akses ke akun, dan untuk tujuan lain
                yang dijelaskan dalam{" "}
                <a href="" className="underline">
                  privacy policy
                </a>{" "}
                kami.
              </p>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-4 font-bold mb-4 text-white bg-black hover:bg-white hover:text-black outline"
            >
              Daftar Akun
            </button>
            <div className="mb-4 text-center">
              <p className="text-xs">
                You A Member ?{" "}
                <a href="/login" className="underline">
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
