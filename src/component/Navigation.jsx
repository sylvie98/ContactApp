import React from "react";

const Navigation = () => {
  return (
    <header>
      <div className='bg-slate-400 flex  lg:flex-row items-center justify-around px-4 py-2 lg:px-8 lg:py-4'>
        <a href='/' className="text-black">HOME</a>
        <div className="flex items-center">
          <img src="https://icons.veryicon.com/png/o/internet--web/iview-3-x-icons/md-contact.png" alt="logo" className="w-8 lg:w-10 mr-2 lg:mr-4"/>
          
          <div className="hidden lg:flex  items-end lg:items-center">
            <di >
            <p className="text-black">Sylvie</p>
            
            <a href="#" className="text-black">sylviemasengesho5@gmail.com</a>
            </di>
            <button className="rounded-lg border border-gray-400 bg-black text-white px-4 py-2 mt-4"> <a href="/">Sign out</a></button>
          </div>
        </div>
        
      </div>
    </header>
  );
};

export default Navigation;