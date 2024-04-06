/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { IoMdCloseCircleOutline } from "react-icons/io";
import { MdGridView } from "react-icons/md";

export default function CardWishlist({
  id,
  id_product,
  image_1,
  name_product,
  price,
  status,
}) {
  return (
    <div className="flex flex-row items-center justify-between py-4  border-b-[1px] border-black">
      <div className="flex items-center gap-3">
        <IoMdCloseCircleOutline className="text-xl" />
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
      <div className="flex items-center gap-3 border cursor-pointer border-black py-2 px-2">
        <MdGridView />
        <button className="text-base font-extrabold tracking-wider">
          VIEW PRODUCT
        </button>
      </div>
    </div>
  );
}
