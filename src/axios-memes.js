import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://api.imgflip.com/get_memes',
});

export default instance;