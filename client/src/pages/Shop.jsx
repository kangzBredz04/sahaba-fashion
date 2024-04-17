/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { AllContext } from "../App";
import CardProduct from "../components/CardProduct";
import { FiSearch } from "react-icons/fi";
import { TbSortDescending2, TbSortAscending2 } from "react-icons/tb";

export default function Shop() {
  const { products, wishlist } = useContext(AllContext);
  const [keyword, setKeyword] = useState("");
  const [sortPrice, setSortPrice] = useState("asc");
  const [sortBy, setSortBy] = useState("price");
  const [category, setCategory] = useState("Semua");

  const filteredSortedProducts = products
    .sort((a, b) => {
      if (sortPrice === "asc") {
        return a[sortBy] < b[sortBy] ? -1 : 1;
      } else {
        return a[sortBy] > b[sortBy] ? -1 : 1;
      }
    })
    .filter(
      (product) =>
        product.name_product.toLowerCase().includes(keyword) &&
        (category === "Semua" || product.category === category)
    );
  return (
    <div className="flex flex-col">
      <div className="mx-5 my-5 flex justify-evenly flex-row gap-8 py-4 px-3 border border-gray-400  rounded-lg">
        <div className="flex items-center">
          <h1 className="text-xl tracking-wider font-bold">FILTER PRODUK</h1>
        </div>
        <div className="flex items-center border px-2 border-gray-300 rounded-md">
          <input
            type="text"
            placeholder="Cari nama produk"
            className="py-2 px-2 outline-none placeholder:text-black"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <FiSearch className="text-gray-400" />
        </div>
        <div>
          <select
            name="category"
            id=""
            className="flex items-center border border-gray-300 rounded-md py-3 px-2 outline-none"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled selected hidden>
              Urut berdasarkan kategori...
            </option>
            <option value="Semua">Semua</option>
            <option value="Koko Modern">Koko Modern</option>
            <option value="Kurta Modern">Kurta Modern</option>
            <option value="Essential Pants">Essential Pants</option>
            <option value="Essential Shirt">Essential Shirt</option>
            <option value="T-Shirt">T-Shirt</option>
          </select>
        </div>
        <div
          className="flex flex-row gap-4 items-center border border-gray-300 rounded-md py-3 px-2 outline-none cursor-pointer"
          onClick={() => {
            sortPrice === "asc" ? setSortPrice("desc") : setSortPrice("asc");
          }}
        >
          <label htmlFor="">Urutkan harga</label>
          {sortPrice === "asc" ? (
            <TbSortAscending2 className="text-2xl" />
          ) : (
            <TbSortDescending2 className="text-2xl" />
          )}
        </div>
      </div>

      {filteredSortedProducts.length > 0 ? (
        <div className="grid grid-cols-4">
          {filteredSortedProducts?.map((p) => (
            <CardProduct
              key={p.id}
              id={p.id}
              name={p.name_product}
              image={p.image_1}
              price={p.price}
              tipe={p.category}
              status={
                wishlist.find((item) => item.id_product === p.id) ? true : false
              }
            />
          ))}
        </div>
      ) : (
        <div className="w-full py-5 px-5 mb-3">
          <h1 className="text-2xl text-center font-bold tracking-wider">
            Tidak ada produk ditemukan
          </h1>
        </div>
      )}
    </div>
  );
}
