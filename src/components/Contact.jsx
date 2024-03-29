import React from 'react'

function Contact() {
  return (
    <div name='contact' className='w-full  h-screen bg-[#6f2232] sm:bg-[#1a1a1a] flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/nelJZ6bK" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#1a1a1a] text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email</p>
        </div>
        <input className='p-2 bg-[#ccd6f6]' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
        <textarea className='p-2 bg-[#ccd6f6]' name="message" rows="10" placeholder='Message'></textarea>
        <button className= 'text-white border-2 hover:bg-[#6f2232] hover:border-[#6f2232] px-4 py-3 mx-auto mt-4 flex items-center'>Let's Collaborate</button>
      </form>

    </div>
  )
}

export default Contact ;