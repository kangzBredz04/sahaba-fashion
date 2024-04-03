import { Link } from "react-router-dom";

export default function UnauthorizedPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Akses Ditolak</h1>
      <p className="text-lg text-gray-600 mb-8">
        Anda tidak memiliki izin untuk mengakses halaman ini.
      </p>
      <Link to="/" className="text-blue-500 hover:underline">
        Kembali ke Beranda
      </Link>
    </div>
  );
}
