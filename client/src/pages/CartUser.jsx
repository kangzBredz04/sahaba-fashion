/* eslint-disable no-unused-vars */
import NotLogin from "./NotLogin";
import { useContext, useEffect, useState } from "react";
import { AllContext } from "../App";
import CardCart from "../components/CardCart";
import { useNavigate } from "react-router-dom";
import NotCart from "./NotCart";

export default function CartUser() {
  const { cart } = useContext(AllContext);

  const [subTotal, setSubTotal] = useState(0);
  const [diskon, setDiskon] = useState(0);

  useEffect(() => {
    const sum = cart.reduce(
      (acc, curr) => acc + parseInt(curr.price) * parseInt(curr.total_product),
      0
    );
    setSubTotal(sum);
  }, [cart]);

  const navigate = useNavigate();

  if (localStorage.getItem("token")) {
    return (
      <div className="flex flex-col gap-5 py-5 bg-white">
        <h1 className="text-center font-bold tracking-widest text-2xl">
          KERANJANG
        </h1>
        {cart.length > 0 ? (
          <div className="flex gap-4 py-5 px-5">
            <div className="w-3/4 p-3  flex flex-col gap-3">
              <div className="flex flex-row items-center">
                <h1 className="w-3/5 text-center text-base font-extrabold tracking-wider">
                  PRODUK
                </h1>
                <h1 className="w-1/5 text-center text-base font-extrabold tracking-wider">
                  JUMLAH PRODUK
                </h1>
                <h1 className="w-1/5 text-center text-base font-extrabold tracking-wider">
                  SUBTOTAL
                </h1>
              </div>
              <div className="flex flex-col">
                {cart.map((c) => (
                  <CardCart
                    key={c.id}
                    id_cart={c.id}
                    id_product={c.id_product}
                    name_product={c.name_product}
                    image={c.image_1}
                    name_size={c.name_size}
                    total_product={c.total_product}
                    price={c.price}
                    id_size={c.id_size}
                  />
                ))}
              </div>
            </div>
            <div className="w-1/4 border h-fit border-gray-700 px-4 py-2">
              {/* <div className="flex flex-col gap-2  justify-between py-4 border-b-[1px] border-black">
              <h1 className="text-base font-extrabold tracking-wider">
                COUPON CODE
              </h1>
              <div className="flex">
                <input
                  type="text"
                  className="w-2/3 border border-gray-700 text-base p-2 bg-inherit placeholder:text-sm focus:border-black focus:outline-none focus:ring-black"
                  placeholder="COUPON CODE"
                />
                <button className="w-1/3 p-2 border border-black text-base font-extrabold tracking-wider bg-black text-white hover:bg-gray-800">
                  APPLY
                </button>
              </div>
            </div> */}
              <div className="flex flex-row items-center justify-between py-4 border-b-[1px] border-black">
                <h1 className="text-base font-extrabold tracking-wider">
                  SUBTOTAL
                </h1>
                <h1 className="text-base font-extrabold tracking-wider">
                  Rp{subTotal.toLocaleString("id-ID")}
                </h1>
              </div>
              <div className="flex flex-row items-center justify-between py-4 border-b-[1px] border-black">
                <h1 className="text-base font-extrabold tracking-wider">
                  DISKON
                </h1>
                <h1 className="text-base font-extrabold tracking-wider">
                  Rp. 0
                </h1>
              </div>
              <div className="flex flex-row items-center justify-between py-4 border-b-[1px] border-black">
                <h1 className="text-base font-extrabold tracking-wider">
                  TOTAL
                </h1>
                <h1 className="text-base font-extrabold tracking-wider">
                  Rp{(subTotal - diskon).toLocaleString("id-ID")}
                </h1>
              </div>
              <div
                onClick={() => {
                  // window.location.href = "/checkout";
                  navigate("/checkout");
                }}
                className="flex justify-center py-4 mb-2 bg-black text-white cursor-pointer hover:bg-gray-800"
              >
                <h1 className="text-base font-extrabold tracking-wider">
                  CHECKOUT
                </h1>
              </div>
            </div>
          </div>
        ) : (
          <NotCart />
        )}
      </div>
    );
  } else {
    return <NotLogin />;
  }
}
