import React from 'react';
import Navigation from '../component/Navigation';

const Update = () => {
  return (
    <div>
      <Navigation/>
      <div className='flex items-center justify-around mt-10 flex-col bg-gray-100'>
        <div>
          <p>UPDATE CONTACT</p>
        </div>
        <form>
          <div className='flex flex-col gap-5'>
            <label>Full Name</label>
            <input className='rounded-lg border border-gray-400 w-full lg:w-96 h-10' type='text' name='name'/>
            <label>Email</label>
            <input className='rounded-lg border border-gray-400 w-full lg:w-96 h-10' type='text' name='name'/>
            <label>Phone</label>
            <input className='rounded-lg border border-gray-400 w-full lg:w-96 h-10' type='text' name='name'/>
            <div className='rounded-lg border border-gray-400 w-full flex justify-center items-center bg-slate-500 text-white h-10 mt-5'>
              <button type='submit'>UPDATE</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;