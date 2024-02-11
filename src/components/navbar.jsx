import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import logo from '../assests/logo1.png';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => setNav(!nav)

  return (
    
    <div className='w-full h-[80px] fixed flex justify-between items-center px-5 bg-[#0a192f] text-gray-300'>
      <img src={logo} alt="" style={{width:'50px'}}/>

      
      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>About</li>
        <li>Skill</li>
        <li>Works</li>
        <li>Exprience</li>
      </ul>


    {/* // Hambergur */}
    <div onClick={handleNav} className='md:hidden z-10'>
      {!nav ?  <FaBars/> : <FaTimes/>}
    </div>

    {/* //mobile view */}
    <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'} >
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Skill</li>
        <li className='py-6 text-4xl'>Works</li>
        <li className='py-6 text-4xl'>Exprience</li>
    </ul>

    {/* social icons */}
    <div className='hidden'>

    </div>
    
    </div>
  )
}

export default Navbar