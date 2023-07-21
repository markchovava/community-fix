import React from 'react'


function TextLeft() {
  return (
    <>
      <section className='w-full h-auto pt-[4rem] pb-[4rem]'>
          <div className='container mx-auto max-w-screen-xl'>
              <div className='flex flex-col lg:flex-row'>
                  <div className='basis-[40%] lg:ml-5 xl:ml-[90px] flex flex-col items-center lg:items-start 
                      text-center lg:text-left justify-center flex-1 px-4'>
                      <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
                        <span className='text-green-900'>Our Districts </span> 
                      </h1>
                      <p className='mx-w-[480px] mb-8'>
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                          At sint iste nesciunt libero consequatur nobis voluptatem 
                          ut distinctio! Exercitationem, doloremque?
                      </p>
                  </div>
                  <div className='basis-[60%] flex-1 lg:flex justify-end items-end lg:p-0 lg:pl-3 p-3'>
                      <div className='rounded-tl-[80px] rounded-br-[80px] overflow-hidden'>
                          <img src={`./assets/images/slides/01.png`} className='w-full h-full object-cover lg:aspect-[5/3] md:aspect-[2/1]' />
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  )
}

export default TextLeft