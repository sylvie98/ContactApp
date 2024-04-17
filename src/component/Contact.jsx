import { Link } from "react-router-dom"
const Contact = ({ contact }) => {
    return (
        <Link
            to={`${contact._id}`}
            className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 bg-slate-200"
        >
            <div className="sm:flex sm:justify-between sm:gap-4">
                <div>
                    <h3 className="text-lg font-bold text-black sm:text-xl">
                        {contact.fullName}
                    </h3>
                    <h5 className="text-lg font-bold text-black sm:text-base">
                        {contact.email}
                    </h5>
                    <p className="mt-1 text-xs font-medium text-black">{contact.phone}</p>
                </div>
                <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQTyJlXsGPXY7dry1ek3VG8CeRq1NXch5eccxPO7d812o4Zesw8" className=" lg:w-10 mr-2 lg:mr-4"/>
            </div>
            </Link>
        
    );
};

export default Contact;
