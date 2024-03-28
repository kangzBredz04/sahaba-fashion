import { GoBookmark } from "react-icons/go";
import { useNavigate } from "react-router-dom";
export default function CardProduct({ id, name, image, tipe, price }) {
  const navigate = useNavigate();
  return (
    <div
      className="border border-gray-200 hover:cursor-pointer"
      onClick={() => {
        navigate(`/product/${id}`);
        // console.log(name);
      }}
    >
      <GoBookmark className="absolute text-2xl text-gray-600 ml-1 mt-2" />
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
