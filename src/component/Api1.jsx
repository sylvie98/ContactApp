import axios from "axios";
const API = import.meta.env.VITE_BASE_API;


export const FetchContacts = () => {
    return axios.get(API + "/contact/list")
        .then((response) => {
            return response.data.Api;
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
};


export const FetchContactById = (id) => {
    return axios.get(API + "/contact/findById?id=" + id)
        .then((response) => {
            return response.data.Api;
        })
        .catch((err) => {
            throw err;
        });
};

// export const Update = (id) => {

// };

export const Add = (contact) => {
    return axios.post(`${API}/contact/add`, contact)
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
    return axios.delete(API + "/contact/delete?id=" + id)
        .then((response) => {
            console.log(response.data.message);
            return response.data.message;
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
};