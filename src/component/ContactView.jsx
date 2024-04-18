import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Delete, FetchContactById } from './Api1';
import Navigation from './Navigation';


const ContactView= () => {
  const params = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState({});
  const [message, setMessage] = useState({
    type: '',
    content: '',
  });

  console.log(params.contactId)

  useEffect(() => {
    FetchContactById(params.ContactId)
     .then((response) => {
        setContact(response);
        console.log(response)
        console.log("am the responce from contactView")
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  const deleteContact = (event) => {
    event.preventDefault();
    Delete(params)
      .then((response) => {
        console.log("am the delete from contactView")
        setMessage({
          type: 'success',
          content: response,
        });
        setTimeout(() => {
          navigate("/Home");
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        setMessage({
          type: 'error',
          content: 'Failed to delete contact. Please try again later.',
        });
      });
  };
  return (
    <>
    <Navigation/>
    <div className=' flex flex-col mt-10 gap-5 items-center p-5 container bg-gray-100'>
      {message.type === 'error' && (
        <div className="text-red-600">{message.content}</div>
      )}
      <div className=''>
        <p className='text-xl mb-5'><span className='text-2xl'>ID:</span> {params.contactId}</p>
        <p className='text-xl mb-5'><span >Name:</span> {params.fullname}</p>
        <p className='text-xl mb-5'><span >Phone:</span> {contact.phone}</p>
        <p className='text-xl mb-5'><span>Email:</span> {contact.email}</p>
      </div>
      <div className=' justify-evenly mr-5'>
      <button onClick={deleteContact} type="button" className=" bg-blue-500 items-center w-20 p-2 mr-5 text-white">
        Delete
      </button>
      <button type='button' className='bg-red-500 items-center w-20 p-2 text-white'>
        Update
       </button>
      </div>
    </div>
    </>
  );
};

export default ContactView