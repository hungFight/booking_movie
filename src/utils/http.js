import axios, { AxiosInstance } from 'axios';
axios.defaults.withCredentials = true;
class Http {
    instance;
    constructor() {
        const cookie = document.cookie?.split(';')[1].split('tks=')[1];
        console.log(cookie, 'cookie');
        this.instance = axios.create({
            baseURL: process.env.REACT_APP_SERVER_BOOKING,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: 'Bearer ' + cookie,
            },
        });
    }
}
const http = new Http().instance;
export default http;
