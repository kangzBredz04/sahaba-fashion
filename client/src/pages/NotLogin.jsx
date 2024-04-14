import { Link } from "react-router-dom";

export default function NotLogin() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Oops!</h1>
      <p className="text-lg text-gray-600 mb-4">
        Anda belum login. Silakan login terlebih dahulu untuk melanjutkan.
      </p>
      <Link
        to="/login"
        className="bg-black border border-black hover:bg-white hover:text-black text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
      >
        Login Sekarang
      </Link>
    </div>
  );
}
