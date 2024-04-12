import axios from "axios";
const API = import.meta.env.VITE_BASE_API;


export const FetchContacts = () => {
    return axios.get(API + "/Contact/list")
        .then((response) => {
            return response.data.contacts;
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
};


export const FetchContactById = (id) => {
    return axios.get(API + "/Contact/findById?id=" + id)
        .then((response) => {
            return response.data.Contact;
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
};

// export const Update = (id) => {

// };

export const Add = (Contact) => {
    return axios.post(`${API}/Api/add`, Contact)
        .then((response) => {
            console.log(response.data.message);
            return response.data.message;
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
};

export const Delete = (id) => {
    return axios.delete(API + "/Contact/delete?id=" + id)
        .then((response) => {
            console.log(response.data.message);
            return response.data.message;
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
};