import React from 'react';
import workImg from '../assests/project/rent.png';
import userProject from '../assests/project/user.png';
import shop from '../assests/project/shop.png';
import weather from '../assests/project/weather.png';
import netflix from '../assests/project/netflix.png';


const Work = () => {
  return (
    <div name='work' className='w-full text-gray-300 h-screen bg-[#6f2232] pt-[100px] sm:pt-0 mb-[1200px] sm:mb-0'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col judtify-center w-full h-full'>
      <div>
        <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#1a1a1a]'>Works</p>
        <p className='py-6'>Check out Some Of My Recent Works</p>
      </div>
{/* container */}
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
       
    {/* Grid Item */}
        <div style={{backgroundImage:`url(${workImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'> 
       
          {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href="#"><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold '>Demo</button></a>
                <a href="#"><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold '>Code</button></a>
              </div>
            </div>
        </div>
        <div style={{backgroundImage:`url(${userProject})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'> 
       
       {/* Hover effects */}
         <div className='opacity-0 group-hover:opacity-100'>
           <span className='text-2xl font-bold text-white tracking-wider'>
             UserManagement
           </span>
           <div className='pt-8 text-center'>
             <a href="#"><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold '>Demo</button></a>
             <a href="#"><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold '>Code</button></a>
           </div>
         </div>
     </div>
     <div style={{backgroundImage:`url(${shop})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'> 
       
       {/* Hover effects */}
         <div className='opacity-0 group-hover:opacity-100'>
           <span className='pl-7 text-2xl font-bold text-white tracking-wider'>
             Shop Cart</span>
           <div className='pt-8 text-center'>
             <a href="#"><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold '>Demo</button></a>
             <a href="#"><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold '>Code</button></a>
           </div>
         </div>
     </div>
     <div style={{backgroundImage:`url(${weather})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'> 
       
       {/* Hover effects */}
         <div className='opacity-0 group-hover:opacity-100'>
           <span className='text-2xl font-bold text-white tracking-wider'>
             Weather Applicatin
           </span>
           <div className='pt-8 text-center'>
             <a href="#"><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold '>Demo</button></a>
             <a href="#"><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold '>Code</button></a>
           </div>
         </div>
     </div>
     <div style={{backgroundImage:`url(${netflix})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'> 
       
       {/* Hover effects */}
         <div className='opacity-0 group-hover:opacity-100'>
           <span className='text-2xl font-bold text-white tracking-wider'>
             Portfolio with React
           </span>
           <div className='pt-8 text-center'>
             <a href="#"><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold '>Demo</button></a>
             <a href="#"><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold '>Code</button></a>
           </div>
         </div>
     </div>
     <div style={{backgroundImage:`url(${workImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'> 
       
       {/* Hover effects */}
         <div className='opacity-0 group-hover:opacity-100'>
           <span className='text-2xl font-bold text-white tracking-wider'>
             Netflix With React
           </span>
           <div className='pt-8 text-center'>
             <a href="#"><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold '>Demo</button></a>
             <a href="#"><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold '>Code</button></a>
           </div>
         </div>
     </div>

      </div>
      </div>
    </div>
  )
}

export default Work