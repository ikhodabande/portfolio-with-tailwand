import React from 'react';
import { HiArrowRight } from 'react-icons/hi';
import profileImg from '../assests/profileImg.png';
import mobileviewProfile from '../assests/f4.png';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#776B5D] '>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full  pt-[400px] sm:pt-0 '>
        <p className='text-xl sm:text-xl text-white '>Hello,</p>
        <h1 className='text-3xl sm:7xl font-bold text-white z-10'>I`m AmirMohammad Khodabande</h1>
        <h2 className='text-3xl sm:7xl font-bold text-[#EBE3D5] z-10'>Front-end developer</h2>
        <p className='md:text-[#F3EEEA] text-sm py-2 max-w-[700px] z-10 hidden sm:flex '>As a hard-working newbie in the field of web development 💻,<br /> I possess a strong foundation in HTML, CSS, and JavaScript , Now I'm on track to develop my skills</p>
      <div className='z-10'>
        <Link to='work' smooth={true} duration={500} >
      <button className='text-white group mt-4 border-white border-2 px-4 py-2 flex justify-center items-center hover:bg-[#cc5c00] hover:border-[#cc5c00]'
       >View Work
          <span className='group-hover:translateX-90 ' >
            <HiArrowRight className='ml-3'/>
          </span>
        </button>
          </Link>
      </div>
      </div>
      <div className=''>
        <a href=""><img className='absolute top-10 sm:top-0 sm:right-40 hidden sm:flex  sm:h-screen z-0 ' src={profileImg} alt="" /></a>
        <a href=""><img className='absolute top-24 sm:top-0 sm:right-40 flex sm:hidden  sm:h-screen z-0 ' src={mobileviewProfile} alt="" /></a>
      </div>

    </div>
  )


  
}



export default Home;