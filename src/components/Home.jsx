import React from 'react';
import { HiArrowRight } from 'react-icons/hi';
import profileImg from '../assests/profileImg.png'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f] '>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full  '>
        <h1 className='text-4xl sm:7xl font-bold text-[#ccd6f6] my-1 z-10'>AmirMohammad Khodabande</h1>
        <h2 className='text-4xl sm:7xl font-bold text-[#8892b0] z-10'>I'm a Front-end developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px] z-10'>As a hard-working newbie in the field of web development 💻, I possess a strong foundation in HTML, CSS, and JavaScript , Now I'm on track to develop my skills</p>
      <div>
      <button className='text-white group border-2 px-4 py-2 flex justify-center items-center hover:bg-pink-600 hover:border-pink-600'>View Work
          <span className='group-hover:translate-X-90' >
            <HiArrowRight className='ml-3'/>
          </span>
        </button>
      </div>
      </div>
      <div className=''>
        <a href=""><img className='absolute top-0 sm:right-40 h-screen z-0 ' src={profileImg} alt="" /></a>
      </div>

    </div>
  )
}

export default Home;