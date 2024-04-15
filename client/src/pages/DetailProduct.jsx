import { useContext } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { AllContext } from "../App";
import { GoShareAndroid } from "react-icons/go";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import { api } from "../utils";
// import { api } from "../utils";

export default function DetailProduct() {
  const { id } = useParams();
  const { products, wishlist } = useContext(AllContext);
  const [user] = useOutletContext();
  const product = products.find((p) => p.id == parseInt(id));

  // console.log(wishlist);

  const result = wishlist.find(
    (w) => w.id_product == localStorage.getItem("id_product")
  );

  console.log(result);

  return (
    <div className="grid grid-cols-3 font-KumbhSans">
      <div className="border border-gray-200 hover:cursor-pointe">
        <img src={product?.image_1} alt="" />
      </div>
      <div className="border border-gray-200 hover:cursor-pointe">
        <img src={product?.image_2} alt="" />
      </div>
      <div>
        <div className="my-10 mx-8 flex flex-col gap-5">
          <h1 className="text-2xl font-bold">{product?.name_product}</h1>
          <h1 className="font-semibold">
            Rp{parseInt(product?.price).toLocaleString("id-ID")}
          </h1>
          <p className="font-light">{product?.description}</p>
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
          <div
            onClick={() => {}}
            className=" w-full flex items-center py-3 px-2 bg-black"
          >
            <h1 className="text-white m-auto">ADD TO CART</h1>
          </div>
        </div>
        <div className="my-10 mx-8 flex gap-10">
          {result == undefined ? (
            <div
              className="flex gap-2 cursor-pointer"
              onClick={() => {
                api
                  .post("/wishlist/add", {
                    id_user: localStorage.getItem("id"),
                    id_product: id,
                  })
                  .then(() => {
                    window.location.reload();
                  });
              }}
            >
              <IoBookmarkOutline />
              <p className="text-xs">ADD TO WISHLIST</p>
            </div>
          ) : (
            <div
              className="flex gap-2 cursor-pointer"
              onClick={() => {
                api
                  .delete2("/wishlist/delete", {
                    id_user: localStorage.getItem("id"),
                    id_product: id,
                  })
                  .then(() => {
                    window.location.reload();
                  });
              }}
            >
              <IoBookmark />
              <p className="text-xs">REMOVE FROM WISHLIST</p>
            </div>
          )}
          <div className="flex gap-2">
            <GoShareAndroid />
            <p className="text-xs">SHARE</p>
          </div>
        </div>
      </div>
    </div>
  );
}
