import React from 'react'
import { useParams, Link } from 'react-router-dom';
import RoadData from '../../data/RoadData.json'
import { BsWhatsapp } from 'react-icons/bs';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


function RoadSingle() {
    const { id } = useParams()
    console.log(id)

    const road = RoadData.find((item) => {
        return item.id === parseInt(id)
      })
    console.log(road)

  return (
    <div className='bg-slate-50'>
        <Navbar />
        <section className='w-full h-auto pt-[2rem] pb-[4rem]'>
            <div className='container mx-auto max-w-screen-xl'>
                <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between pb-[2rem]'>
                    <div>
                        <h2 className='text-4xl text-green-900 font-semibold p-2'>
                            {road.road}
                        </h2>
                    </div>
                    <div className='flex gap-x-2 text-sm lg:p-0 p-3'>
                        <div className='bg-green-900 text-white px-3 rounded-full'> 
                            {road.city}
                        </div>
                        <div className='bg-blue-900 text-white px-3 rounded-full'> 
                            {road.district}
                        </div>
                    </div>
                    <div className='lg:p-0 p-3'> 
                        <Link to='' className='flex'>
                            <span className='mr-3'>Join the WhatsApp Group </span>
                            <BsWhatsapp className='text-3xl font-semibold text-gray-700 cursor-pointer 
                            hover:text-gray-900 transition duration-200 hover:scale-110' />
                        </Link>
                    </div>
                </div>

                <div className='flex flex-col items-start gap-8 lg:flex-row'>
                    <div className='lg:basis-[70%] w-full'>
                        <div className='mb-8 w-full aspect-[2/1]'>
                            <img src={`/assets/images/roads/01.png`} className='w-full h-full object-cover' alt='' />
                        </div>
                        
                        <div className='mb-5'>
                            <h2 className='text-4xl font-semibold mb-4'>Heading</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Atque dignissimos magnam veniam vero quo repudiandae 
                                asperiores voluptatem sit illo delectus?
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Atque dignissimos magnam veniam vero quo repudiandae 
                                asperiores voluptatem sit illo delectus?
                            </p>
                        </div>
                        
                        <div>
                            <h2 className='text-4xl font-semibold mb-4'>Comment</h2>
                            {/* Start of Comment Single */}
                            <section className='mb-3'>
                                <div className='flex'>
                                    <h3 className='text-md text-white font-semibold mb-2 px-3 bg-green-900 rounded'>
                                        Name, 
                                        <span className='text-sm'>(email)</span>
                                    </h3>
                                </div>
                                <div>
                                    <p className='text-md mb-4 ml-5 pl-4 border-green-900 border-l-4'>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                        Atque dignissimos magnam veniam vero quo repudiandae 
                                        asperiores voluptatem sit illo delectus?
                                    </p>
                                </div>
                            </section>
                            {/* End of Comment Single */}
                            {/* Start of Comment Single */}
                            <section className='mb-3'>
                                <div className='flex'>
                                    <h3 className='text-md text-white font-semibold mb-2 px-3 bg-green-900 rounded'>
                                        Name, 
                                        <span className='text-sm'>(email)</span>
                                    </h3>
                                </div>
                                <div>
                                    <p className='text-md mb-4 ml-5 pl-4 border-green-900 border-l-4'>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                        Atque dignissimos magnam veniam vero quo repudiandae 
                                        asperiores voluptatem sit illo delectus?
                                    </p>
                                </div>
                            </section>
                            {/* End of Comment Single */}
                        </div>
                    </div>
                    <div className='lg:basis-[30%] w-full flex-1 bg-white mb-8 border border-gray-300 rounded-lg px-6 py-8'>
                        <form action='' className='flex flex-col gap-y-4'>
                            <h2 className='text-3xl font-semibold mb-4'>Write your Review</h2>
                            <input type='text' placeholder='Name*'
                                className='border border-gray-300 focus:border-green-900 outline-none rounded w-full px-4 h-14 text-sm' />
                            <input type='text' placeholder='Email*'
                                className='border border-gray-300 focus:border-green-900 outline-none rounded w-full px-4 h-14 text-sm' />
                            <textarea name='' placeholder='Message*'
                                defaultValue='We need our roads repaired...'
                                className='border border-gray-300 focus:border-green-900 outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-400'></textarea>
                            <div className='flex gap-x-2'>
                                <button 
                                className='bg-green-900 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition'>
                                Send message
                                </button>
                                <button 
                                className='border border-green-900 text-green-900 hover:border-violet-500 hover:text-green-500 rounded p-4 text-sm w-full transition'>
                                Join the WhatsApp Group
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </section>
        <Footer />
    </div>
  )
}

export default RoadSingle