import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AllContext } from "../App";

export default function Home() {
  // const { user } = useContext(AllContext);
  // // console.log(user?.status);
  // if (user) {
  return (
    <div>
      {/* <h1>{user.data?.username}</h1> */}
      <h1>Home</h1>
      <Link>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md">
          Logout
        </button>
      </Link>
    </div>
  );
  // } else {
  //   console.log("Gagal");
  //   return <Navigate to="/login" />;
  // }
}
