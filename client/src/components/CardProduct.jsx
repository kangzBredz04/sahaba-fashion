/* eslint-disable react/prop-types */
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { api } from "../utils";
export default function CardProduct({ id, name, image, tipe, price, status }) {
  const navigate = useNavigate();

  return (
    <div className="border border-gray-200 hover:cursor-pointer">
      {status ? (
        <IoBookmark
          onClick={() => {
            if (localStorage.getItem("id")) {
              api
                .delete2("/wishlist/delete", {
                  id_user: localStorage.getItem("id"),
                  id_product: id,
                })
                .then(() => {
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
          localStorage.setItem("id_product", id);
          window.location.href = `/product/${localStorage.getItem(
            "id_product"
          )}`;
        }}
      >
        <img src={image} alt="" className="h-1/2" />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <p className="text-sm">{tipe}</p>
        <p className="text-sm font-semibold">{name}</p>
        <p className="text-sm font-light">
          Rp{parseInt(price).toLocaleString("id-ID")}
        </p>
        {/* <p>{status}</p> */}
      </div>
    </div>
  );
}
