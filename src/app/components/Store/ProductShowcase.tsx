"use client";

import React, { useState } from "react";
import { HeartIcon, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";


type Product = {
  _id: string;
  name: string;
  price: number;
  thumbnail: string;
  file?: File; 
};

type ProductShowcaseProps = {
  products: Product[];
  tabs: string[];
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};

type ModelViewerProps = {
  url: string;
};

function ModelViewer({ url }: ModelViewerProps) {
  const gltf = useGLTF(url);

  if (!gltf || !("scene" in gltf)) return null;

  return <primitive object={gltf.scene as THREE.Object3D} />;
}


const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  products,
}) => {
  const [modelUrl, setModelUrl] = useState<string | null>(null);
  const [loadingItems, setLoadingItems] = useState<Record<string, boolean>>({});
  const [heartedItems, setHeartedItems] = useState<Record<string, boolean>>({});

  const toggleHeart = (productId: string) => {
    setHeartedItems((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  const handleGenerate3D = async (product: Product & { _id?: string }) => {
    const productId = product._id || `product-unknown`;
    setLoadingItems((prev) => ({ ...prev, [productId]: true }));

    try {
      const apiKey = process.env.NEXT_PUBLIC_MESHY_API_KEY;
      if (!apiKey) {
        alert("Meshy API key is missing. Please set NEXT_PUBLIC_MESHY_API_KEY in your environment.");
        throw new Error("Meshy API key missing");
      }
      // Use direct image URL instead of base64
      const imageUrl = product.thumbnail;
      console.log('Sending to Meshy:', { productId, imageUrl, apiKeyPresent: !!apiKey });

      const res = await fetch(
        "https://api.meshy.ai/openapi/v1/image-to-3d",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            image_url: imageUrl, 
            enable_pbr: true,
            should_remesh: true,
            should_texture: true,
          }),
        }
      );

      if (!res.ok) throw new Error("Meshy task failed: " + res.status);

      const { result: taskId } = await res.json();

      let glbUrl: string | null = null;

      while (!glbUrl) {
        await new Promise((r) => setTimeout(r, 3000));

        const statusRes = await fetch(
          `https://api.meshy.ai/openapi/v1/image-to-3d/${taskId}`,
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
            },
          }
        );

        const status = await statusRes.json();

        if (status.status === "SUCCEEDED") {
          glbUrl = status.output?.model?.glb;
        }

        if (status.status === "FAILED") {
          throw new Error("Meshy generation failed");
        }
      }

      setModelUrl(glbUrl);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingItems((prev) => ({ ...prev, [productId]: false }));
    }
  };
  
   
  return (
   
  <section className="flex flex-col justify-center">
      <div className="px-6 md:px-14 py-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.length === 0 ? (
          <p className="col-span-full mx-auto text-center text-gray-500">
            No products available.
          </p>
        ) : (
          products.map((product, idx) => {
            const key = product._id || product._id || `product-${idx}`;
            const productId = product._id || product._id || `product-${idx}`;
            return (
              <div
                key={key}
                className="relative flex flex-col border border-gray-200 rounded-lg p-3 bg-white transition hover:scale-105 duration-300 ease-in-out hover:shadow-lg overflow-hidden"
              >
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                  <ShoppingCart size={30} className="text-gray-800" role="button" />
                </div>

                <div className="w-full h-64 flex flex-col items-center justify-center mb-3 relative">
                  <img
                    src={product.thumbnail || "/outfit.png"}
                    alt={product.name}
                    className="object-cover w-full h-full"
                  />
                  <HeartIcon
                    size={18}
                    role="button"
                    onClick={e => {
                      e.stopPropagation();
                      toggleHeart(productId);
                    }}
                    className="text-amber-500 absolute right-2 -bottom-10 cursor-pointer"
                    stroke="currentColor"
                    fill={heartedItems[productId] ? "currentColor" : "none"}
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <p className="text-gray-900 font-semibold">${product.price}</p>
                  <p className="text-sm text-gray-700 truncate">{product.name}</p>
                  <p className="text-xs text-gray-500">Reviews: ⭐⭐⭐⭐☆</p>
                </div>

                <div className="flex flex-col md:flex-row items-end justify-center w-full gap-3 mt-3">
                  <button className="bg-[#294952] cursor-pointer text-white py-2 w-full md:w-3/4 px-6 rounded-md text-xs sm:text-sm font-medium hover:bg-[#1f373e]">
                    Add to Cart
                  </button>

                  <div
                    className="cursor-pointer relative"
                    onClick={e => {
                      e.stopPropagation();
                      handleGenerate3D(product);
                    }}
                  >
                    <Image src="/3d.png" alt="3d icon" width={35} height={35} />
                    {loadingItems[productId] && (
                      <span className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center text-white text-xs rounded">
                       ...
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>


      {modelUrl && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="w-3/4 h-3/4 bg-white rounded-lg relative">
            <button
              className="absolute top-2 right-2 text-black font-bold z-50"
              onClick={() => setModelUrl(null)}
            >
              Close
            </button>
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[5, 5, 5]} />
              <ModelViewer url={modelUrl} />
              <OrbitControls />
            </Canvas>
          </div>
        </div>
      )}
    </section>


  );
};

export default ProductShowcase;
