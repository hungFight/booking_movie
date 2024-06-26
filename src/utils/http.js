import axios, { AxiosInstance } from 'axios';
axios.defaults.withCredentials = true;
class Http {
    instance;
    constructor () {
        const token = localStorage.getItem('authToken');
        this.instance = axios.create({
            baseURL: process.env.REACT_APP_SERVER_BOOKING,
            headers: {
                Authorization: 'Bearer ' + token,
            },
        });
    }
}
const http = new Http().instance;
export default http;
