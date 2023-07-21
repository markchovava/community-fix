import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [navClick, setNavClick] = useState(false)
  
  return (
    <>
      <section className='w-full h-auto bg-green-900'>
        <div className='container mx-auto max-w-screen-xl'>
          <div className='flex items-center justify-start flex-wrap py-4'>
            <section className='flex-1 basis-[15%]'>
              <Link to='/' className='text-yellow-100 lg:w-full text-xl font-semibold'>
                  Community Fix
              </Link>
            </section>
            <nav className="flex-1 basis-[65%] items-center justify-between flex-wrap p-2">
              <div className="block ml-auto lg:hidden">
                <button
                  onClick={() => ( setNavClick(!navClick))}
                className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                  <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
              </div>
              <div className={`w-full ${ navClick == true ? 'block' : 'hidden'} relative z-10 flex-grow lg:flex lg:items-center lg:w-auto`}>
                <div className="text-md lg:flex-grow my-1 py-1">
                  <Link to='/' className="block mt-4 lg:inline-block lg:mt-0 text-slate-200 hover:text-white mr-4">
                    Home
                  </Link>
                  <Link to='/about' className="block mt-4 lg:inline-block lg:mt-0 text-slate-200 hover:text-white mr-4">
                    About Us
                  </Link>
                  <Link to='/roads' className="block mt-4 lg:inline-block lg:mt-0 text-slate-200 hover:text-white mr-4">
                    Roads
                  </Link>
                  <Link to='/districts' className="block mt-4 lg:inline-block lg:mt-0 text-slate-200 hover:text-white mr-4">
                    Districts
                  </Link>
                  <Link to='/cities' className="block mt-4 lg:inline-block lg:mt-0 text-slate-200 hover:text-white mr-4">
                    Cities
                  </Link>
                  <Link to='/contact' className="block mt-4 lg:inline-block lg:mt-0 text-slate-200 hover:text-white mr-4">
                    Contact Us
                  </Link>
                </div>
              </div>
            </nav>
            <section className='className="flex-1 basis-[20%] flex md:justify-end justify-center'>
              <button 
                className='text-white text-md font-semibold bg-red-600 rounded-lg border border-red-600 hover:bg-white hover:text-red-600 hover:border-white border-1 px-3 py-2'>
                DONATE
              </button>
            </section>
          </div>
        </div>
      </section>
    </>
  )
}

export default Navbar