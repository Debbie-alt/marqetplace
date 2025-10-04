import React from "react";
import { Heart, ShoppingCart } from "lucide-react";

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      title: "Men Hoodie: Husband Material",
      price: 15,
      image: "https://via.placeholder.com/300x300.png?text=Hoodie",
    },
    {
      id: 2,
      title: "NIVEA His & Hers Pack",
      price: 15,
      image: "https://via.placeholder.com/300x300.png?text=Body+Care",
    },
    {
      id: 3,
      title: "Opk Wristwatch",
      price: 15,
      image: "https://via.placeholder.com/300x300.png?text=Watch",
    },
    {
      id: 4,
      title: "Men Agbada: Husband Material",
      price: 15,
      image: "https://via.placeholder.com/300x300.png?text=Agbada",
    },
    {
      id: 5,
      title: "Men Hoodie",
      price: 15,
      image: "https://via.placeholder.com/300x300.png?text=Hoodie",
    },
    {
      id: 6,
      title: "Men Hoodie",
      price: 15,
      image: "https://via.placeholder.com/300x300.png?text=Hoodie",
    },
    {
      id: 7,
      title: "Men Hoodie",
      price: 15,
      image: "https://via.placeholder.com/300x300.png?text=Hoodie",
    },
    {
      id: 8,
      title: "Men Hoodie",
      price: 15,
      image: "https://via.placeholder.com/300x300.png?text=Hoodie",
    },
  ];

  return (
    <div className="p-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="relative flex flex-col border border-gray-200 rounded-lg p-3 bg-white hover:shadow-md transition"
        >
          {/* Top Right Icons */}
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            <button className="p-1 bg-white rounded-full border hover:bg-gray-50">
              <Heart size={16} className="text-amber-500" />
            </button>
            <button className="p-1 bg-white rounded-full border hover:bg-gray-50">
              <ShoppingCart size={16} className="text-gray-700" />
            </button>
          </div>

          {/* Image */}
          <div className="w-full h-52 flex items-center justify-center mb-3">
            <img
              src={product.image}
              alt={product.title}
              className="object-contain h-full"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col gap-1">
            <p className="text-gray-900 font-semibold">${product.price}</p>
            <p className="text-sm text-gray-700 truncate">{product.title}</p>
            <p className="text-xs text-gray-500">Reviews: ⭐⭐⭐⭐☆</p>
          </div>

          {/* Button */}
          <button className="mt-3 bg-[#294952] text-white py-2 rounded-md text-sm font-medium hover:bg-[#1f373e]">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductShowcase;
