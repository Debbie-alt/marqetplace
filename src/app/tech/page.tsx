import React from 'react'
import Navbar from '../components/Tech/Navbar'
import TechIntro from '../components/Tech/Hero'
import VerificationSystem from '../components/Tech/Verification'
import ProductScanning from '../components/Tech/ProductScan'
import BlockchainIntegration from '../components/Tech/Hedera'
import Footer from '../components/Tech/Footer'
const TechPage = () => {
  return (
    <>
      <TechIntro/>
      <VerificationSystem/>
      <ProductScanning/>
      <BlockchainIntegration/>
       <Footer/>
    </>
  )
}

export default TechPage