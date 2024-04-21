import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

const ContactView= () => {
  const { contactId } = useParams();
  const [contacts, setContacts] = useState();
  const [ setLoading] = useState(true);

 const fetchContacts=(id)=> {
    axios.get("https://contact-app-server-nxgi.onrender.com/api/v1/contactapp/contact/findById?id=" + id).then((response) => {
        console.log(response.data.contact);
        setContacts(response.data.contact);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
    };

      const deleteContact = (id) => {
        axios.delete( "https://contact-app-server-nxgi.onrender.com/api/v1/contactapp/contact/delete?id=" + id)
        .then((resp) => {
            console.log(resp.data);
            fetchContacts(); 
            alert("successfully deleted");
            setContacts(null);
        })
        .catch((error) => {
            console.log(error);
            alert("Error deleting contact");
        });
     };

  useEffect(() => {
    fetchContacts(contactId);
  },[contactId]);

  
  return(
    <>
    <Navigation/>
    <div className="min-h-screen  flex items-center justify-center bg-gray-200 ">
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="flex flex-col items-center">
        <p className="text-lg"><strong>FullName:</strong> {contacts ? contacts.fullName : "" }</p>
        <p className="text-lg"><strong>Email:</strong> {contacts ? contacts.email : ""}</p>
        <p className="text-lg"><strong>Phone:</strong> {contacts ? contacts.phone : ""}</p>
      </div>
      <div className="mt-4 flex justify-center">
      <Link to={`/Update/${contactId}`}>
        <button className="bg-cyan-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mr-4">
          UPDATE
        </button>
        </Link>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => deleteContact(contactId)}>
          DELETE
        </button>
      </div>
    </div>
  </div>
  </>
);
};


export default ContactView