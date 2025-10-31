import React from "react"
import Image from "next/image"

export default function ProductScanning() {
  return (
    <section className="mt-20 px-6 sm:px-24">
      <h2 className="text-center text-xl sm:text-2xl font-semibold text-gray-800 mb-10">
        3D Product Scanning & Visualization
      </h2>

      <div className="flex flex-col md:flex-row items-center  max-w-5xl mx-auto justify-center gap-10 bg-[#8FD7ED33] rounded-md p-6 sm:p-10">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/scan.png" 
            alt="3D Product Scanning"
            width={400}
            height={300}
            className="rounded-md object-contain"
          />
        </div>

        <div className="w-full md:w-1/2 text-gray-700">
          <h3 className="text-lg font-semibold mb-3">See before you buy</h3>
          <p className="text-sm leading-relaxed">
            Our integrated 3D product scanning system lets sellers capture and upload
            true-to-life 3D models of their items using just a phone. Buyers can zoom,
            rotate, and inspect product details in detail — getting a realistic sense of
            texture, shape, and surface before making a purchase.
          </p>
          <p className="text-sm leading-relaxed mt-3">
            This technology eliminates misleading product photos, bringing physical store
            confidence into online shopping.
          </p>
        </div>
      </div>
    </section>
  )
}
