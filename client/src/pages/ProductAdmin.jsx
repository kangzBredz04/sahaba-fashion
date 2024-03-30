import { useContext } from "react";
import { AdminContext } from "./Admin";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineAddBox } from "react-icons/md";

export default function ProductAdmin() {
  const { products, setProducts } = useContext(AdminContext);
  const products2 = [
    {
      id: 1,
      name: "Product 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      name: "Product 2",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    // More data...
  ];

  // console.log(products);
  return (
    <div className="p-5 bg-gray-100">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold mb-4">Product List</h2>
        <div>
          <button className="flex justify-between gap-2 items-center bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">
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
              <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
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
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                  <HiOutlinePencilAlt />
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-2">
                  <FaRegTrashAlt />
                </button>
              </td>
            </tr>
          ))}
          {/* More data rows */}
        </tbody>
      </table>
    </div>
  );
}
