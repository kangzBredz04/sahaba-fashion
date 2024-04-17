import Loading from "../components/Loading";
import { api } from "../utils";
import { useNavigate, useOutletContext } from "react-router-dom";

export default function MyAccountAdmin() {
  const [user, setUser, idAdmin] = useOutletContext();

  const navigate = useNavigate();

  if (user) {
    return (
      <div className="py-6 px-7 font-KumbhSans bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">My Account</h2>
        {/* Form untuk mengubah data user */}
        <form>
          <div className="flex gap-5">
            {/* Nama Depan */}
            <div className="grow mb-4">
              <label
                htmlFor="firstName"
                className="block text-black font-bold mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={user?.first_name}
                disabled
                className="w-full border border-gray-400 px-2 py-2 focus:outline-none focus:border-gray-600"
              />
            </div>
            {/* Nama Belakang */}
            <div className="grow mb-4">
              <label
                htmlFor="lastName"
                className="block text-black font-bold mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={user?.last_name}
                disabled
                className="w-full border border-gray-400 px-2 py-2 focus:outline-none focus:border-gray-600"
              />
            </div>
          </div>
          {/* Username */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-black font-bold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={user?.username}
              disabled
              className="w-full border border-gray-400 px-2 py-2 focus:outline-none focus:border-gray-600"
            />
          </div>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-black font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={user?.email}
              disabled
              className="w-full border border-gray-400 px-2 py-2 focus:outline-none focus:border-gray-600"
            />
          </div>
        </form>

        <div className="w-full flex mt-5 justify-end gap-3">
          {idAdmin != 1 && (
            <button
              className="w-1/3 bg-black text-white py-3 hover:bg-white hover:text-black outline"
              onClick={() => {
                if (confirm("Apakah yakin anda akan menghapus akun anda ?")) {
                  api.delete(`/auth/delete/${idAdmin}`).then((res) => {
                    alert(res.msg);
                    window.location.reload();
                    setUser();
                    localStorage.removeItem("token");
                    localStorage.removeItem("role");
                    localStorage.removeItem("id");
                    navigate("/login");
                  });
                }
              }}
            >
              Delete Account
            </button>
          )}
          <button
            onClick={() => {
              if (confirm("Apakah yakin anda akan logout")) {
                api.get("/auth/logout").then((res) => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("role");
                  localStorage.removeItem("id");
                  alert(res.msg);
                  window.location.href = "/login";
                });
              }
            }}
            className="w-1/3 bg-black text-white py-3 hover:bg-white hover:text-black outline"
          >
            Logout
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Loading />;
        {setTimeout(() => {
          navigate("/login");
        }, 1000)}
      </div>
    );
  }
}
