"use client";

// import { Button } from "@/components/ui/button";

export default function VerifiedSection() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between">
      {/* Left Text */}
      <div className="max-w-xl text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          BUY VERIFIED. <br /> SHOP CONFIDENTLY.
        </h2>
        <p className="text-gray-600 mb-6">
          Tap into our NAFDAC-linked verification and know if your product is the real deal every time.
        </p>
        <button className="bg-[#E8912E] hover:bg-[#E8912E]/80 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition">
          VERIFY A PRODUCT
        </button>
      </div>

      {/* Right Card */}
      <div className="mt-12 md:mt-0 md:ml-12 w-full max-w-md">
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
          <div className="bg-cyan-600 text-white font-semibold px-4 py-2">
            Product Verification Details
          </div>
          <div className="p-4 text-sm text-gray-700">
            <p className="mb-2">
              <span className="font-semibold">Product Name:</span> Milo 3 in 1 Milky and Creamy
            </p>
            <ul className="space-y-1">
              <li><span className="font-semibold">NAFDAC No:</span> 527383</li>
              <li><span className="font-semibold">Product Category:</span> –</li>
              <li><span className="font-semibold">Product Source:</span> –</li>
              <li><span className="font-semibold">Manufacturer:</span> –</li>
              <li><span className="font-semibold">Date Approved:</span> –</li>
              <li><span className="font-semibold">Expiry Date:</span> –</li>
              <li><span className="font-semibold">Company Name:</span> –</li>
              <li><span className="font-semibold">Verification No:</span> –</li>
              <li><span className="font-semibold">Active Ingredient:</span> –</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
