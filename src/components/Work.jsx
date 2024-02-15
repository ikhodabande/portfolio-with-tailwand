import React from 'react'

const Work = () => {
  return (
    <div name='work' className='w-full text-gray-300 md:h-screen bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto flex flex-col judtify-center w-full h-full'>
      <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b- 4 text-gray-300 border-pink-600'>Works</p>
        <p className='py-6'>//Check out Some Of My Recent Works</p>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'> 
       
          <div>
            <div>
              <span>

              </span>
              <div>
                <a href="#"><button></button></a>
                <a href="#"><button></button></a>
              </div>
            </div>
          </div>
        </div>

      </div>
      </div>
    </div>
  )
}

export default Work