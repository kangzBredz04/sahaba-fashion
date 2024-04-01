import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { api } from "../utils";

export default function MyAccount() {
  // const navigate = useNavigate();

  // const { user } = useContext(AllContext);

  const [user, setUser] = useState();

  useEffect(() => {
    api.get("/auth/my-account").then((response) => setUser(response.data));
  }, []);

  if (user?.id) {
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">My Account</h2>
        {/* Form untuk mengubah data user */}
        <form>
          {/* Nama Depan */}
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-gray-700 font-bold mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={user?.first_name}
              // onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          {/* Nama Belakang */}
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-gray-700 font-bold mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={user?.last_name}
              // onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          {/* Username */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-bold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={user?.username}
              // onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={user?.email}
              // onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Tombol Save */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
            >
              Save Changes
            </button>
          </div>
        </form>

        <div className="mt-8">
          <h3 className="text-lg font-bold mb-4">My Orders</h3>
          {/* Daftar pesanan bisa ditampilkan di sini */}
        </div>
      </div>
    );
  } else {
    return <Loading />;
    // window.location.reload();
  }
}
