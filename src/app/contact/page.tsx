import React from 'react'
import Footer from '../components/Homepage/Footer'
import ContactHero from '../components/Contact/Hero'
import ContactForm from '../components/Contact/ContactForm'
import FAQSection from '../components/Contact/Faq'
import Navbar from '../components/Tech/Navbar'

const ContactPage = () => {
  return (
      <>
        <ContactHero/>
        <ContactForm/>
        <FAQSection/>
        
        <Footer/>
      </>
  )
}

export default ContactPage