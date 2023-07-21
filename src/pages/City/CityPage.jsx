import React from 'react'
import Footer from '../../components/Footer'
import CityGrid from './components/CityGrid'
import Navbar from '../../components/Navbar'
import TextLeft from './components/TextLeft'


function CityPage() {


  return (
    <div>
       {/* NAVIGATION */}
      <Navbar />
      <TextLeft />
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
      <section className='w-full h-auto py-[2.5rem]'>
        <div className='container mx-auto max-w-screen-xl lg:p-0'>
          <h1 className='text-green-900 text-4xl lg:text-[58px] font-semibold leading-none'>
            Cities
          </h1>
        </div>
      </section>
      {/* ROAD GRID */}
      <CityGrid />
      {/* FOOTER */}
      <Footer />
    </div>
  )


}

export default CityPage