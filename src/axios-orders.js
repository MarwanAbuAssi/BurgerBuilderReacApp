import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-d1266.firebaseio.com/'
});

export default instance;