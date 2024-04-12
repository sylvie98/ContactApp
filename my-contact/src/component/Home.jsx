import React from 'react';
import Navigation from './Navigation';

const Home = () => {
  return (
    <div>
      <Navigation />
      <div className="bg-gray-100 p-4 lg:p-8">
        <div className="py-10 flex lg:flex-row justify-center lg:justify-around items-center px-4 lg:px-56 text-black gap-8 mt-4">
          <div className="text-xl lg:text-2xl">
            <p>Welcome To Your Contact</p>
          </div>
          <div className="bg-[#242424]  text-white px-4 py-2 lg:py-4 rounded-lg hover:bg-[#D8D2D2]">
            <button><a href="/Addcontact">Add New Contact</a></button>
          </div>
        </div>
        <div className="space-y-4 py-5 px-4 lg:px-56">
          <div className="bg-white p-4 rounded-md shadow">
            <a href='/Contact' className="block">
              <div className="flex flex-col lg:flex-row justify-between items-center">
                <h2 className="text-lg lg:text-xl font-semibold">Sylvie Masengesho</h2>
                <p className="text-gray-600 lg:mr-4">sylviemasengesho5@gmail.com</p>
                <p className="text-gray-600">0793896810</p>
              </div>
            </a>
          </div>
          <div className="bg-white p-4 rounded-md shadow">
            <a href='/Contact' className="block">
              <div className="flex flex-col lg:flex-row justify-between items-center">
                <h2 className="text-lg lg:text-xl font-semibold">Oliva Tuyishimire</h2>
                <p className="text-gray-600 lg:mr-4">oliva@gmail.com</p>
                <p className="text-gray-600">0791348662</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
