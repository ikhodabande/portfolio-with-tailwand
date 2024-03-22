import React from 'react';
import { HiArrowRight } from 'react-icons/hi';
import profileImg from '../assests/profileImg.png';
import mobileviewProfile from '../assests/f4.png';
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';
import mobileviewProfileHovered from '../assests/Grouvp 4.png';
import '../animation.css';


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#1a1a1a] '>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full  pt-[400px] sm:pt-0 '>
        <p className='text-xl sm:text-xl text-white '>Hello,</p>
        <h1 className='text-3xl sm:7xl font-bold text-white z-10 '>I`m AmirMohammad Khodabande</h1>
        <h2 className='text-3xl sm:8xl font-bold text-[#c3073f] z-10'>
        <Typewriter
  options={{
    strings: ['Front-end Developer', 'Web Developer' , 'Web Designer'],
    autoStart: true,
    loop: true,
  }}
/>
        </h2>
        <p className='md:text-[#F3EEEA] text-sm py-2 max-w-[700px] z-10 hidden sm:flex '>As a hard-working newbie in the field of web development 💻,<br /> I possess a strong foundation in HTML, CSS, and JavaScript , Now I'm on track to develop my skills</p>
      <div className='z-10 flex items-center'>
        <Link to='work' smooth={true} duration={500} >
      <button className='text-white group mt-4 border-white border-2 px-4 py-2 flex justify-center items-center rounded-full hover:bg-[#c3073f] hover:border-[#c3073f]'
       >View Work
        </button>
          </Link>
          <a href="https://www.linkedin.com/in/amikhodabande/">
          <button className='fade-in-up text-white bg-[#c3073f] border-[#c3073f] border-2 py-2 mt-4 px-4 mx-2 rounded-full heartbeat hover:bg-[#c3073f] hover:border-[#c3073f]'>
            Hire Me
          </button>
          </a>
      </div>
      </div>
      <div className=''>
        <a href=""><img className='absolute top-10 sm:top-0 sm:right-40 hidden sm:flex  sm:h-screen z-0 ' src={profileImg} alt="" /></a>
        <a href=""><img className='absolute top-24 sm:top-0 sm:right-40 flex sm:hidden  sm:h-screen  z-0 hover:opacity-0 ' src={mobileviewProfile} alt="" /></a>
        <a href=""><img className='absolute top-24 sm:top-0 sm:right-40 flex sm:hidden  sm:h-screen  z-0 opacity-0 hover:opacity-50 duration-500 ease-in-out' src={mobileviewProfileHovered} alt="" /></a>
      
        
      </div>

    </div>
  )


  
}



export default Home;