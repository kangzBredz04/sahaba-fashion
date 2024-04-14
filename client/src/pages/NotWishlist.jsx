import { GoBookmark } from "react-icons/go";
import { Link } from "react-router-dom";
export default function NotWishlist() {
  return (
    <div className="flex flex-col items-center py-4 gap-5">
      <div className="relative">
        <div className="absolute right-2 -top-2 text-white px-3 py-1 bg-black rounded-full text-5xl">
          0
        </div>
        <GoBookmark className="text-9xl" />
      </div>
      <h1 className="text-2xl font-semibold">
        Your Wishlist Is Currently Empty
      </h1>
      <div className="flex items-center gap-1">
        Click the <GoBookmark /> icons to add products
      </div>
      <Link
        to="/shop"
        className="bg-white text-black hover:bg-black hover:text-white py-3 px-7 outline outline-[1px]"
      >
        RETURN TO SHOP
      </Link>
    </div>
  );
}
