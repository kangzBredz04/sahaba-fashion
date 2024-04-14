export default function NotLogin() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Oops!</h1>
      <p className="text-lg text-gray-600 mb-4">
        Anda belum login. Silakan login terlebih dahulu untuk melanjutkan.
      </p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Login Sekarang
      </button>
    </div>
  );
}
