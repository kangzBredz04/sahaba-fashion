/* eslint-disable react/prop-types */
import { BsBookmark } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { api } from "../utils";
export default function CardProduct({ id, name, image, tipe, price }) {
  const navigate = useNavigate();

  return (
    <div className="border border-gray-200 hover:cursor-pointer">
      <BsBookmark
        onClick={() => {
          api
            .post("/wishlist/add", {
              id_user: localStorage.getItem("id"),
              id_product: id,
            })
            .then((res) => alert(res));
        }}
        className="absolute text-2xl  ml-1 mt-2"
      />
      <div
        className="w-full"
        onClick={() => {
          navigate(`/product/${id}`);
          // console.log(name);
        }}
      >
        <img src={image} alt="" />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <p className="text-sm">{tipe}</p>
        <p className="text-sm font-semibold">{name}</p>
        <p className="text-sm font-light">Rp{price}</p>
      </div>
    </div>
  );
}
