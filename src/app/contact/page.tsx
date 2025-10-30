import React from 'react'
import Navbar from '../components/Homepage/Navbar'
import Footer from '../components/Homepage/Footer'
import ContactHero from '../components/Contact/Hero'
import ContactForm from '../components/Contact/ContactForm'
import FAQSection from '../components/Contact/Faq'

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