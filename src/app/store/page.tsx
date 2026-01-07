'use client';

import Footer from "../components/Homepage/Footer";
import ProductGrid from "../components/Store/ProductGrid";
import ProductShowcase from "../components/Store/ProductShowcase";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api";

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

const tabs: string[] = [
  "All",
  "Fashion",
  "Cloth",
  "Electronics",
  "Cosmetics",
  "Drugs",
  "Devices",
];


export default function StorePage() {
  const [activeTab, setActiveTab] = useState("All");

  const {
    data: products = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 5, 
    retry: 2,
  });


  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-[#294952] rounded-full animate-spin" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-700 text-lg">
          {(error as Error).message || "Something went wrong"}
        </p>
      </div>
    );
  }

  return (
    <>
      <ProductGrid
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <ProductShowcase
        products={products}
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <Footer />
    </>
  );
}
