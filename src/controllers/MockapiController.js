import axios from "axios";

const BASE_URL = "https://649b334abf7c145d023a2086.mockapi.io/v1";

export default {
    getItems() {
        return axios.get(`${BASE_URL}/items`);
    },
    getUsers() {
        return axios.get(`${BASE_URL}/users`);
    },
    getUserByMail(mail) {
        return axios.get(`${BASE_URL}/users/${mail}`);
    },
    createUser(user) {
        return axios.post(`${BASE_URL}/users`, user);
    },
    updateUser(id, user) {
        return axios.put(`${BASE_URL}/users/${id}`, user);
    },
};