import { Link } from "react-router-dom";
import { GoBookmark } from "react-icons/go";
import { MdOutlineLanguage } from "react-icons/md";
import { FiUser, FiMoon } from "react-icons/fi";
import { SlBag } from "react-icons/sl";
import { useContext } from "react";
import { AllContext } from "../App";

export default function Header() {
  const { wishlist } = useContext(AllContext);
  return (
    <header className="bg-white border  sticky top-0 z-50 font-KumbhSans">
      <div className="container mx-auto  py-4 flex justify-between items-center">
        <div className="flex items-center ">
          <Link to="/" className="text-xl font-bold tracking-widest">
            SAHABA FASHION
          </Link>
        </div>
        <nav className="grow flex justify-evenly space-x-4">
          <Link to="/" className="font-bold hover:text-gray-500 text-sm">
            HOME
          </Link>
          <Link
            to="/new-arrivals"
            className="font-bold hover:text-gray-500 text-sm"
          >
            NEW ARRIVALS
          </Link>
          <Link to="/shop" className="font-bold hover:text-gray-500 text-sm">
            PRODUCT
          </Link>
          <Link to="/about" className="font-bold hover:text-gray-500 text-sm">
            ABOUT US
          </Link>
        </nav>
        <div className="flex justify-evenly space-x-4 w-1/5">
          <Link to="/" className="text-gray-700 hover:text-gray-900 ">
            <FiMoon className="text-xl" />
          </Link>
          <Link to="/" className="text-gray-700 hover:text-gray-900 ">
            <MdOutlineLanguage className="text-xl" />
          </Link>
          <Link to="/profile" className="text-gray-700 hover:text-gray-900 ">
            <FiUser className="text-xl" />
          </Link>
          <Link
            to="/wishlist"
            className="text-gray-700 hover:text-gray-900 relative"
          >
            {wishlist.length < 1 ? (
              ""
            ) : (
              <div className="absolute -right-1 -top-2 text-white px-1 bg-red-600 rounded-full text-xs">
                {wishlist?.length}
              </div>
            )}
            <GoBookmark className="text-xl" />
          </Link>
          <Link
            to="/cart"
            className="text-gray-700 hover:text-gray-900 relative"
          >
            <div className="absolute -right-2 -top-2 text-white px-1 bg-red-600 rounded-full text-xs">
              2
            </div>
            <SlBag className="text-xl" />
          </Link>
        </div>
      </div>
    </header>
  );
}
