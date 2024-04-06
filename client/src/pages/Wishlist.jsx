import { IoMdCloseCircleOutline } from "react-icons/io";
import { MdGridView } from "react-icons/md";

export default function Wishlist() {
  return (
    <div className="flex flex-col gap-5 py-5 bg-gray-100">
      <h1 className="text-center font-bold tracking-widest text-2xl">
        WISHLIST
      </h1>
      <div className="flex justify-between pt-4 px-5">
        <div className="flex w-full flex-row items-center">
          <h1 className="w-1/4 text-center text-base font-extrabold tracking-wider">
            PRODUCT
          </h1>
          <h1 className="w-1/4 text-center text-base font-extrabold tracking-wider">
            PRICE
          </h1>
          <h1 className="w-1/4 text-center text-base font-extrabold tracking-wider">
            STOCK STATUS
          </h1>
          <h1 className="w-1/4 text-center text-base font-extrabold tracking-wider">
            ACTION
          </h1>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="px-10">
          <div className="flex flex-row items-center justify-between py-4  border-b-[1px] border-black">
            <div className="flex items-center gap-3">
              <IoMdCloseCircleOutline className="text-xl" />
              <img
                src="https://fadkhera.com/wp-content/uploads/2024/04/koko-modern-azraq-long-200x200.webp"
                alt=""
                className="w-12"
              />
              <h1 className="text-base font-extrabold tracking-wider">
                Azraq Long
              </h1>
            </div>
            <div>
              <h1 className="text-base font-extrabold tracking-wider">
                RP294,000
              </h1>
            </div>
            <div>
              <h1 className="text-base font-extrabold tracking-wider">
                IN STOCK
              </h1>
            </div>
            <div className="flex items-center gap-3 border cursor-pointer border-black py-2 px-2">
              <MdGridView />
              <button className="text-base font-extrabold tracking-wider">
                VIEW PRODUCT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
