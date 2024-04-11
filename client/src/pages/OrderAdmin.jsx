import { useContext } from "react";
import { AdminContext } from "./Admin";
import { FiPrinter } from "react-icons/fi";
import { api } from "../utils.js";
// import { useNavigate } from "react-router-dom";

export default function OrderAdmin() {
  const {
    popUp,
    setPopUp,
    editedStatus,
    setEditedStatus,
    // products,
    // sizes,
    orders,
    // setOrders,
  } = useContext(AdminContext);

  console.log(orders);

  const getColorStatus = (status) => {
    let color;
    switch (status) {
      case "Processed":
        color = "bg-orange-400";
        break;
      case "Shipped":
        color = "bg-blue-400";
        break;
      case "Finished":
        color = "bg-green-400";
        break;
      default:
        color = "bg-red-400";
        break;
    }
    return color;
  };

  return (
    <div className="p-5 bg-gray-100 min-h-64">
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-bold ">Order List</h2>
        <div className="flex gap-2 w-fit">
          <div className="flex items-center gap-2">
            <label htmlFor="status">Category : </label>
            <select
              id="status"
              className=" border rounded border-gray-300 py-1  focus:outline-none focus:border-gray-500"
              // value={editedUser.role == null ? "" : editedUser.role}
              // onChange={(e) =>
              //   setEditedUser({
              //     ...editedUser,
              //     role: e.target.value,
              //   })
              // }
            >
              <option>All</option>
              <option>Processed</option>
              <option>Shipped</option>
              <option>Finished</option>
            </select>
          </div>
          <button
            onClick={() => {
              setEditedStatus({});
              setPopUp(!popUp);
            }}
            className="flex justify-between gap-2 items-center bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
          >
            <FiPrinter /> Print Order List
          </button>
        </div>
      </div>
      {/* Table for CRUD Data */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300">No</th>
            <th className="border border-gray-300">Username</th>
            <th className="border border-gray-300">Product</th>
            <th className="border border-gray-300">Size</th>
            <th className="border border-gray-300">Address</th>
            <th className="border border-gray-300">Quantity</th>
            <th className="border border-gray-300">Status</th>
          </tr>
        </thead>
        <tbody>
          {/* Data rows */}
          {orders?.map((o, index) => (
            <tr key={o.id}>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {index + 1}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {o.username}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {o.name_product}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {o.name_size}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {o.address}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {o.quantity}
              </td>
              <td
                className={`border border-gray-300 px-1 py-2 text-center font-semibold`}
              >
                <button
                  className={`${getColorStatus(o.status)} rounded py-1 w-28`}
                  onClick={() => {
                    setEditedStatus({
                      id: o.id,
                      status: o.status,
                    });
                    setPopUp(!popUp);
                  }}
                >
                  {o.status}
                </button>
              </td>
            </tr>
          ))}
          {/* More data rows */}
        </tbody>
      </table>
      {popUp && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-white py-4 px-4 w-96 rounded-2xl shadow-lg z-50">
            <h2 className="text-xl font-bold mb-4 text-center tracking-wider">
              EDIT STATUS ORDER
            </h2>
            <form
              onSubmit={() => {
                api
                  .put(`/order/update-status`, editedStatus)
                  .then(async (res) => {
                    setPopUp(!popUp);
                    alert(res.msg);
                    window.location.href = "/admin/order";
                  })
                  .catch((e) => {
                    console.log(e);
                  });
                // console.log(editedStatus);
                // setPopUp(!popUp);
              }}
            >
              <div className="flex-grow mb-4">
                <label
                  htmlFor="status"
                  className="block text-black font-bold mb-2"
                >
                  Status Order
                </label>
                <select
                  id="status"
                  className="w-full border rounded border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-500"
                  value={editedStatus.status}
                  onChange={(e) =>
                    setEditedStatus({
                      ...editedStatus,
                      status: e.target.value,
                    })
                  }
                >
                  <option>Processed</option>
                  <option>Shipped</option>
                  <option>Finished</option>
                </select>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setPopUp(!popUp)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold px-4 py-2 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
