import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ContactCols from './components/ContactCols'
import TextLeft from './components/Text.Left'



function ContactPage() {

  return (
    <div>
      <Navbar />
      {/*  */}
      {/* <section className={`bg__gradientGreen w-full h-auto py-[3.5rem]`}>
          <div className='container max-w-screen-xl mx-auto'>
              <section className='flex items-center justify-center'>
                  <h1 className=' text-[4rem] font-bold'>Contact Us</h1>
              </section>
          </div>
      </section> */}
      <TextLeft />
      <ContactCols />
      <Footer />
    </div>
  )
}

export default ContactPage