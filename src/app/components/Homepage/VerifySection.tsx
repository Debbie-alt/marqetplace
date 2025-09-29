"use client";

// import { Button } from "@/components/ui/button";

export default function VerifiedSection() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between">
      <div className="max-w-xl text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-medium tracking-wide text-gray-900 mb-6">
          BUY VERIFIED. <br /> SHOP CONFIDENTLY.
        </h2>
        <p className="text-gray-600 mb-8">
          Tap into our NAFDAC-linked verification and know if your product is the real deal every time.
        </p>
        <button className="bg-[#E8912E] hover:bg-[#E8912E]/80 text-white font-semibold px-6 py-3  shadow-md transition">
          VERIFY A PRODUCT
        </button>
      </div>

      <div className="mt-12 md:mt-0 md:ml-12 w-full max-w-md ">
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden py-8">
          <div className="px-4 font-medium text-3xl mb-4">
            Product Verification Details
          </div>
          <div className=" text-sm text-gray-700">
            <p className="mb-2 bg-[#7AD5EC] text-lg  font-semibold px-4 py-1">
              <span className="">Product Name:</span> Milo 3 in 1 Milky and Creamy
            </p>
            <ul className="space-y-4  w-full mt-8">
              <li className="bg-[#E1E2E1] py-2"><span className="font-semibold  px-4 py-1 ">NAFDAC NO:</span> </li>
              <li className="bg-[#E1E2E1] py-2"><span className="font-semibold  px-4 py-1 ">Product Category:</span> </li>
              <li className="bg-[#E1E2E1] py-2"><span className="font-semibold  px-4 py-1">Product Source:</span> </li>
              <li className="bg-[#E1E2E1] py-2"><span className="font-semibold  px-4 py-1 ">Manufacturer:</span> </li>
              <li className="bg-[#E1E2E1] py-2"><span className="font-semibold  px-4 py-1 ">Date Approved:</span> </li>
              <li className="bg-[#E1E2E1] py-2"><span className="font-semibold  px-4 py-1">Expiry Date:</span> </li>
              <li className="bg-[#E1E2E1] py-2"><span className="font-semibold  px-4 py-1 ">Company Name:</span> </li>
              <li className="bg-[#E1E2E1] py-2" ><span className="font-semibold  px-4 py-1 ">Verification No:</span> </li>
              <li className="bg-[#E1E2E1] py-2"><span className="font-semibold  px-4 py-1 ">Active Ingredient:</span> </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
