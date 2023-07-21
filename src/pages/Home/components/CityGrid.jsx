import React from 'react'
import CityCol from './CityCol'
import CityData from '../../../data/CityData.json'

function CityGrid() {
  const cities = CityData;


  return (
    <>
      <section className='w-full h-auto pb-[4rem]'>
        <div className='container mx-auto max-w-screen-xl p-4 lg:p-0'>
          <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-10'>
            {
              cities.map((city, key) => (
                <CityCol key={key} img={city.img} city={city.city} id={city.id} />
              ))
            }
          </div>
        </div>
        
      </section>
    </>
  )
}

export default CityGrid