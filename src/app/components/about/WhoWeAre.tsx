"use client";

import React from "react";

export default function WhoWeAre() {
  return (
    <section className="relative w-full h-[75vh] bg-cover bg-center flex flex-col items-center justify-center text-center text-white py-24"
      style={{
        backgroundImage: "url('/whoweare.jpg')", 
      }}
    >
      <div className="absolute inset-0 bg-[#81D2EA]/50 backdrop-blur-[2px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Who We Are</h2>
        <p className="text-base sm:text-lg leading-relaxed text-gray-200">
          Marqetplace is an e-commerce ecosystem designed to rebuild trust in online buying and
          selling through transparency, verified authenticity, and product realism.
        </p>
      </div>

      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 150"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#f9f9f9"
          d="M0,80 C480,160 960,0 1440,100 L1440,150 L0,150 Z"
        />
      </svg>
    </section>
  );
}
