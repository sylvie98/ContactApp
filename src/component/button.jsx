import { useEffect, useState } from "react";
import { Delete, FetchContactById } from "./Api1";
import { useParams, useNavigate } from 'react-router-dom';

const Button = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [contact, setContact] = useState({});
    const [message, setMessage] = useState({
        type: '',
        content: ''
    });

    useEffect(() => {
        FetchContactById(params.contactId)
            .then((response) => {
                setContact(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [params.contactId]);

    const deleteContact = (event) => {
        event.preventDefault();

        Delete(params.contactId)
            .then((response) => {
                setMessage({
                    type:'success',
                    content: response
                });
                
                setTimeout(() => {
                    // Using react-router-dom to navigate to the homepage
                    navigate('/');
                }, 2000);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="bg-black text-white flex flex-col justify-center items-center gap-10">
            <h1>Name: {contact.fullName}</h1>
            <p>Phone: {contact.phone}</p>
            <p>Email: {contact.email}</p>
            <div className="flex gap-5">
                <button onClick={deleteContact} type="button" className="rounded border border-gray-400 bg-red-700">Delete</button>
                <button className="rounded border border-gray-400 bg-blue-600">Update</button>
            </div>
            {message.type === 'success' && <p className="px-3 py-2 text-green-700 bg-green-200 rounded-sm">{message.content}</p>}
            {message.type === 'error' && <p className="px-3 py-2 text-red-700 bg-red-200 rounded-sm">{message.content}</p>}
        </div>
    );
};

export default Button;
