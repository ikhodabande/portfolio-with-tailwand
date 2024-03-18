import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#6f2232] text-gray-300 mb-20 sm:mb-0'>
      <div className='flex flex-col justify-center items-center w-full h-full '>
        <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 '>
          <p className='text-4xl font-bold  inline border-b-4 border-[#1a1a1a]'>
            About
          </p>
          </div>
          <div>
          </div>
        </div>

        <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi, I'm Client, nice to met you, Please take a look around.</p>
          </div>
          <div>
            <p>Hey there! , As a passionate front-end developer with a knack for crafting beautiful and functional web experiences. I've always been fascinated by technology and how it can enhance our daily lives, which led me to pursue a career in web development.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About