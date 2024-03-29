export default function ProductAdmin() {
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
          <tr>
            <td className="border border-gray-300 px-4 py-2">1</td>
            <td className="border border-gray-300 px-4 py-2">Eljaz</td>
            <td className="border border-gray-300 px-4 py-2">Koko Modern</td>
            <td className="border border-gray-300 px-4 py-2">Rp. 300.000</td>
            <td className="border border-gray-300 px-4 py-2">
              Koko Modern Elegan warna putih dengan kombinasi motif geometric
              Dobby Texture exclusive, yang menyerupai bentuk berlian dan motif
              bunga yang disederhanakan. Motif tersebut memiliki kontras warna
              sangat halus dan terkesan menyatu dengan kain. Hal ini memberikan
              kesan elegan, minimalis, dan berkelas.
            </td>
            <td className="border border-gray-300 px-4 py-2">
              https://fadkhera.com/wp-content/uploads/2024/02/Koko-Modern-Eljaz.webp
            </td>
            <td className="border border-gray-300 px-4 py-2">
              https://fadkhera.com/wp-content/uploads/2024/02/Koko-Modern-Eljaz-2.webp
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
          {/* More data rows */}
        </tbody>
      </table>
    </div>
  );
}
