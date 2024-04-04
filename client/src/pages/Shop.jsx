import { useContext } from "react";
import { AllContext } from "../App";
import CardProduct from "../components/CardProduct";

export default function Shop() {
  const { products, wishlist } = useContext(AllContext);
  //   const productsToShow = products.slice(2, 6);
  return (
    <div className="grid grid-cols-4">
      {products.map((p) => (
        <CardProduct
          key={p.id}
          id={p.id}
          name={p.name_product}
          image={p.image_2}
          price={p.price}
          tipe={"Koko"}
          status={
            wishlist.find((item) => item.id_product === p.id) ? true : false
          }
        />
      ))}
    </div>
  );
}
