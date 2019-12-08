import axios from 'axios';

const api = axios.create({
    baseURL: 'https://spotideezerapi.herokuapp.com/'
});

export default api;