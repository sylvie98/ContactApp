import { useEffect, useState } from "react"
import { Delete, FetchContactById } from "../component/Api1";
import { useParams, useNavigate } from 'react-router-dom';
import Navigation from "../component/Navigation";

const ContactDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [Contact, setContact] = useState({});
  const [message, setMessage] = useState({
    type: '',
    content: ''
  });

  useEffect(() => {
    FetchContactById(params.ContactId)
     .then((response) => {
        setContact(response);
        console.log("am the delete from delete")
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteContact = (event) => {
    event.preventDefault();

    Delete(params.ContactId)
     .then((response) => {
        setMessage({
          type:'success',
          content: response
        });
        
        setTimeout(() => {
          window.location.replace('/');
        },2000)
      })
     .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <Navigation/>
      <div className=" bg-gray-100 text-black flex  flex-col justify-center items-center gap-10 ">
        <h1>Name: {Contact.fullName}</h1>
        <p>Email: {Contact.email}</p>
        <p>Phone: {Contact.phone}</p>
        <div className="flex gap-5">
          <button onClick={deleteContact} type="button" className="rounded border border-gray-400 bg-red-700">Delete</button>
        </div>
        {message.type === 'success' && <p className="px-3 py-2 text-green-700 bg-green-200 rounded-sm">{message.content}</p>}
        {message.type === 'error' && <p className="px-3 py-2 text-red-700 bg-red-200 rounded-sm">{message.content}</p>}
      </div>
    </>
  )
}

export default ContactDetails