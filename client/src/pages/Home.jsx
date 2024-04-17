import { useContext } from "react";
import { AllContext } from "../App";
import CardProduct from "../components/CardProduct";
import Loading from "../components/Loading";

export default function Home() {
  const { products, wishlist } = useContext(AllContext);
  const filterProduct = (category) => {
    return products.filter((p) => p.category === category).slice(0, 4);
  };

  if (products[0]?.id) {
    return (
      <div className="font-KumbhSans flex flex-col gap-20">
        {/* KOKO MODERN */}
        <div className="flex flex-col">
          <div className="flex flex-col gap-3 py-8 m-auto">
            <div>
              <h1 className="text-center font-medium text-xl tracking-wider">
                TEMUKAN KOLEKSI TERBARU SEKARANG
              </h1>
            </div>
            <div className="text-center">
              <h3 className="text-sm underline">Tampilkan Semua</h3>
            </div>
          </div>
          <div className="grid grid-cols-4">
            {filterProduct("Koko Modern").map((p) => (
              <CardProduct
                key={p.id}
                id={p.id}
                name={p.name_product}
                image={p.image_1}
                price={p.price}
                tipe={p.category}
                status={
                  wishlist?.find((item) => item.id_product === p.id)
                    ? true
                    : false
                }
              />
            ))}
          </div>
        </div>
        {/* PANTS */}
        <div className="flex flex-row">
          <img
            src="https://fadkhera.com/wp-content/uploads/2024/03/13.-Banner-Maaz-Grey.webp"
            alt=""
            className="w-2/3"
          />
          <div className="w-1/3 flex flex-col py-3 px-10 gap-5 justify-center">
            <p className="text-4xl font-semibold tracking-wide">MAAZ PANTS</p>
            <p className="text-2xl tracking-wide">
              Mechanical Strecth with durability materials
            </p>
            <button className="py-4 px-2 text-white bg-black hover:text-black hover:bg-white outline">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="grid grid-cols-4">
          {filterProduct("Essential Pants").map((p) => (
            <CardProduct
              key={p.id}
              id={p.id}
              name={p.name_product}
              image={p.image_1}
              price={p.price}
              tipe={p.category}
              status={
                wishlist?.find((item) => item.id_product === p.id)
                  ? true
                  : false
              }
            />
          ))}
        </div>
        {/* ESSENTIAL SHIRT */}
        <div className="flex flex-row">
          <div className="w-1/3 flex flex-col py-3 px-10 gap-5 justify-center">
            <p className="text-4xl font-semibold tracking-wide">
              ESSENTIAL SHIRT
            </p>
            <p className="text-2xl tracking-wide">Elegan dan Minimalis</p>
            <button className="py-4 px-2 text-white bg-black hover:text-black hover:bg-white outline">
              SHOP NOW
            </button>
          </div>
          <img
            src="https://fadkhera.com/wp-content/uploads/2024/01/Banner-Essential-Shirt-Eshan.webp"
            alt=""
            className="w-2/3"
          />
        </div>
        <div className="grid grid-cols-4">
          {filterProduct("Essential Shirt").map((p) => (
            <CardProduct
              key={p.id}
              id={p.id}
              name={p.name_product}
              image={p.image_1}
              price={p.price}
              tipe={p.category}
              status={
                wishlist?.find((item) => item.id_product === p.id)
                  ? true
                  : false
              }
            />
          ))}
        </div>
        {/* ESSENTIAL T-SHIRT */}
        <div className="flex flex-row">
          <img
            src="https://fadkhera.com/wp-content/uploads/2024/01/Banner-Alzam-Olive-taupe.webp"
            alt=""
            className="w-2/3"
          />
          <div className="w-1/3 flex flex-col py-3 px-10 gap-5 justify-center">
            <p className="text-4xl font-semibold tracking-wide">
              ALZAM T-SHIRT
            </p>
            <p className="text-2xl tracking-wide">
              Strong and durable strecth fabric with cool feel technology
            </p>
            <button className="py-4 px-2 text-white bg-black hover:text-black hover:bg-white outline">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="grid grid-cols-4">
          {filterProduct("T-Shirt").map((p) => (
            <CardProduct
              key={p.id}
              id={p.id}
              name={p.name_product}
              image={p.image_1}
              price={p.price}
              tipe={p.category}
              status={
                wishlist?.find((item) => item.id_product === p.id)
                  ? true
                  : false
              }
            />
          ))}
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
}
