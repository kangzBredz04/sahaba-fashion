import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { api } from "../utils";

export default function MyAccount() {
  const [user, setUser] = useState();
  const [editedUser, setEditedUser] = useState({});

  useEffect(() => {
    api.get("/auth/my-account").then((response) => {
      setUser(response.data);
      setEditedUser({
        first_name: response.data?.first_name,
        last_name: response.data?.last_name,
        username: response.data?.username,
        email: response.data?.email,
      });
    });
  }, []);

  console.log(editedUser);

  if (user?.id) {
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
                value={editedUser.first_name}
                onChange={(e) =>
                  setEditedUser({
                    ...editedUser,
                    first_name: e.target.value,
                  })
                }
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
                value={editedUser.last_name}
                onChange={(e) =>
                  setEditedUser({
                    ...editedUser,
                    last_name: e.target.value,
                  })
                }
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
              value={editedUser.username}
              onChange={(e) =>
                setEditedUser({
                  ...editedUser,
                  username: e.target.value,
                })
              }
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
              value={editedUser.email}
              onChange={(e) =>
                setEditedUser({
                  ...editedUser,
                  email: e.target.value,
                })
              }
              className="w-full border border-gray-400 px-2 py-2 focus:outline-none focus:border-gray-600"
            />
          </div>

          {/* Tombol Save */}
          <div className="flex justify-end">
            <button
              type="submit"
              className=" w-fit text-white py-2 px-4 rounded-sm flex items-center bg-black hover:bg-gray-700"
            >
              Save Changes
            </button>
          </div>
        </form>

        {/* <div className="mt-8">
          <h3 className="text-lg font-bold mb-4">My Orders</h3>
        </div> */}
      </div>
    );
  } else {
    return <Loading />;
    // window.location.reload();
  }
}
