import React from 'react'
import Navigation from './Navigation'

const Home = () => {
  return (
            <div>
                <Navigation/>
                <div class="bg-gray-100 p-8">
                    <div className="py-10 flex justify-around items-center px-56 text-black  gap-20 mt-4">
                        <div className='text-2xl' >
                        <p>Welcome To Your Contact</p>
                    </div>
                    <div  class="bg-[#242424] text-white px-4 py-4 rounded-lg hover:bg-[#D8D2D2] ml-20">
                        <button><a href="/Addcontact"> Add New Contact</a></button>
                    </div>
                </div>
                <div class="space-y-4 py-5 w-full px-56 items-center justify-center">
                    <div class="bg-white p-4 rounded-md shadow">
                        <a href='/Contact'>
                            <div class="flex justify-between items-center">
                                    <h2 class="text-xl font-semibold">sylvie masengesho</h2>
                                    <p> sylviemasengesho5@gmail.com</p>
                                    <p class="text-gray-500">0793896810</p>
                            </div>
                        </a>
                    </div>
                    <div class="bg-white p-4 rounded-md shadow">
                        <a href='/Contact'>
                            <div class="flex justify-between items-center">
                                <h2 class="text-xl font-semibold">oliva tuyishimire</h2>
                                <p>oliva@gmail.com</p>
                                <p class="text-gray-500">0791348662</p>
                            </div>
                        </a>
                    </div>
            
                </div>
            </div>
        </div>
  )
}

export default Home




























