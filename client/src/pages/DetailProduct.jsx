/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { AllContext } from "../App";
import { GoShareAndroid } from "react-icons/go";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import { PiHandsPrayingBold } from "react-icons/pi";
import { api } from "../utils";
import CardProduct from "../components/CardProduct";
import Loading from "../components/Loading";
// import { api } from "../utils";

export default function DetailProduct() {
  const { id } = useParams();
  const { products, wishlist } = useContext(AllContext);
  const [user] = useOutletContext();
  const product = products.find((p) => p.id == parseInt(id));

  const [cartProduct, setCartProduct] = useState({});
  const [nameSize, setNameSize] = useState([]);

  const result = wishlist.find(
    (w) => w.id_product == localStorage.getItem("id_product")
  );

  const productsLike = products
    .filter((p) => p.id !== localStorage.getItem("id_product"))
    .slice(0, 4);

  const navigate = useNavigate();

  useEffect(() => {
    api
      .get(`/stock/get-size/${localStorage.getItem("id_product")}`)
      .then((res) => setNameSize(res));

    setCartProduct({
      id_user: localStorage.getItem("id"),
      id_product: localStorage.getItem("id_product"),
      total_product: 0,
      id_size: 0,
    });
  }, []);

  console.log(cartProduct);

  if (products[0]?.id) {
    return (
      <div>
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
              <h1 className="font-semibold">
                Rp{parseInt(product.price).toLocaleString("id-ID")}
              </h1>
              <p className="font-light">{product.description}</p>
            </div>
            {nameSize?.length > 0 ? (
              <div className="my-1 mx-8 flex flex-col gap-5">
                <div className="flex justify-between">
                  <h1 className="font-bold">SIZE</h1>
                  <h1 className="text-xs">SIZE GUIDE</h1>
                </div>
                <div className="flex justify-between">
                  <select
                    name="name_size"
                    className="w-full py-3 px-2 border border-gray-400 rounded-md"
                    onChange={(e) =>
                      setCartProduct({
                        ...cartProduct,
                        total_product: 1,
                        id_size: e.target.value,
                      })
                    }
                  >
                    <option value="" disabled selected hidden>
                      Pilih opsi ukuran...
                    </option>
                    {nameSize.map((s) => (
                      <option
                        key={s.id}
                        value={s.id_size}
                        className="w-full py-3 px-2 border border-gray-400 rounded-md"
                      >
                        {s.name_size}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            ) : (
              <div className="my-1 mx-8 flex flex-row items-center gap-3">
                <h1 className="text-center text-md font-bold">
                  MOHON MAAF STOK LAGI KOSONG
                </h1>
                <PiHandsPrayingBold className="text-xl" />
              </div>
            )}
            {nameSize.length > 0 && (
              <div className="my-10 mx-8 flex gap-5">
                <div
                  onClick={() => {
                    if (cartProduct.total_product == 0) {
                      alert("Harap pilih dulu ukuran");
                    } else {
                      api.post("/cart/add", cartProduct).then((res) => {
                        alert(res.msg);
                        window.location.reload();
                      });
                    }
                  }}
                  className=" w-full flex items-center py-3 px-2 bg-black cursor-pointer"
                >
                  <h1 className="text-white m-auto">ADD TO CART</h1>
                </div>
              </div>
            )}
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
                      .then(() => window.location.reload());
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
                      .then(() => window.location.reload());
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
        {/* PRODUK YANG MUNGKIN DISUKAI */}
        <div className="w-full py-7">
          <h1 className="text-center text-xl font-bold tracking-wider">
            ANDA JUGA MUNGKIN MENYUKAI
          </h1>
          <div className="grid grid-cols-4 pt-8">
            {productsLike?.map((p) => (
              <CardProduct
                key={p.id}
                id={p.id}
                name={p.name_product}
                image={p.image_1}
                price={p.price}
                tipe={"Koko"}
                status={
                  wishlist.find((item) => item.id_product === p.id)
                    ? true
                    : false
                }
              />
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
}
