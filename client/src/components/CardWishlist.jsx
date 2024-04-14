/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { IoMdCloseCircleOutline } from "react-icons/io";
import { MdGridView } from "react-icons/md";
import { api } from "../utils";
import { Link, useNavigate } from "react-router-dom";

export default function CardWishlist({
  id,
  id_product,
  image_1,
  name_product,
  price,
  status,
}) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row items-center justify-between py-4  border-b-[1px] border-black">
      <div className="flex items-center gap-3">
        <IoMdCloseCircleOutline
          className="text-2xl cursor-pointer"
          onClick={() => {
            api
              .delete2("/wishlist/delete", {
                id_user: localStorage.getItem("id"),
                id_product: id_product,
              })
              .then(() => {
                window.location.reload();
              });
          }}
        />
        <img src={image_1} alt="" className="w-12" />
        <h1 className="text-base font-extrabold tracking-wider">
          {name_product}
        </h1>
      </div>
      <div>
        <h1 className="text-base font-extrabold tracking-wider">Rp{price}</h1>
      </div>
      <div>
        <h1 className="text-base font-extrabold tracking-wider">{status}</h1>
      </div>
      <Link
        to={`/product/${id_product}`}
        className="flex items-center gap-3 border cursor-pointer border-black py-2 px-2"
      >
        <MdGridView />
        <button className="text-base font-extrabold tracking-wider">
          VIEW PRODUCT
        </button>
      </Link>
    </div>
  );
}
