import React from 'react'
import Navbar from '../../components/Navbar'
import MainSlider from '../../components/MainSlider'
import CityGrid from './components/CityGrid'
import TwoCols from './components/TwoCols'
import Footer from '../../components/Footer'



function HomePage() {


  return (
    <div>
      {/* NAVIGATION */}
      <Navbar />
      {/* SLIDER */}
      <MainSlider />
      {/* SEARCH SECTION */}
      <section className='w-full h-auto bg-green-900'>
        <div className='container mx-auto max-w-screen-xl flex text-white justify-center items-center py-[2rem]'> 
          <div className='basis-[70%]'>
            <form>
              <input type='text' 
                placeholder='Search Your Road*'
                className='border border-gray-300 focus:border-green-700 outline-none text-black rounded-xl w-full px-4 py-4 text-xl' />
            </form>
          </div>
  
        </div>
      </section>
      {/* TITLE */}
      <section className='w-full h-auto mt-[2rem] pb-[2rem]'>
        <div className='container mx-auto max-w-screen-xl lg:p-0'>
          <h1 className='text-green-900 text-4xl lg:text-[58px] font-semibold leading-none'>
            Cities
          </h1>
        </div>
      </section>
      {/* Cities */}
      <CityGrid />
      {/* DESCRIPTION */}
      <TwoCols />
      {/* FOOTER */}
      <Footer />
    </div>
  )
}

export default HomePage