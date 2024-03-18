import React from 'react';
import { HiArrowRight } from 'react-icons/hi';
import profileImg from '../assests/profileImg.png'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#776B5D] '>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full  pt-80 md:pt-0 '>
        <h1 className='text-4xl sm:7xl font-bold md:text-[#EBE3D5] my-1 z-10'>AmirMohammad Khodabande</h1>
        <h2 className='text-4xl sm:7xl font-bold md:text-[#EBE3D5] z-10'>I'm a Front-end developer</h2>
        <p className='md:text-[#F3EEEA] text-sm py-4 max-w-[700px] z-10'>As a hard-working newbie in the field of web development 💻,<br /> I possess a strong foundation in HTML, CSS, and JavaScript , Now I'm on track to develop my skills</p>
      <div className='z-10'>
      <button className='md:text-white group border-black md:border-white border-2 px-4 py-2 flex justify-center items-center hover:bg-[#cc5c00] hover:border-[#cc5c00]  '>View Work
          <span className='group-hover:translate-X-90 ' >
            <HiArrowRight className='ml-3'/>
          </span>
        </button>
      </div>
      </div>
      <div className=''>
        <a href=""><img className='absolute top-28 sm:top-0 sm:right-40  sm:h-screen z-0 ' src={profileImg} alt="" /></a>
      </div>

    </div>
  )
}

export default Home;