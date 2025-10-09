import React from 'react'
import Navbar from '../components/Homepage/Navbar'
import TabNav from '../components/Store/TabNav'
import Footer from '../components/Homepage/Footer'
import FeaturedCategories from '../components/Homepage/FeaturesSection'
import ProductDescription from '../components/3dview/ProductDescription'
import ThreeDImages from '../components/3dview/3dImages'

const ThreeDView = () => {
  return (  
    <>
    <section className='px-16 pt-6'>     
    <TabNav/> 
     <ThreeDImages/>
    </section>
    <ProductDescription/>
    <FeaturedCategories/>
     <Footer/>
    </>
  )  
}
                                  
export default ThreeDView