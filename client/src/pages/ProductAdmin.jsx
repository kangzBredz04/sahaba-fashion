import { useContext } from "react";
import { AdminContext } from "./Admin";

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
    <div className="p-4 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
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
          {products.map((product) => (
            <tr key={product.id}>
              <td className="border border-gray-300 px-4 py-2">{product.id}</td>
              <td className="border border-gray-300 px-4 py-2">
                {product.name}
              </td>
              <td className="border border-gray-300 px-4 py-2">Koko Modern</td>
              <td className="border border-gray-300 px-4 py-2">Rp. 300.000</td>
              <td className="border border-gray-300 px-4 py-2">
                {/* {product.description.slice(0, 20)}
                {product.description.length > 20 && "..."} */}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {/* {product.image_1.slice(0, 10)}
                {product.image_1.length > 10 && "..."} */}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {/* {product.image_2.slice(0, 10)}
                {product.image_2.length > 10 && "..."} */}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                  Edit
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-2">
                  Delete
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
