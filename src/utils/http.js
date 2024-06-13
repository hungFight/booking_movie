import axios, { AxiosInstance } from 'axios';
axios.defaults.withCredentials = true;
class Http {
    instance;
    constructor() {
        this.instance = axios.create({
            baseURL: process.env.REACT_APP_SERVER_BOOKING,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        });
    }
}
const http = new Http().instance;
export default http;
