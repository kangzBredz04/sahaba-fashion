import { useContext } from "react";
import { AllContext } from "../App";

export default function NewArrivals() {
  const { products, setProducts } = useContext(AllContext);
  console.log(products);
  return (
    <div className="w-full font-KumbhSans flex flex-col">
      <div className="py-8 text-center">
        <h1 className="font-extrabold tracking-widest text-2xl">
          NEW ARRIVALS
        </h1>
      </div>
      <div className="flex flex-wrap"></div>
    </div>
  );
}
