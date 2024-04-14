import { useContext } from "react";
import { AllContext } from "../App";
import CardWishlist from "../components/CardWishlist";
import NotLogin from "./NotLogin";

export default function Wishlist() {
  const { wishlist } = useContext(AllContext);
  const headingWishlist = [
    {
      id: 1,
      name: "PRODUCT",
    },
    {
      id: 2,
      name: "PRICE",
    },
    {
      id: 3,
      name: "STOCK STATUS",
    },
    {
      id: 4,
      name: "ACTION",
    },
  ];
  if (localStorage.getItem("token")) {
    return (
      <div className="flex flex-col gap-5 py-5 bg-gray-100">
        <h1 className="text-center font-bold tracking-widest text-2xl">
          WISHLIST
        </h1>
        <div className="flex justify-between pt-4 px-5">
          <div className="flex w-full flex-row items-center">
            {headingWishlist.map((h) => (
              <h1
                key={h.id}
                className="w-1/4 text-center text-base font-extrabold tracking-wider"
              >
                {h.name}
              </h1>
            ))}
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
  } else {
    return <NotLogin />;
  }
}
