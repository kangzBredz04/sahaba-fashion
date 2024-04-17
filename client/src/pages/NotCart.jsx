import { SlBag } from "react-icons/sl";
import { Link } from "react-router-dom";

export default function NotCart() {
  return (
    <div className="flex flex-col items-center py-4 gap-5">
      <div className="relative">
        <div className="absolute -right-4 -top-2 text-white px-3 py-1 bg-black rounded-full text-5xl">
          0
        </div>
        <SlBag className="text-9xl" />
      </div>
      <h1 className="text-2xl font-semibold">Your Cart Is Currently Empty</h1>
      <Link
        to="/shop"
        className="bg-black text-white hover:bg-white hover:text-black py-3 px-7 outline"
      >
        RETURN TO SHOP
      </Link>
    </div>
  );
}
