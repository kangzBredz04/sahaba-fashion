import { useContext } from "react";
import { AllContext } from "../App";
import CardProduct from "../components/CardProduct";
import Loading from "../components/Loading";

export default function Home() {
  const { products, wishlist } = useContext(AllContext);
  const productsToShow = products.slice(2, 6);

  console.log(wishlist);

  if (products[0]?.id) {
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
          {productsToShow.map((p) => (
            <CardProduct
              key={p.id}
              id={p.id}
              name={p.name_product}
              image={p.image_1}
              price={p.price}
              tipe={"Koko"}
              status={
                wishlist.find((item) => item.id_product === p.id) ? true : false
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
