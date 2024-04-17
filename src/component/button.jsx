import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Delete, FetchContactById } from './Api1';
import axios from 'axios';

const Button = () => {
  const { contactId } = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState();
  const [message, setMessage] = useState({
    type: '',
    content: '',
  });

  useEffect(() => {
    FetchContactById(contactId)
  
      .then((response) => {
        console.log(response);
        console.log('am the fetch')
        setContact(contact);
      })
      
      .catch((error) => {
        console.log(error);
      }); 
        setMessage({
          type: 'error',
          content: 'Failed to fetch contact. Please try again later.',
        });  
  }, [contactId]);

  const deleteContact = (event) => {
    event.preventDefault();
    Delete(contactId)
      .then((response) => {
        setMessage({
          type: 'success',
          content: response,
        }); 

        setTimeout(() => {
          navigate("/");
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
    <div>
      <h1>ID: <span>{contactId}</span>
      </h1>
      <h1>
        Name: <span></span>
      </h1>
      <p>
        Phone: <span></span>
      </p>
      <p>
        Email: <span></span>
      </p>
      <button onClick={deleteContact} type="button" className="bg-red-200 items-center">DELETE</button>
      <button type='submit' className=' bg-blue-500 text-white items-center'>UPDATE</button>
    </div>
  );
}

export default Button;
