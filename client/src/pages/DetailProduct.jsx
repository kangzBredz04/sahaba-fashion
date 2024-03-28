import { useParams } from "react-router-dom";

export default function DetailProduct() {
  const { id } = useParams();
  return (
    <div>
      <h1>Detail Product {id}</h1>
    </div>
  );
}
