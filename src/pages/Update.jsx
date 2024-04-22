import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Navigation from "../component/Navigation";

const Update = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [picture, setPicture] = useState("");

  let { contId } = useParams();
  const navigate = useNavigate();

  const updateContact = (e, id) => {
    let updatedContact = { fullName, email, phone, picture };

    if (!fullName || !email || !phone) {
      alert("Please update out all fields.");
      return; 
    }

    axios
      .put(
        `https://contact-app-server-nxgi.onrender.com/api/v1/contactapp/contact/update?id=${id}`,
        updatedContact
      )
      .then((resp) => {
        console.log(resp.data);
        alert("contact already changes");
        navigate("/Home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getContact = (id) => {
    axios
      .get(
        "https://contact-app-server-nxgi.onrender.com/api/v1/contactapp/contact/findById?id=" +
          id
      )
      .then((resp) => {
        let contact = resp.data.contact;
        setFullName(contact.fullName);
        setEmail(contact.email);
        setPhone(contact.phone);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getContact(contId);
  }, [contId]);

  return (
    <div>
      <Navigation/>
    <div className='flex flex-col items-center justify-center mt-10 bg-gray-100'>
      <form>
        <label>FullName:</label>
        <br></br>
        <input
          type="text"
          value={fullName}
          className="w-96 h-12 border-2 pl-2"
          onChange={(e) => setFullName(e.target.value)}
        ></input>
        <br></br>

        <label>Email:</label>
        <br></br>
        <input
          type="text"
          value={email}
          className="w-96 h-12 border-2 pl-2"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <br></br>

        <label>Phone:</label>
        <br></br>
        <input
          type="text"
          value={phone}
          className="w-96 h-12 border-2 pl-2"
          onChange={(e) => setPhone(e.target.value)}
        ></input>
        <br></br>
        <button
          type="button"
          className="w-96 h-12 border-2 mt-4 bg-slate-500 text-white"
          onClick={(e) => updateContact(e, contId)}
        >
          UPDATED
        </button>
      </form>
    </div>
    </div>
  );
};

export default Update;