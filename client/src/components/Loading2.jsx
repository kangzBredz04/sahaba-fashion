export default function Loading2() {
  return (
    <div className="absolute inset-0 flex justify-center items-center bg-gray-200 bg-opacity-75 z-50">
      <div className=" bg-opacity-75 p-7 items-center rounded gap-4  flex flex-col">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        <h2 className="text-lg font-bold mb-2">Loading...</h2>
      </div>
    </div>
  );
}
