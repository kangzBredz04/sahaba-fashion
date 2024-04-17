import { useContext } from "react";
import { AdminContext } from "./Admin";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineAddBox } from "react-icons/md";
import { api } from "../utils";
// import { useNavigate } from "react-router-dom";

export default function ProductAdmin() {
  const {
    products,
    popUp,
    setPopUp,
    popUp2,
    setPopUp2,
    editedProduct,
    setEditedProduct,
    sizes,
    // setSizes,
    editedSize,
    setEditedSize,
  } = useContext(AdminContext);

  return (
    <div className="flex flex-col gap-5 p-5 bg-gray-100">
      {/* CRUD PRODUCTS */}
      <div>
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold mb-4">Product List</h2>
          <div>
            <button
              onClick={() => {
                setEditedProduct({});
                setPopUp(!popUp);
              }}
              className="flex justify-between gap-2 items-center bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
            >
              <MdOutlineAddBox /> Add Product
            </button>
          </div>
        </div>
        {/* Table for CRUD Data */}
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300">No</th>
              <th className="border border-gray-300 ">Name</th>
              <th className="border border-gray-300 ">Category</th>
              <th className="border border-gray-300 ">Price</th>
              <th className="border border-gray-300 ">Description</th>
              <th className="border border-gray-300 ">Image 1</th>
              <th className="border border-gray-300 ">Image 2</th>
              <th className="border border-gray-300 ">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Data rows */}
            {products?.map((product, index) => (
              <tr key={product.id}>
                <td className="border border-gray-300 px-4 py-2">
                  {index + 1}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {product.name_product}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {product.category}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {product.price}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {product.description.slice(0, 25)}
                  {product.description.length > 25 && "..."}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {product.image_1.slice(0, 15)}
                  {product.image_1.length > 15 && "..."}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {product.image_2.slice(0, 15)}
                  {product.image_2.length > 15 && "..."}
                </td>
                <td className="border border-gray-300 px-4 py-2 flex justify-evenly">
                  <button
                    onClick={() => {
                      setEditedProduct(product);
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
                          `Apakah anda yakin ingin menghapus produk ${product.name_product}`
                        )
                      ) {
                        api
                          .delete(`/product/delete/${product.id}`)
                          .then(async (res) => {
                            alert(res.message);
                          })
                          .catch((e) => {
                            console.log(e);
                          });
                        window.location.href = "/admin/product";
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
                {editedProduct.id ? "EDIT" : "ADD NEW"} PRODUCT
              </h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (editedProduct.id) {
                    api
                      .put(`/product/update/${editedProduct.id}`, editedProduct)
                      .then(async (res) => {
                        alert(res.message);
                        window.location.href = "/admin/product";
                      })
                      .catch((e) => {
                        console.log(e);
                      });
                  } else {
                    api
                      .post("/product/add/", editedProduct)
                      .then(async (res) => {
                        alert(res.message);
                        window.location.href = "/admin/product";
                      })
                      .catch((e) => {
                        console.log(e);
                      });
                  }
                  setPopUp(!popUp);
                }}
              >
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-black font-bold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-gray-500"
                    value={editedProduct.name_product}
                    onChange={(e) =>
                      setEditedProduct({
                        ...editedProduct,
                        name_product: e.target.value,
                      })
                    }
                    autoFocus
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="price"
                    className="block text-black font-bold mb-2"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    id="price"
                    className="w-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-gray-500"
                    value={editedProduct.price}
                    onChange={(e) =>
                      setEditedProduct({
                        ...editedProduct,
                        price: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block text-black font-bold mb-2"
                  >
                    Description
                  </label>
                  <input
                    type="text"
                    id="description"
                    className="w-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-gray-500"
                    value={editedProduct.description}
                    onChange={(e) =>
                      setEditedProduct({
                        ...editedProduct,
                        description: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="category"
                    className="block text-black font-bold mb-2"
                  >
                    Category
                  </label>
                  <select
                    id="category"
                    className="w-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-gray-500"
                    value={editedProduct.category}
                    onChange={(e) =>
                      setEditedProduct({
                        ...editedProduct,
                        category: e.target.value,
                      })
                    }
                  >
                    <option>Koko Modern</option>
                    <option>Kurta Modern</option>
                    <option>Essential Shirt</option>
                    <option>Pants</option>
                    <option>Kolaborasi</option>
                  </select>
                </div>
                <div className="mb-4 flex justify-between gap-3">
                  <div>
                    <label
                      htmlFor="image1"
                      className="block text-black font-bold mb-2"
                    >
                      Image 1
                    </label>
                    <input
                      type="text"
                      id="image1"
                      className="w-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-gray-500"
                      value={editedProduct.image_1}
                      onChange={(e) =>
                        setEditedProduct({
                          ...editedProduct,
                          image_1: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="image2"
                      className="block text-black font-bold mb-2"
                    >
                      Image 2
                    </label>
                    <input
                      type="text"
                      id="image2"
                      className="w-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-gray-500"
                      value={editedProduct.image_2}
                      onChange={(e) =>
                        setEditedProduct({
                          ...editedProduct,
                          image_2: e.target.value,
                        })
                      }
                    />
                  </div>
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
      {/* CRUD SIZES */}
      <div className="border-t-2 py-4 border-black">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold mb-4">Sizes Product</h2>
          <div>
            <button
              onClick={() => {
                setEditedSize({});
                setPopUp2(!popUp2);
              }}
              className="flex justify-between gap-2 items-center bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
            >
              <MdOutlineAddBox /> Add Size
            </button>
          </div>
        </div>
        {/* Table for CRUD Data */}
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300">No</th>
              <th className="border border-gray-300">Name Size</th>
              <th className="border border-gray-300">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Data rows */}
            {sizes?.map((s, index) => (
              <tr key={s.id}>
                <td className="border border-gray-300 px-4 py-2 text-center ">
                  {index + 1}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center ">
                  {s.name_size}
                </td>
                <td className="border border-gray-300 px-4 py-2 flex justify-evenly">
                  <button
                    onClick={() => {
                      setEditedSize(s);
                      setPopUp2(!popUp2);
                    }}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                  >
                    <HiOutlinePencilAlt />
                  </button>
                  <button
                    onClick={() => {
                      if (
                        confirm(
                          `Apakah anda yakin ingin menghapus ukuran produk ${s.name_size}`
                        )
                      ) {
                        api
                          .delete(`/size/delete/${s.id}`)
                          .then(async (res) => {
                            alert(res.message);
                          })
                          .catch((e) => {
                            console.log(e);
                          });
                        window.location.href = "/admin/product";
                      }
                    }}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-2"
                  >
                    <FaRegTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {popUp2 && (
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="bg-white py-4 px-4 w-96 rounded-2xl shadow-lg z-50">
              <h2 className="text-xl font-bold mb-4 text-center tracking-wider">
                {editedSize.id ? "EDIT" : "ADD NEW"} SIZE
              </h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (editedSize.id) {
                    api
                      .put(`/size/update/${editedSize.id}`, editedSize)
                      .then(async (res) => {
                        alert(res.message);
                        window.location.href = "/admin/product";
                      })
                      .catch((e) => {
                        console.log(e);
                      });
                  } else {
                    api
                      .post("/size/add", editedSize)
                      .then(async (res) => {
                        alert(res.message);
                        window.location.href = "/admin/product";
                      })
                      .catch((e) => {
                        console.log(e);
                      });
                  }
                  setPopUp2(!popUp2);
                }}
              >
                <div className="mb-4 ">
                  <label
                    htmlFor="name_size"
                    className="block text-black font-bold mb-2"
                  >
                    Name Size
                  </label>
                  <input
                    type="text"
                    id="name_size"
                    className="w-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-gray-500"
                    value={editedSize.name_size}
                    onChange={(e) =>
                      setEditedSize({
                        ...editedSize,
                        name_size: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => setPopUp2(!popUp2)}
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
    </div>
  );
}
