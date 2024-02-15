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
    <div name='skills' className='bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Expreience</p>
          <p>// These are the technologies I've worked with</p>
        </div>
        <div>
          <div>
            <img className='w-20 mx-auto' src="HTML" alt="" />
            <p>HTML</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Skills