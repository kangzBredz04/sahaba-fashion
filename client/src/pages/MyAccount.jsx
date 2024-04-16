/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import Loading from "../components/Loading";
import { api } from "../utils";
import { useNavigate, useOutletContext } from "react-router-dom";
import { AllContext } from "../App";

export default function MyAccount() {
  const [user, setUser] = useOutletContext();
  const { orders, setOrders } = useContext(AllContext);
  const [editedUser, setEditedUser] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    setEditedUser({
      first_name: user.first_name,
      last_name: user.last_name,
      username: user.username,
      email: user.email,
    });
  }, [user]);

  function filterOrders(status) {
    return orders?.filter((order) => order.status === status);
  }

  if (localStorage.getItem("id")) {
    return (
      <div className="py-6 px-7 font-KumbhSans bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">My Account</h2>
        {/* Form untuk mengubah data user */}
        <form
          onSubmit={() => {
            api
              .put(`/auth/update/${user.id}`, editedUser)
              .then((res) => console.log(res));
          }}
        >
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

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">My Orders</h2>
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="font-semibold text-orange-400 mb-3">Processed</h1>
              <table className="w-full">
                <div className="flex flex-col gap-3">
                  {filterOrders("Processed").length != 0 ? (
                    filterOrders("Processed")?.map((o) => (
                      <tr
                        key={o.id}
                        className="border border-gray-300 py-2 px-4 flex justify-between items-center"
                      >
                        <td className="text-center">
                          <img src={o.image_1} alt="" className="w-10" />
                        </td>
                        <td className="text-center">{o.name_product}</td>
                        <td className="text-center">
                          Rp{parseInt(o.price).toLocaleString("id-ID")}
                        </td>
                        <td className="text-center">{o.name_size}</td>
                        <td className="text-center">{o.quantity}</td>
                        <td className="text-center">{o.status}</td>
                      </tr>
                    ))
                  ) : (
                    <div className="py-1 mb-4">
                      <h1 className="text-center font-bold text-xl">
                        Tidak ada pesanan yang sedang dalam proses
                      </h1>
                    </div>
                  )}
                </div>
              </table>
            </div>
            <div>
              <h1 className="font-semibold text-green-400 mb-3">Shipped</h1>
              <table className="w-full">
                <div className="flex flex-col gap-3">
                  {filterOrders("Shipped").length != 0 ? (
                    filterOrders("Shipped")?.map((o) => (
                      <tr
                        key={o.id}
                        className="border border-gray-300 py-2 px-4 flex justify-between items-center"
                      >
                        <td className="text-center">
                          <img src={o.image_1} alt="" className="w-10" />
                        </td>
                        <td className="text-center">{o.name_product}</td>
                        <td className="text-center">
                          Rp{parseInt(o.price).toLocaleString("id-ID")}
                        </td>
                        <td className="text-center">{o.name_size}</td>
                        <td className="text-center">{o.quantity}</td>
                        <td className="text-center">{o.status}</td>
                      </tr>
                    ))
                  ) : (
                    <div className="py-1 mb-4">
                      <h1 className="text-center font-bold text-xl">
                        Tidak ada pesanan yang sedang dalam pengiriman
                      </h1>
                    </div>
                  )}
                </div>
              </table>
            </div>
            <div>
              <h1 className="font-semibold text-blue-400 mb-3">Finished</h1>
              <table className="w-full">
                <div className="flex flex-col gap-3">
                  {filterOrders("Finsihed").length != 0 ? (
                    filterOrders("Finished")?.map((o) => (
                      <tr
                        key={o.id}
                        className="border border-gray-300 py-2 px-4 flex items-center"
                      >
                        <td className="text-center">
                          <img src={o.image_1} alt="" className="w-10" />
                        </td>
                        <td className="text-center">{o.name_product}</td>
                        <td className="text-center">
                          Rp{parseInt(o.price).toLocaleString("id-ID")}
                        </td>
                        <td className="text-center">{o.name_size}</td>
                        <td className="text-center">{o.quantity}</td>
                        <td className="text-center">{o.status}</td>
                      </tr>
                    ))
                  ) : (
                    <div className="py-1 mb-4">
                      <h1 className="text-center font-bold text-xl">
                        Tidak ada pesanan yang sudah selesai
                      </h1>
                    </div>
                  )}
                </div>
              </table>
            </div>
          </div>
        </div>
        <div className="w-full flex mt-5 justify-end gap-3">
          <button className="w-1/3 bg-black text-white py-3">
            Delete Account
          </button>
          <button
            onClick={() => {
              if (confirm("Apakah yakin anda akan logout")) {
                api.get("/auth/logout").then((res) => {
                  alert(res.msg);
                  window.location.reload();
                  setUser({});
                  localStorage.removeItem("token");
                  localStorage.removeItem("role");
                  localStorage.removeItem("id");
                  navigate("/login");
                });
              }
            }}
            className="w-1/3 bg-black text-white py-3"
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
        }, 500)}
      </div>
    );
  }
}
