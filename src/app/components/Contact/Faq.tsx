"use client";

import React from "react";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  return (
    <section className="max-w-5xl relative mx-auto py-14 px-8 md:px-24 flex flex-col md:flex-row justify-center  items-start">
      <div className="w-full md:w-1/3 mb-8 md:mb-20">
        <h2 className="text-4xl font-medium text-gray-800 leading-tight">
          Commonly <br /> asked <br /> Question
        </h2>
      </div>

      <div className="w-full md:w-2/3 space-y-6 mb-10">
        <div>
          <div className="flex items-start gap-2">
            <span className="text-black text-lg  font-medium leading-relaxed">
              • Can I buy products from sellers outside my state?
            </span>
            <ChevronDown className="w-4 h-4 text-gray-600 mt-[2px]" />
          </div>
          <p className="text-gray-600 text-sm mt-1 leading-relaxed">
            Yes. Marketplace connects you with verified sellers across Nigeria.
            You can buy from any seller, and our system helps arrange nationwide
            delivery through trusted logistics partners.
          </p>
        </div>

        <div>
          <div className="flex items-start gap-2">
            <span className="text-black text-lg  font-medium leading-relaxed">
              • How can I verify if a product is authentic?
            </span>
            <ChevronDown className="w-4 h-4 text-gray-600 mt-[2px]" />
          </div>
          <p className="text-gray-600 text-sm mt-1 leading-relaxed">
            Every verified seller is required to input their product’s NAFDAC
            registration number. When you view the product, Marketplace
            automatically connects to NAFDAC’s database to confirm authenticity,
            production date, and expiry information.
          </p>
        </div>

        <div>
          <div className="flex items-start gap-2">
            <span className="text-black text-lg font-medium leading-relaxed">
              • How does the 3D product viewing feature work?
            </span>
            <ChevronDown className="w-4 h-4 text-gray-600 mt-[2px]" />
          </div>
          <p className="text-gray-600 text-sm mt-1 leading-relaxed">
            Each product on Marketplace can be scanned and uploaded in
            true-to-life 3D. Buyers can rotate, zoom, and inspect items from
            every angle, giving them a realistic sense of what they’re buying.
            This reduces uncertainty and improves trust between buyers and
            sellers.
          </p>
        </div>

        <div className="flex flex-col md:flex-row mt-12 justify-start w-full md:absolute md:bottom-0 left-0 gap-12 pt-8 text-sm text-gray-700">
          <div>
            <p className="font-medium">Contact</p>
            <p className="text-gray-500">+2348105236938</p>
          </div>
          <div>
            <p className="font-medium">Email</p>
            <p className="text-gray-500">udezechristian23@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
