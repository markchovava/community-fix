import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import TextLeft from './components/TextLeft'
import TextRight from './components/TextRight'
import TextLeftTop from './components/TextLeftTop'


function AboutPage() {
  return (
    <div>
      {/* NAVIGATION */}
      <Navbar />
      {/*  */}
      <TextLeftTop />
      <TextRight />
      <TextLeft />
      {/* FOOTER */}
      <Footer />
    </div>
  )
}

export default AboutPage