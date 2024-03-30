import { MdOutlineDashboard } from "react-icons/md";
import { GrLogout } from "react-icons/gr";
import { FiUsers } from "react-icons/fi";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { LuBoxes } from "react-icons/lu";
import { RiShirtLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="font-KumbhSans text-black bg-white  flex flex-col gap-7 shadow-xl h-screen w-36 py-4 px-4">
      <div className=" text-center">
        <h1 className="text-xl font-bold tracking-widest">SAHABA</h1>
        <h1 className="text-xl font-bold tracking-widest">FASHION</h1>
      </div>
      <div className="flex flex-col justify-between h-full">
        <Link className="text-center flex flex-col gap-1 hover:cursor-pointer">
          <MdOutlineDashboard className="m-auto text-3xl" />
          <h1 className="text-base font-medium">Dashboard</h1>
        </Link>
        <Link className="text-center flex flex-col gap-1 hover:cursor-pointer">
          <FiUsers className="m-auto text-3xl" />
          <h1 className="text-base font-medium">Users</h1>
        </Link>
        <Link
          to="/admin/product"
          className="text-center flex flex-col gap-1 hover:cursor-pointer"
        >
          <RiShirtLine className="m-auto text-3xl" />
          <h1 className="text-base font-medium">Products</h1>
        </Link>
        <Link className="text-center flex flex-col gap-1 hover:cursor-pointer">
          <LiaFileInvoiceDollarSolid className="m-auto text-3xl" />
          <h1 className="text-base font-medium">Orders</h1>
        </Link>
        <Link className="text-center flex flex-col gap-1 hover:cursor-pointer">
          <LuBoxes className="m-auto text-3xl" />
          <h1 className="text-base font-medium">Stocks</h1>
        </Link>
        <Link className="text-center flex flex-col gap-1 hover:cursor-pointer">
          <GrLogout className="m-auto text-3xl" />
          <h1 className="text-base font-medium">Logout</h1>
        </Link>
      </div>
    </div>
  );
}
