// components/FeaturedCategories.tsx
import Image from "next/image";
import { ShoppingCart } from "lucide-react";

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "The Colette bag",
    price: "$43",
    image: "/bag1.png",
  },
  {
    id: 2,
    name: "The bag",
    price: "$60",
    image: "/bag2.jpg",
  },
  {
    id: 3,
    name: "The Colette bag",
    price: "$43",
    image: "/chain.jpg",
  },
  {
    id: 4,
    name: "The Colette bag",
    price: "$43",
    image: "/neck.jpg",
  },
];

export default function FeaturedCategories() {
  return (
    <div className="bg-[#E1E2E1]">
    <section className="w-full max-w-7xl mx-auto py-12 px-4">
      <h2 className="text-lg font-semibold mb-6">
        Featured Popular Categories
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center">
            <div className="w-full aspect-square overflow-hidden rounded-md shadow-sm">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-2 flex items-center justify-between w-full">
              <div>
                <p className="text-gray-800 font-medium">{product.price}</p>
                <p className="text-sm text-gray-600">{product.name}</p>
              </div>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <ShoppingCart size={30} />
              </button>
            </div>
            <Image
            src="/3d.png"
            alt="3d icon"
            width={30}
            height={30}
            className="mt-2"
          />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-16">
        <button className="bg-[#E8912E] hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-md shadow-md">
          Explore More Product
        </button>
      </div>
    </section>
    </div>
  );
}
