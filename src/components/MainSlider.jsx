import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'



function MainSlider() {
  return (
    <section className='w-full h-auto bg-slate-200'>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        navigation
        effect
        speed={1000}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        className='swiper__main'
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div style={{backgroundImage: `url(./assets/images/slides/01.png)`}} className='custom__overlayBlack w-full h-[80vh] bg-cover'>
            <div className='container relative h-full mx-auto max-w-screen-xl'>
              <section className='absolute z-50 flex flex-col justify-center items-center text-center text-white w-full h-full'>
                <div className='w-[65%] text-center'>
                  <h1 className='animate-pulse shadow mb-[1rem] text-4xl lg:text-[4rem] font-semibold leading-[3.7rem]'>
                    What do you like to change in your
                    community?
                  </h1>
                  <h1 className='animate-pulse shadow text-5xl mb-[1.5rem] font-semibold italic'>
                      <span className='text-yellow-300'>Bad roads,</span> 
                      <span className='text-[#f00]'>Street lights,</span> 
                      <span className=''>Bushy areas?</span>
                    </h1>
                    <button className='border text-2xl text-center shadow py-3 px-5 rounded-lg transition bg-gray-100 hover:bg-white text-green-900 hover:text-black'>
                      CLICK FOR MORE
                    </button>
                </div>
                
              </section>   
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{backgroundImage: `url(./assets/images/slides/02.png)`}} 
            className='custom__overlayBlack w-full h-[80vh] bg-cover'>
            <div className='container relative h-full mx-auto max-w-screen-xl'>
                <section className='absolute z-50 flex flex-col justify-center items-center text-center text-white w-full h-full'>
                  <div className='w-[65%] text-center'>
                    <h1 className='animate-pulse shadow mb-[1rem] text-4xl lg:text-[4rem] font-semibold leading-[3.7rem]'>
                      What do you like to change in your
                      community?
                    </h1>
                    <h1 className='animate-pulseshadow text-5xl mb-[1.5rem] font-semibold italic'>
                        <span className='text-yellow-300'>Bad roads,</span> 
                        <span className='text-[#f00]'>Street lights,</span> 
                        <span className=''>Bushy areas?</span>
                    </h1>
                    <button className='border text-2xl text-center shadow py-3 px-5 rounded-lg transition bg-gray-100 hover:bg-white text-green-900 hover:text-black'>
                      CLICK FOR MORE
                    </button>
                  </div>
                  
                </section>   
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{backgroundImage: `url(./assets/images/slides/03.png)`}} 
            className=' custom__overlayBlack w-full h-[80vh] bg-cover'>
            <div className='container relative h-full mx-auto max-w-screen-xl'>
                <section className='absolute z-50 flex flex-col justify-center items-center text-center text-white w-full h-full'>
                  <div className='w-[65%] text-center'>
                    <h1 className='animate-pulse shadow mb-[1rem] text-4xl lg:text-[4rem] font-semibold leading-[3.7rem]'>
                      What do you like to change in your
                      community?
                    </h1>
                    <h1 className='animate-pulse shadow text-5xl mb-[1.5rem] font-semibold italic'>
                        <span className='text-yellow-300'>Bad roads,</span> 
                        <span className='text-[#f00]'>Street lights,</span> 
                        <span className=''>Bushy areas?</span>
                    </h1>
                    <button className='border text-2xl  text-center shadow py-3 px-5 rounded-lg transition bg-gray-100 hover:bg-white text-green-900 hover:text-black'>
                      CLICK FOR MORE
                    </button>
                  </div>
                  
                </section>   
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default MainSlider