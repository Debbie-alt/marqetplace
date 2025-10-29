import React from "react";
import { HeartIcon, ShoppingCart } from "lucide-react";
import Image from "next/image";

type Product = {
  id: string;
  name: string;
  price: number;
  thumbnail: string;
};

type ProductShowcaseProps = {
  products: Product[];
};

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ products }) => {
  return (
    <section className="flex flex-col justify-center">
      <div className="px-6 md:px-14 py-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.length === 0 ? (
          <p className="col-span-full mx-auto text-center text-gray-500">
            No products available.
          </p>
        ) : (
          products.map((product) => (
            <div
              key={product.id}
              className="relative flex flex-col border border-gray-200 rounded-lg p-3 bg-white transition hover:scale-105 duration-300 ease-in-out hover:shadow-lg overflow-hidden"
            >
              {/* Cart icon */}
              <div className="absolute top-3 right-3 flex flex-col gap-2">
                <ShoppingCart size={30} className="text-gray-800" role="button" />
              </div>

              {/* Product image */}
              <div className="w-full h-64 flex flex-col items-center justify-center mb-3 relative">
                <img
                  src={product.thumbnail || "/outfit.png"}
                  alt={product.name}
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-2 right-2">
                  <HeartIcon size={18} role="button" className="text-amber-500" />
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col gap-1">
                <p className="text-gray-900 font-semibold">${product.price}</p>
                <p className="text-sm text-gray-700 truncate">{product.name}</p>
                <p className="text-xs text-gray-500">Reviews: ⭐⭐⭐⭐☆</p>
              </div>
              {/* Button + 3D Icon */}
              <div className="flex flex-col md:flex-row items-end justify-center w-full gap-3" role="button">
                <button className="mt-6 bg-[#294952] cursor-pointer text-white py-2 w-full md:w-3/4 px-6 rounded-md text-xs sm:text-sm font-medium hover:bg-[#1f373e]">
                  Add to Cart
                </button>
                <Image src="/3d.png" alt="3d icon" width={35} height={35} />
              </div>
            </div>
          ))
        )}
      </div>

      <button className="bg-[#E8912E] hover:bg-[#E8912E]/90 transition-all ease-in-out mx-auto mt-12 mb-12 text-white rounded-md px-14 py-2.5">
        Explore More
      </button>
    </section>
  );
};

export default ProductShowcase;
