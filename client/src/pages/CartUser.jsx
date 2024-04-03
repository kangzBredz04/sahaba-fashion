import { FaPlus, FaMinus } from "react-icons/fa6";

export default function CartUser() {
  return (
    <div className="flex flex-col gap-5 py-5 bg-gray-100">
      <h1 className="text-center font-bold tracking-widest text-xl">CART</h1>
      <div className="flex gap-4 black py-5 px-5">
        <div className="w-3/4 p-3  flex flex-col gap-3">
          <div className="flex flex-row items-center">
            <h1 className="w-3/5 text-center text-base font-extrabold tracking-wider">
              PRODUCT
            </h1>
            <h1 className="w-1/5 text-center text-base font-extrabold tracking-wider">
              QUANTITY
            </h1>
            <h1 className="w-1/5 text-center text-base font-extrabold tracking-wider">
              SUBTOTAL
            </h1>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row items-center justify-between gap-5 py-2 border-b-[1px] border-black">
              <div className="w-3/5 flex flex-row items-center gap-7 py-2">
                <img
                  src="https://fadkhera.com/wp-content/uploads/2024/04/koko-modern-azraq-long.webp"
                  alt=""
                  className="w-12"
                />
                <div className="flex flex-col gap-1">
                  <h1 className="text-base font-extrabold tracking-wider">
                    Azraq Long - L
                  </h1>
                  <h1 className="text-sm text-gray-600 font-semibold tracking-wider">
                    1 x Rp294.000
                  </h1>
                </div>
              </div>
              <div className="w-1/5">
                <div className="flex flex-row items-center py-3 px-2 justify-between ">
                  <FaMinus className="cursor-pointer" />
                  <h1>1</h1>
                  <FaPlus className="cursor-pointer" />
                </div>
              </div>
              <div className="w-1/5">
                <h1 className="text-base text-center font-extrabold tracking-wider">
                  Rp294.000
                </h1>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between gap-5 py-2 border-b-[1px] border-black">
              <div className="w-3/5 flex flex-row items-center gap-7 py-2">
                <img
                  src="https://fadkhera.com/wp-content/uploads/2024/03/Sarong-Navy.webp"
                  alt=""
                  className="w-12"
                />
                <div className="flex flex-col gap-1">
                  <h1 className="text-base font-extrabold tracking-wider">
                    Sarong Navy
                  </h1>
                  <h1 className="text-sm text-gray-600 font-semibold tracking-wider">
                    1 x Rp119.000
                  </h1>
                </div>
              </div>
              <div className="w-1/5">
                <div className="flex flex-row items-center py-3 px-2 justify-between ">
                  <FaMinus className="cursor-pointer" />
                  <h1>1</h1>
                  <FaPlus className="cursor-pointer" />
                </div>
              </div>
              <div className="w-1/5">
                <h1 className="text-base text-center font-extrabold tracking-wider">
                  Rp119.000
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4 border border-gray-700 px-4 py-2">
          <div className="flex flex-col gap-2  justify-between py-4 border-b-[1px] border-black">
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
          </div>
          <div className="flex flex-row items-center justify-between py-4 border-b-[1px] border-black">
            <h1 className="text-base font-extrabold tracking-wider">
              SUBTOTAL
            </h1>
            <h1 className="text-base font-extrabold tracking-wider">
              Rp413.000
            </h1>
          </div>
          <div className="flex flex-row items-center justify-between py-4 border-b-[1px] border-black">
            <h1 className="text-base font-extrabold tracking-wider">DISKON</h1>
            <h1 className="text-base font-extrabold tracking-wider">Rp. 0</h1>
          </div>
          <div className="flex flex-row items-center justify-between py-4 border-b-[1px] border-black">
            <h1 className="text-base font-extrabold tracking-wider">TOTAL</h1>
            <h1 className="text-base font-extrabold tracking-wider">
              Rp413.000
            </h1>
          </div>
          <div className="flex justify-center py-4 mb-2 bg-black text-white cursor-pointer hover:bg-gray-800">
            <h1 className="text-base font-extrabold tracking-wider">
              CHECKOUT
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
