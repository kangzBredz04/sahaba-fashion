import { Link } from "react-router-dom";
import { MdOutlineLanguage } from "react-icons/md";
import { FiUser, FiMoon } from "react-icons/fi";
export default function Navbar() {
  return (
    <nav className="sticky top-0  bg-white text-black py-6 px-5 shadow-md flex justify-between items-center">
      <div className="flex items-center">
        {/* <img src="/logo.png" alt="Logo" className="h-8 mr-4" /> */}
        <h1 className="text-xl font-bold tracking-widest">ADMIN PAGE</h1>
      </div>
      <div className="flex justify-evenly space-x-4 w-1/5">
        <Link to="/profile">
          <FiMoon className="text-2xl" />
        </Link>
        <Link to="/profile">
          <MdOutlineLanguage className="text-2xl" />
        </Link>
        <Link to="/profile">
          <FiUser className="text-2xl" />
        </Link>
      </div>
    </nav>
  );
}
