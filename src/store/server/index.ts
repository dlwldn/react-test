import axios from 'axios';
const BASE_API_ENDPOINT = 'https://dev.engflip.com/api/v2';
const TOKEN = 'f8161801-80b6-440c-80c1-fc08973fdfbb';

const apiClient = axios.create({
    baseURL: BASE_API_ENDPOINT,
    headers: {
        'x-auth-token': TOKEN
    }
})

export default apiClient