import React from "react"

export default function VerificationSystem() {
  return (
    <section className="mt-26 px-6 sm:px-24">
      <h2 className="text-center text-3xl font-semibold text-gray-800 mb-10">
        Verification System
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10">
        <div className="max-w-2xl text-gray-700">
          <h3 className="text-2xl font-medium mb-3">
            Counterfeit-free shopping starts here.
          </h3>
          <p className="text-sm leading-relaxed mb-5">
            Marqetplace directly integrates with NAFDAC's national product database,
            enabling real-time product verification. Each verified listing includes a
            traceable NAFDAC number, giving shoppers instant access to:
          </p>

          <ul className="list-disc list-inside text-sm space-y-1 mb-5">
            <li>Authenticity confirmation</li>
            <li>Manufacturer information</li>
            <li>Production and expiry data</li>
            <li>Official regulatory approval</li>
          </ul>

          <p className="text-sm leading-relaxed mb-5">
            This integration ensures that every product on MarqetPlace is certified and trusted.
          </p>

          <button className="bg-[#E8912E] hover:bg-[#E8912E]/80 text-white text-sm px-5 py-3 rounded-md font-medium">
            VERIFY A PRODUCT
          </button>
        </div>

       <div className="mt-12 md:mt-0 md:ml-12 w-full max-w-md ">
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden py-8">
          <div className="px-4 font-medium text-xl mb-4">
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
      </div>
    </section>
  )
}
