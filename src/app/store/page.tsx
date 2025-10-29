'use client'
import Footer from "../components/Homepage/Footer";
import ProductGrid from "../components/Store/ProductGrid";
import ProductShowcase from "../components/Store/ProductShowcase";
import RootLayout from "../layout"; 
import { useEffect, useState } from "react";

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  video3D?: string;
  thumbnail: string;
  createdAt: string;
  updatedAt: string;
};

export default function StorePage() { 
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://marqet-place-api.onrender.com/api/v1/products?page=1&limit=10');
        const data = await response.json();
        console.log("Fetched data:", data);
        
        // ✅ Correct extraction based on your actual structure
        const productsArray = data?.data?.data || [];
        setProducts(productsArray);
      } catch (err) {
        console.error(err);
        setError(true);
        setErrMsg('Failed to fetch products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-[#294952] rounded-full animate-spin"></div>
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-700 text-lg">{errMsg}</p>
      </div>
    );

  return (
    <>
      <ProductGrid />
      <ProductShowcase products={products} />
      <Footer />
    </>
  );
}
