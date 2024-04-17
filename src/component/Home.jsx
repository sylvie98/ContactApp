import { useState, useEffect } from "react"
import { FetchContacts } from './Api1';
import Contact from './Contact';
import Navigation from './Navigation';
import axios from "axios";


const Home = () => {
  
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
      fetchContacts();
  }, []);

  const fetchContacts = () => {
      axios.get('https://contact-app-server-nxgi.onrender.com/api/v1/contactapp/contact/list')
          .then((res) => {
              setContacts(res.data.contacts);
          })
          .catch((err) => {
              console.log(err);
              alert("Fetching contacts failed");
          });
  };
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
      </div>
      <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            {contacts.map((contact) => (
              <Contact key={contact._id} contact={contact} />
            ))}
          </div>
    </div>
  );
};

export default Home;
