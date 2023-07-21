import React from 'react'
import { Link } from 'react-router-dom'

function DistrictCol({district, city, id}) {
  return (
    <>
        <section className='shadow-lg bg-white shadow-1 p-5 rounded-lg 
            w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition'>
            <div className='mt-3 mb-2'>
                <div className='inline-block'>
                    <span className='text-gray-700'>{city}</span>
                </div>
              <section className='mt-4 flex items-center justify-between'>
                <h2 className='text-xl font-semibold mb-3' id={id}>
                  {district}
                </h2>
                <Link to={`/district/${id}`} className='py-2 px-4 bg-green-900 rounded-xl hover:bg-green-950 
                  transition duration-500 ease-in-out hover:-translate-y-1 text-white'>
                  More Info
                </Link>
              </section>
            </div>
        </section>
    </>
  )
}

export default DistrictCol