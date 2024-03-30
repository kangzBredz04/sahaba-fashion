export default function Loading2() {
  return (
    <div className="absolute inset-0 flex justify-center items-center bg-gray-200 bg-opacity-75 z-50">
      <div className="bg-white p-4 rounded shadow-lg">
        <h2 className="text-lg font-bold mb-2">Loading...</h2>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    </div>
  );
}
