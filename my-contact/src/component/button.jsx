import React from 'react'
import Navigation from './Navigation'

const button = () => {
  return (
    <div>
        <Navigation/>
  <div className="flex flex-col items-center justify-center mt-12 gap-4 sm:flex-row sm:gap-8 md:gap-12 lg:gap-16 xl:gap-24">
    <div>
      <p className='font-bold text-2xl'>sylvie masengesho</p>
      <p>Email: sylviemasengesho5gmail.com</p>
      <p>Phone: 0793896810</p>
    </div>
    <div className='flex gap-4 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-24'>
      <div className="bg-[#242424] text-white rounded-lg hover:bg-[#7D7B7B]">
        <button className='p-4'><a href='/Update'>Update</a></button>
      </div>
      <div className="bg-[#EF4343] text-white rounded-lg hover:bg-[#7D7B7B]">
        <button className='p-4'><a href='/Delete'>Delete</a></button>
      </div>
    </div>
  </div>
  </div>
  )
}

export default button 