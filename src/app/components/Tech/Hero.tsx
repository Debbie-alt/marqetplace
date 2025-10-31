"use client";
import React from "react";

export default function TechIntro() {
  return (
    <section
      className="relative w-full h-[60vh]  flex flex-col justify-center items-center text-center px-6 sm:px-24 bg-fixed bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/contact-hero.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-black">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 drop-shadow-md">
          Marqetplace Tech
        </h1>
        <p className="text-sm sm:text-lg leading-relaxed text-black">
          At MarqetPlace, technology is at the heart of how we're redefining the
          e-commerce experience. We’re building more than an online store — we’re
          engineering a new standard for trust in African e-commerce. Our
          platform combines real-time product verification with cutting-edge 3D
          visualization to create a smarter way to shop.
        </p>
      </div>

      {/* Decorative Gradient Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
    </section>
  );
}
