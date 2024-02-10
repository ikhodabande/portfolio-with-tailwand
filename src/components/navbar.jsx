import React from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import logo from '../assests/logo1.png';

const navbar = () => {
  return (
    
    <div className='w-full h-[80px] fixed flex justify-between items-center px-5 bg-[#0a192f] text-gray-300'>
      <img src={logo} alt="" style={{width:'50px'}}/>

      <div>
      <ul className='flex'>
        <li>Home</li>
        <li>About</li>
        <li>Skill</li>
        <li>Works</li>
        <li>Exprience</li>
      </ul>
    </div>

    {/* // Hambergur */}
    <div className='hidden'>
      <FaBars/>
    </div>

    {/* //mobile view */}
    <ul className='hidden'>
        <li>Home</li>
        <li>About</li>
        <li>Skill</li>
        <li>Works</li>
        <li>Exprience</li>
    </ul>
    
    </div>
  )
}

export default navbar