import { useContext } from "react";
import { api } from "../utils";
import { AllContext } from "../App";

export default function Register() {
  const { register, setRegister } = useContext(AllContext);
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-screen">
        <div className="w-full md:w-1/3 lg:w-1/2 p-6">
          <h1 className="text-xl font-bold mb-6 font-KumbhSans text-center">
            REGISTER
          </h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              api
                .post("/auth/register", register)
                .then(async (res) => {
                  alert(res.msg);
                  window.location.href = "/";
                })
                .catch((e) => {
                  console.log(e);
                });
            }}
          >
            <div className="mb-4">
              <label
                className="block text-xs font-semibold mb-2 font-KumbhSans"
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
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-xs font-semibold mb-2 font-KumbhSans"
                htmlFor="email"
              >
                EMAIL ADDRESS *
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
                value={register.password}
                onChange={(e) =>
                  setRegister({
                    ...register,
                    password: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-4">
              <p className="font-KumbhSans text-xs">
                Data pribadi Anda akan digunakan untuk mendukung aktivitas Anda
                di web ini, untuk mengelola akses ke akun, dan untuk tujuan lain
                yang dijelaskan dalam{" "}
                <a href="" className="underline">
                  privacy policy
                </a>
                kami.
              </p>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-4 font-bold mb-4 text-white bg-black"
            >
              Register
            </button>
            <div className="mb-4 text-center">
              <p className="font-KumbhSans text-xs">
                You A Member?
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
