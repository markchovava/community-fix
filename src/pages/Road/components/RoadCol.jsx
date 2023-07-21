import React from 'react'
import { Link } from 'react-router-dom'

function RoadCol({city, district, img, road, id}) {
  return (
    <>
        <section className='bg-white shadow-lg p-5 rounded-lg w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition'>  
            <div className='mt-3 mb-2'>
              <div className='inline-block'>
                  <span className='text-green-900 font-medium rounded-lg'>{city}</span>
                  <span className='text-black font-medium mx-1 rounded-lg'>{district}</span>
              </div>
              <section className='mt-4 flex justify-between items-center'>
                <h2 className='text-xl font-semibold mb-3' id={id}>{road}</h2>
                <Link to={`/road/${id}`} className='py-2 px-4 bg-green-900 rounded-xl hover:bg-green-950 
                  transition duration-500 ease-in-out hover:-translate-y-1 text-white'>
                  More Info
                </Link>
              </section>
            </div>
        </section>
    </>
  )
}

export default RoadCol