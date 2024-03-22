import React, {useState ,useEffect} from 'react';
import {FaBars, FaTimes, FaLinkedin, FaGithub} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import logo from '../assests/logo1.png';
import { Link } from 'react-scroll';



const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);


useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  



  const handleNav = () => setNav(!nav)

  return (
    
    <div name='navbar' className={`w-full h-[80px]   fixed flex justify-around items-center  z-20 text-white ${scrollNav ? 'bg-[#6f2231] shadow-lg duration-500' : 'bg-transparent duration-500'}`}>
      <img src={logo} alt="" style={{width:'50px'}}/>

      
      <ul className='hidden md:flex'>
      
        <li ><Link className='hover:border-b-2 pb-2' to="home" smooth={true} duration={500} >
      Home
      </Link></li>
        <li><Link className='hover:border-b-2 pb-2' to="about" smooth={true} duration={500} >
      About
      </Link></li>
        <li><Link className='hover:border-b-2 pb-2' to="skills" smooth={true} duration={500} >
      Skills
      </Link></li>
        <li><Link className='hover:border-b-2 pb-2' to="work" smooth={true} duration={500} >
      Work
      </Link></li>
        <li><Link className='hover:border-b-2 pb-2' to="contact" smooth={true} duration={500} >
      Contact
      </Link></li>
      </ul>


     

    {/* // Hambergur */}
    <div onClick={handleNav} className='md:hidden z-10'>
      {!nav ?
        <FaBars className='hover:cursor-pointer'/> 
      : 
      <FaTimes className='hover:cursor-pointer'/>}
    </div>

    {/* //mobile view */}
    <ul className={!nav ? 'hidden duration-500' : 'absolute top-0 left-0 w-full h-screen bg-[#6f2231] flex flex-col justify-center items-center duration-700'} >
        <li className='py-6 text-4xl'><Link className='hover:border-b-2 pb-2 duration-75 ease-in-out' onClick={handleNav} to="home" smooth={true} duration={500} >
      Home
      </Link></li>
        <li className='py-6 text-4xl'><Link className='hover:border-b-2 pb-2 duration-75 ease-in-out' onClick={handleNav} to="about" smooth={true} duration={500} >
      About
      </Link></li>
        <li className='py-6 text-4xl'><Link className='hover:border-b-2 pb-2 duration-75 ease-in-out' onClick={handleNav} to="skills" smooth={true} duration={500} >
      Skills
      </Link></li>
        <li className='py-6 text-4xl'><Link className='hover:border-b-2 pb-2 duration-75 ease-in-out' onClick={handleNav} to="work" smooth={true} duration={500} >
      Work
      </Link></li>
        <li className='py-6 text-4xl'><Link className='hover:border-b-2 pb-2 duration-75 ease-in-out' onClick={handleNav} to="contact" smooth={true} duration={500} >
      Contact
      </Link></li>
    </ul>

    {/* social icons */}
    <div className='hidden lg:flex flex-col fixed top-[35%] left-0 '>
      <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 ease-out bg-[#0077b5] '> 
          <a className='flex  justify-between items-center w-full text-gray-300  ' 
          href="https://www.linkedin.com/in/amikhodabande/">
          Linkedin 
          <FaLinkedin size={30}/>
          </a>
        </li>  
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 ease-out bg-[#333333] '> 
          <a className='flex  justify-between items-center w-full text-gray-300  ' 
          href="https://github.com/ikhodabande">
          Github
          <FaGithub size={30}/>
          </a>
        </li>  
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 ease-out bg-[#410093] '> 
          <a className='flex  justify-between items-center w-full text-gray-300  ' 
          href="mailto:amimhmdkh@gmail.com">
          Email 
          <HiOutlineMail size={30}/>
          </a>
        </li>  
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 ease-out bg-[#565f69] '> 
          <a className='flex  justify-between items-center w-full text-gray-300  ' 
          href="/">
          Resume 
          <BsFillPersonLinesFill size={30}/>
          </a>
        </li>  
      </ul>

    </div>
    
    </div>
  )
}

export default Navbar