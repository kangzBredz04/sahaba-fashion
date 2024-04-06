/* eslint-disable react/prop-types */
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { api } from "../utils";
export default function CardProduct({ id, name, image, tipe, price, status }) {
  const navigate = useNavigate();

  // const dataProduct = {
  //   id: id,
  //   name: name,
  //   image: image,
  //   tipe: tipe,
  //   price: price,
  // };

  return (
    <div className="border border-gray-200 hover:cursor-pointer">
      {status ? (
        <IoBookmark
          onClick={() => {
            if (localStorage.getItem("id")) {
              console.log("masuk");
              api
                .delete2("/wishlist/delete", {
                  id_user: localStorage.getItem("id"),
                  id_product: id,
                })
                .then(() => {
                  // alert(res.msg);
                  window.location.reload();
                });
            } else {
              alert("Anda harus login dahulu");
              navigate("/login");
            }
          }}
          className="absolute text-2xl  ml-1 mt-2"
        />
      ) : (
        <IoBookmarkOutline
          onClick={() => {
            if (localStorage.getItem("id")) {
              console.log("masuk");
              api
                .post("/wishlist/add", {
                  id_user: localStorage.getItem("id"),
                  id_product: id,
                })
                .then((res) => {
                  alert(res.msg);
                  window.location.reload();
                });
            } else {
              alert("Anda harus login dahulu");
              navigate("/login");
            }
          }}
          className="absolute text-2xl  ml-1 mt-2"
        />
      )}
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
        {/* <p>{status}</p> */}
      </div>
    </div>
  );
}
