import { useContext } from "react";
import { AllContext } from "../App";
import CardProduct from "../components/CardProduct";

export default function Home() {
  const products2 = [
    {
      id: 1,
      name: "Bahdiem Long",
      tipe: "KOKO MODERN",
      price: 294000,
      image:
        "https://fadkhera.com/wp-content/uploads/2024/03/koko-modern-faiq-2.webp",
    },
    {
      id: 2,
      name: "Bahdiem Long",
      tipe: "KOKO MODERN",
      price: 294000,
      image:
        "https://fadkhera.com/wp-content/uploads/2024/03/koko-modern-bahdiem-long-2.webp",
    },
    {
      id: 3,
      name: "Bahdiem Long",
      tipe: "KOKO MODERN",
      price: 294000,
      image:
        "https://fadkhera.com/wp-content/uploads/2024/03/koko-modern-faiq-2.webp",
    },
    {
      id: 4,
      name: "Bahdiem Long",
      tipe: "KOKO MODERN",
      price: 294000,
      image:
        "https://fadkhera.com/wp-content/uploads/2024/03/koko-modern-bahdiem-long-2.webp",
    },
    {
      id: 5,
      name: "Bahdiem Long",
      tipe: "KOKO MODERN",
      price: 294000,
      image:
        "https://fadkhera.com/wp-content/uploads/2024/03/koko-modern-faiq-2.webp",
    },
    {
      id: 6,
      name: "Bahdiem Long",
      tipe: "KOKO MODERN",
      price: 294000,
      image:
        "https://fadkhera.com/wp-content/uploads/2024/03/koko-modern-bahdiem-long-2.webp",
    },
  ];
  const { products } = useContext(AllContext);
  products.map((p) => console.log(p.name_product));
  return (
    <div className="font-KumbhSans">
      <div className="flex flex-col gap-3 py-8 m-auto">
        <div>
          <h1 className="text-center font-medium text-xl tracking-wider">
            DISCOVER THE NEWEST COLLECTION NOW
          </h1>
        </div>
        <div className="text-center">
          <h3 className="text-sm">Show All</h3>
        </div>
      </div>

      <div className="grid grid-cols-4">
        {/* {products.map((p) => (
          <CardProduct
            key={p.id}
            name={p.name_product}
            image={p.image_1}
            price={p.price}
            tipe="Koko"
          />
        ))} */}
        {products.map((p) => (
          <CardProduct
            key={p.id}
            name={p.name_product}
            image={p.image_2}
            price={p.price}
            tipe={"Koko"}
          />
        ))}
      </div>
    </div>
  );
}
