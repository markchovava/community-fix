import React from 'react'

function CityCol({city}) {
  return (
    <>
        <section className='shadow-lg bg-white shadow-1 p-5 rounded-lg w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition'>
            <div className='mt-3 mb-2 flex justify-between items-center'>
              <h2 className='text-xl font-semibold mb-3 text-green-900'>
                {city}
              </h2>
              <button className='py-2 px-4 bg-green-900 rounded-xl hover:bg-green-950 
              transition duration-500 ease-in-out hover:-translate-y-1 text-white'>More Info</button>
            </div>
        </section>
    </>
  )
}

export default CityCol