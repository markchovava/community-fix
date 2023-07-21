import React from 'react'
import RoadData from '../../../data/RoadData.json'
import RoadCol from './RoadCol'
import { AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai'


function RoadGrid() {
    const roads = RoadData

  return (
    <>
        <section className='w-full h-auto pb-[2rem] bg-slate-50'>
            <div className='container mx-auto max-w-screen-xl p-4 lg:p-0'>
                <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-10'>
                    {
                        roads.map((road, key) => (
                            <RoadCol key={key} img={road.img} road={road.road} district={road.district} 
                            city={road.city} id={road.id} />
                        ))
                    }
                </div>
                {/*  */}
                <div className='flex items-center justify-center'>
                  <div className='pt-[3rem] py-[2rem] flex justify-center gap-3'>
                    <div className='w-[8rem] cursor-pointer text-green-800 hover:text-green-900 flex border border-green-800 hover:border-green-900 items-center justify-center gap-2 py-2 px-3'>
                      <AiOutlineArrowLeft /> Previous
                    </div>
                    <div className='w-[8rem] cursor-pointer text-green-800 hover:text-green-900 flex border border-green-800 hover:border-green-900 items-center justify-center gap-2 py-2 px-3'>
                      Next <AiOutlineArrowRight />
                    </div>
                  </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default RoadGrid