import axios from 'axios';
const BASE_API_ENDPOINT = 'https://dev.engflip.com/api/v2';
const TOKEN = 'fd4ee6de-2a4b-43fb-965f-54f6f8d4acf8';

const apiClient = axios.create({
    baseURL: BASE_API_ENDPOINT,
    headers: {
        'x-auth-token': TOKEN
    }
})

export default apiClient