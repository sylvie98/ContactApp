import React, { useState } from "react";
import { Add } from "./Api";
import { useNavigate } from "react-router-dom";
import Navigation from './Navigation';

const Addcontact = () => {
  const navigate = useNavigate();
  const [Contact, setContact] = useState({
    fullName: '',
    email: '',
    phone: ''
  });

  const handleSubmitContact = (event) => {
    event.preventDefault();
    Add(Contact);
    setContact({
      fullName: '',
      email: '',
      phone: ''
    });
  };

  const handleInput = (event) => {
    setContact({ ...Contact, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Navigation />
      <section className='flex items-center justify-around mt-10 flex-col bg-gray-100'>
        <div>
          <p>ADD CONTACT</p>
        </div>
        <form onSubmit={handleSubmitContact}>
          <div className='flex flex-col gap-5'>
            <label>Full Name</label>
            <div className='rounded-lg border border-gray-400 w-full lg:w-96 h-10'>
              <input type='text' name='fullName' value={Contact.fullName} onChange={handleInput} placeholder="ENTER YOUR NAME" required/>
            </div>
            <label>Email</label>
            <div className='rounded-lg border border-gray-400 w-full lg:w-96 h-10 relative'>
              <input type='email' name='email' value={Contact.email} onChange={handleInput} placeholder="ENTER YOUR EMAIL" required/>
            </div>
            <label>Phone</label>
            <div className='rounded-lg border border-gray-400 w-full lg:w-96 h-10'>
              <input type='tel' name='phone' value={Contact.phone} onChange={handleInput} placeholder="ENTER YOUR PHONE NUMBER" required/>
            </div>
            <div className='rounded-lg border border-gray-400 w-full flex justify-center items-center bg-slate-500 text-white h-10 mt-5'>
              <button type='submit'>ADD CONTACT</button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Addcontact;
