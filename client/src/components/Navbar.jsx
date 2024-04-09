import { Link } from "react-router-dom";
import { MdOutlineLanguage } from "react-icons/md";
import { FiUser, FiMoon } from "react-icons/fi";
import { useContext } from "react";
import { AdminContext } from "../pages/Admin";
import { FaRegSun } from "react-icons/fa";

export default function Navbar() {
  const { theme, setTheme } = useContext(AdminContext);
  return (
    <nav
      className={`sticky top-0 py-6 px-5  flex justify-between items-center ${
        theme === "dark"
          ? "bg-black text-white shadow-white"
          : "bg-white text-black"
      }`}
    >
      <div className="flex items-center">
        {/* <img src="/logo.png" alt="Logo" className="h-8 mr-4" /> */}
        <h1 className="text-xl font-bold tracking-widest">ADMIN PAGE</h1>
      </div>
      <div className="flex justify-evenly space-x-4 w-1/5">
        <Link>
          {theme === "dark" ? (
            <FaRegSun onClick={() => setTheme("light")} className="text-2xl" />
          ) : (
            <FiMoon onClick={() => setTheme("dark")} className="text-2xl" />
          )}
        </Link>
        <Link to="/admin/a">
          <MdOutlineLanguage className="text-2xl" />
        </Link>
        <Link to="/admin/profile">
          <FiUser className="text-2xl" />
        </Link>
      </div>
    </nav>
  );
}
