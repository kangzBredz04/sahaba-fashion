/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import Loading from "../components/Loading";
import { api } from "../utils";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { AllContext } from "../App";

export default function MyAccount() {
  const [user, setUser] = useOutletContext();
  const { orders, setOrders } = useContext(AllContext);
  const [editedUser, setEditedUser] = useState({});
  const [allUser, setAllUser] = useState([]);

  const navigate = useNavigate();

  function filterOrders(status) {
    return orders?.filter((order) => order.status === status);
  }

  if (localStorage.getItem("id")) {
    return (
      <div className="py-6 px-7 font-KumbhSans bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">My Account</h2>
        {/* Form untuk mengubah data user */}
        <div>
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
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">My Orders</h2>
          {orders?.length > 0 ? (
            <div className="flex flex-col gap-4">
              {filterOrders("Processed").length != 0 && (
                <h1 className="font-semibold text-orange-400 mb-3">
                  Processed
                </h1>
              )}
              <table className="w-full">
                <div className="flex flex-col gap-3">
                  {filterOrders("Processed").length != 0 &&
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
                          Rp
                          {(
                            parseInt(o.price) * parseInt(o.total_product)
                          ).toLocaleString("id-ID")}
                        </td>
                        <td className="text-center">{o.name_size}</td>
                        <td className="text-center">{o.total_product}</td>
                        <td className="text-center">{o.status}</td>
                      </tr>
                    ))}
                </div>
              </table>

              <div>
                {filterOrders("Shipped").length != 0 && (
                  <h1 className="font-semibold text-green-400 mb-3">Shipped</h1>
                )}
                <table className="w-full">
                  <div className="flex flex-col gap-3">
                    {filterOrders("Shipped").length != 0 &&
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
                            Rp
                            {(
                              parseInt(o.price) * parseInt(o.total_product)
                            ).toLocaleString("id-ID")}
                          </td>
                          <td className="text-center">{o.name_size}</td>
                          <td className="text-center">{o.total_product}</td>
                          <td className="text-center">{o.status}</td>
                        </tr>
                      ))}
                  </div>
                </table>
              </div>
              <div>
                {filterOrders("Finished").length != 0 && (
                  <h1 className="font-semibold text-blue-400 mb-3">Finished</h1>
                )}
                <table className="w-full">
                  <div className="flex flex-col gap-3">
                    {filterOrders("Finished").length != 0 &&
                      filterOrders("Finished")?.map((o) => (
                        <tr
                          key={o.id}
                          className="border border-gray-300 py-2 px-4 flex justify-between items-center"
                        >
                          <td className="text-center">
                            <img src={o.image_1} alt="" className="w-10" />
                          </td>
                          <td className="text-center">{o.name_product}</td>
                          <td className="text-center">
                            {" "}
                            Rp
                            {(
                              parseInt(o.price) * parseInt(o.total_product)
                            ).toLocaleString("id-ID")}
                          </td>
                          <td className="text-center">{o.name_size}</td>
                          <td className="text-center">{o.total_product}</td>
                          <td className="text-center">{o.status}</td>
                        </tr>
                      ))}
                  </div>
                </table>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center py-5 gap-5">
              <h1 className="text-center font-bold text-xl">
                Tidak ada pesanan yang sedang dalam proses, dikirim atau sudah
                selesai.
              </h1>
              <Link
                to="/shop"
                className="bg-black w-1/4 text-center text-white hover:bg-white hover:text-black py-3 px-7 outline"
              >
                RETURN TO SHOP
              </Link>
            </div>
          )}
        </div>
        <div className="w-full flex mt-5 justify-end gap-3">
          <button
            onClick={() => {
              if (confirm(`Apakah anda yakin ingin menghapus akun ini ?`)) {
                api
                  .delete(`/auth/delete/${localStorage.getItem("id")}`)
                  .then(async (res) => {
                    alert(res.msg);
                  })
                  .catch((e) => {
                    console.log(e);
                  });
                window.location.href = "/login";
              }
            }}
            className="w-1/3 bg-black text-white py-3 hover:bg-white hover:text-black outline"
          >
            Hapus Akun
          </button>
          <button
            onClick={() => {
              if (confirm("Apakah yakin anda akan logout ?")) {
                api.get("/auth/logout").then((res) => {
                  alert(res.msg);
                  setUser({});
                  localStorage.removeItem("token");
                  localStorage.removeItem("role");
                  localStorage.removeItem("id");
                  window.location.reload();
                  navigate("/login");
                });
              }
            }}
            className="w-1/3 bg-black text-white py-3 hover:bg-white hover:text-black outline"
          >
            Keluar
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
