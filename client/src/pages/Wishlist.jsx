import { useContext } from "react";
import { AllContext } from "../App";
import CardWishlist from "../components/CardWishlist";

export default function Wishlist() {
  const { wishlist, setWishlist } = useContext(AllContext);
  console.log(wishlist);
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
          {wishlist.map((w) => (
            <CardWishlist
              key={w.id}
              id={w.id}
              id_product={w.id_product}
              image_1={w.image_1}
              name_product={w.name_product}
              price={w.price}
              status={w.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
