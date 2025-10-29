import React from 'react'
import Navbar from '../components/Homepage/Navbar'
import Footer from '../components/Homepage/Footer'
import ContactHero from '../components/Contact/Hero'
import ContactForm from '../components/Contact/ContactForm'

const ContactPage = () => {
  return (
      <>
        <ContactHero/>
        <ContactForm/>
        <Footer/>
      </>
  )
}

export default ContactPage