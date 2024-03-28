import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ImageSlide() {
  const products = [
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
      name: "Baasa",
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const productsToShow = products.slice(currentIndex, currentIndex + 4);

  const nextSlide = () => {
    const lastIndex = products.length - 4;
    setCurrentIndex((prevIndex) =>
      prevIndex === lastIndex ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    const lastIndex = products.length - 4;
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? lastIndex : prevIndex - 1
    );
  };
  return (
    <div className="flex justify-center items-center">
      <button onClick={prevSlide} className="mr-2">
        &#10094;
      </button>
      {productsToShow.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.id}</h3>
          <p>{product.price}</p>
        </div>
      ))}
      <button onClick={nextSlide} className="ml-2">
        &#10095;
      </button>
    </div>
  );
}
