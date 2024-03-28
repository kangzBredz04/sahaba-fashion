import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AllContext } from "../App";
import { GoPlus, GoShareAndroid } from "react-icons/go";
import { HiMinusSmall } from "react-icons/hi2";
import { GoBookmark } from "react-icons/go";

export default function DetailProduct() {
  const { id } = useParams();
  const { products } = useContext(AllContext);
  const product = products.find((p) => p.id == parseInt(id));
  //   console.log(product);
  return (
    <div className="grid grid-cols-3 font-KumbhSans">
      <div className="border border-gray-200 hover:cursor-pointe">
        <img src={product.image_1} alt="" />
      </div>
      <div className="border border-gray-200 hover:cursor-pointe">
        <img src={product.image_2} alt="" />
      </div>
      <div>
        <div className="my-10 mx-8 flex flex-col gap-5">
          <h1 className="text-2xl font-bold">{product.name_product}</h1>
          <h1 className="font-semibold">Rp{product.price}</h1>
          <p className="font-light">{product.description}</p>
        </div>
        <div className="my-10 mx-8 flex flex-col gap-5">
          <div className="flex justify-between">
            <h1 className="font-bold">SIZE</h1>
            <h1 className="text-xs">SIZE GUIDE</h1>
          </div>
          <div className="flex justify-between">
            <h1 className="border border-gray-400 py-1 px-3">S</h1>
            <h1 className="border border-gray-400 py-1 px-3">M</h1>
            <h1 className="border border-gray-400 py-1 px-3">L</h1>
            <h1 className="border border-gray-400 py-1 px-3">XL</h1>
            <h1 className="border border-gray-400 py-1 px-3">XXL</h1>
            <h1 className="border border-gray-400 py-1 px-3">XXXL</h1>
          </div>
        </div>
        <div className="my-10 mx-8 flex gap-5">
          <div className="flex items-center border border-gray-400 py-3 gap-5 px-2">
            <GoPlus />
            <div>1</div>
            <HiMinusSmall />
          </div>
          <div className=" w-full flex items-center bg-black">
            <h1 className="text-white m-auto">ADD TO CART</h1>
          </div>
        </div>
        <div className="my-10 mx-8 flex gap-10">
          <div className="flex gap-2">
            <GoBookmark />
            <p className="text-xs">ADD TO WISHLIST</p>
          </div>
          <div className="flex gap-2">
            <GoShareAndroid />
            <p className="text-xs">SHARE</p>
          </div>
        </div>
      </div>
    </div>
  );
}
