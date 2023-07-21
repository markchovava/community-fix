import React from 'react'
import { BsFacebook, BsWhatsapp, BsTwitter, BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer className='w-full h-auto bg-green-900 pb-[2rem]'>
        <section className='container mx-auto max-w-screen-xl p-5'>
          <div className='lg:flex block justify-between gap-5 py-[2rem] text-white'>
            <div className='lg:my-0 my-4 p-4 lg:basis-[31%] md:basis-[50%] basis-[100%]'>
              <div>
                <h2 className='text-white font-bold text-4xl mb-4'>
                  Community Fix
                </h2></div>
              <h2 className='text-white text-3xl mb-4 font-medium'>Social Links</h2>
              <div className='grid grid-cols-4 gap-1'>
                <Link to=''>
                  <BsFacebook className='mb-2 text-2xl text-slate-200 cursor-pointer 
                    hover:text-slate-50 transition duration-200 hover:scale-110'/>
                </Link>
                <Link to=''>
                  <BsWhatsapp className='mb-2 text-2xl text-slate-200 cursor-pointer 
                    hover:text-slate-50 transition duration-200 hover:scale-110' />
                </Link>
                <Link to=''>
                  <BsTwitter className='mb-2 text-2xl text-slate-200 cursor-pointer 
                    hover:text-slate-50 transition duration-200 hover:scale-110' />
                </Link>
                <Link to=''>
                  <BsLinkedin 
                    className='mb-2 text-2xl text-slate-200 cursor-pointer 
                    hover:text-slate-50 transition duration-200 hover:scale-110' />
                </Link>     
              </div>
            </div>
            <div className='lg:my-0 my-4 p-4 lg:basis-[31%] md:basis-[50%] basis-[100%]'>
              <h2 className='text-3xl mb-4 font-medium'>Links</h2>
              <ul className='ml-4'>
                <li className='transition duration-200 ease-linear hover:translate-x-0.5 '> 
                  <Link to='' 
                    className='hover:font-medium'>
                    Cities
                  </Link>
                </li>
                <li className='transition duration-200 ease-linear hover:translate-x-0.5'>
                  <Link to='' 
                    className='hover:font-medium'>
                    Districts
                  </Link>
                </li>
                <li className='transition duration-200 ease-linear hover:translate-x-0.5'>
                  <Link to='' 
                  className='hover:font-medium'>
                    Roads
                  </Link>
                </li>
              </ul>
            </div>
            <div className='lg:my-0 my-4 p-4 lg:basis-[31%] md:basis-[50%] basis-[100%]'>
              <h2 className='text-3xl mb-4 font-medium'>Contact Details</h2>
              <ul className='ml-4'>
                <li>Address: <span>12, 4TH Ave, CBD, Harare</span></li>
                <li>Phone: <span>+263 (0) 782 210021</span></li>
                <li>Email: <span>abc@email.com</span></li>
              </ul>
            </div>
          </div>
          <div className='text-white'>
              <p className='text-center'>Community Fix Copyright &copy; 2023 | Developed by Freelance Designers</p>
          </div>
        </section>
        
      </footer>
    </>
  )
}

export default Footer