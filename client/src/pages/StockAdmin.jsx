import { useContext } from "react";
import { AdminContext } from "./Admin";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineAddBox } from "react-icons/md";
import { api } from "../utils";
// import { useNavigate } from "react-router-dom";

export default function StockAdmin() {
  const {
    popUp,
    setPopUp,
    stocks,
    // setStocks,
    editedStock,
    setEditedStock,
    products,
    sizes,
  } = useContext(AdminContext);

  const getProductNameById = (id) => {
    const product = products.find((p) => p.id === id);
    return product.name_product;
  };

  const getSizeNameById = (id) => {
    const size = sizes.find((s) => s.id === id);
    return size.name_size;
  };

  return (
    <div className="p-5 bg-gray-100 min-h-64">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold mb-4">Stock Product</h2>
        <div>
          <button
            onClick={() => {
              setEditedStock({});
              setPopUp(!popUp);
            }}
            className="flex justify-between gap-2 items-center bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
          >
            <MdOutlineAddBox /> Add Stock
          </button>
        </div>
      </div>
      {/* Table for CRUD Data */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300">No</th>
            <th className="border border-gray-300 ">Product</th>
            <th className="border border-gray-300 ">Size</th>
            <th className="border border-gray-300 ">Quantity</th>
            <th className="border border-gray-300 ">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Data rows */}
          {stocks?.map((s, index) => (
            <tr key={s.id}>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {index + 1}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {getProductNameById(s.id_product)}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {getSizeNameById(s.id_size)}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {s.quantity}
              </td>
              <td className="border border-gray-300 px-4 py-2 flex justify-evenly">
                <button
                  onClick={() => {
                    setEditedStock(s);
                    // console.log(editedStock);
                    setPopUp(!popUp);
                  }}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                >
                  <HiOutlinePencilAlt />
                </button>
                <button
                  onClick={() => {
                    if (
                      confirm(
                        `Apakah anda yakin ingin menghapus stock produk ${s.name_product} dengan ukuran ${s.name_size}`
                      )
                    ) {
                      api
                        .delete(`/auth/delete/${s.id}`)
                        .then(async (res) => {
                          alert(res.message);
                        })
                        .catch((e) => {
                          console.log(e);
                        });
                      window.location.href = "/admin/user";
                    }
                  }}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-2"
                >
                  <FaRegTrashAlt />
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
              {editedStock.id ? "EDIT" : "ADD NEW"} STOCK
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (editedStock.id) {
                  // api
                  //   .put(`/stock/update/${editedStock.id}`, editedStock)
                  //   .then(async (res) => {
                  //     alert(res.message);
                  //     window.location.href = "/admin/stock";
                  //   })
                  //   .catch((e) => {
                  //     console.log(e);
                  //   });
                  console.log(editedStock);
                } else {
                  // api
                  //   .post("/stock/add", editedStock)
                  //   .then(async (res) => {
                  //     alert(res.message);
                  //     window.location.href = "/admin/stock";
                  //   })
                  //   .catch((e) => {
                  //     console.log(e);
                  //   });
                  console.log(editedStock);
                }
                setPopUp(!popUp);
              }}
            >
              <div className="mb-4">
                <label
                  htmlFor="product"
                  className="block text-black font-bold mb-2"
                >
                  Product
                </label>
                <select
                  id="product"
                  className="w-full border border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-500"
                  // value={editedStock.id_product}
                  onChange={(e) =>
                    setEditedStock({
                      ...editedStock,
                      id_product: e.target.value,
                    })
                  }
                >
                  {products.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name_product}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="size"
                  className="block text-black font-bold mb-2"
                >
                  Size
                </label>
                <select
                  id="size"
                  className="w-full border border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-500"
                  // value={editedStock.name_size}
                  onChange={(e) =>
                    setEditedStock({
                      ...editedStock,
                      id_size: e.target.value,
                    })
                  }
                >
                  {sizes.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name_size}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="quantity"
                  className="block text-black font-bold mb-2"
                >
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  className="w-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-gray-500"
                  value={editedStock.quantity}
                  onChange={(e) =>
                    setEditedStock({
                      ...editedStock,
                      quantity: e.target.value,
                    })
                  }
                />
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
