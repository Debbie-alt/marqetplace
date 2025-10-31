import React from "react"
import Image from "next/image"

export default function BlockchainIntegration() {
  return (
    <section className="mt-20 px-6 sm:px-24 text-center">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-10">
        Blockchain Integration with Hedera
      </h2>

      <div className="flex flex-col items-center gap-6">
        <Image
          src="/hedera.jpg" 
          alt="Hedera Integration"
          width={700}
          height={250}
          className="rounded-md object-contain"
        />
        <p className="text-gray-900 text-sm max-w-4xl leading-relaxed text-left font-medium">
          A key part of our tech stack at Marqetplace is our trust infrastructure with
          Hedera: we integrate Hedera’s public ledger and services to provide immutable
          records, token transparency, and low-cost operations across the platform. With
          this, the Marqetplace brand delivers on its promise of ‘no surprises’—what you
          see is what you get, backed by technology.
        </p>
      </div>
    </section>
  )
}
