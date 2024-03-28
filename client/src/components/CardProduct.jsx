export default function CardProduct({ name, image, tipe, price }) {
  return (
    <div className="border border-gray-200">
      <div className="w-full">
        <img src={image} alt="" />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <p className="text-sm">{tipe}</p>
        <p className="text-sm font-semibold">{name}</p>
        <p className="text-sm font-light">Rp{price}</p>
      </div>
    </div>
  );
}
