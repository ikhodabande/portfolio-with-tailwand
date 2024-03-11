import React from 'react';

import HTML from '../assests/html.png';
import CSS from '../assests/css (1).png';
import JavaScript from '../assests/javascript.png';
import ReactImg from '../assests/react.png';
import Node from '../assests/node.png';
import Firbase from '../assests/firebase (1).png';
import AWS from '../assests/aws (1).png';
import Github from '../assests/github.png';
import Tailwind from '../assests/tailwind.png';
import Mongo from '../assests/mongo.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#776B5D] text-gray-300 '>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-[#cc5c00] '>Skills</p>
          <p className='py-4'>These are the technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto my-5' src={HTML}  />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto my-5' src={CSS}  />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto my-5' src={JavaScript}  />
            <p className='my-4'>JavaScript</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto my-5' src={ReactImg}  />
            <p className='my-4'>React</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto my-5' src={Node}  />
            <p className='my-4'>Node</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto my-5' src={Firbase}  />
            <p className='my-4'>Firebase</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto my-5' src={Tailwind}  />
            <p className='my-4'>Tailwind</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto my-5' src={Github}  />
            <p className='my-4'>Github</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Skills