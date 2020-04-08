import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burger-builder-56e5a.firebaseio.com/'
});

export default instance;