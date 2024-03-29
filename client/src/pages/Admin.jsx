import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Admin() {
  return (
    <div className="flex h-screen overflow-hidden font-KumbhSans">
      {/* Sidebar */}
      <SideBar />
      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Navbar */}
        <Navbar />
        {/* Main Content */}
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
