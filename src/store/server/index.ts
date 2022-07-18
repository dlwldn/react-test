import axios from 'axios';
const BASE_API_ENDPOINT = 'https://dev.engflip.com/api/v2';
const TOKEN = 'f8161801-80b6-440c-80c1-fc08973fdfbb';

const BASE_RIOT_API_ENDPOINT = 'https://kr.api.riotgames.com';
const RIOT_TOKEN = 'RGAPI-4b49ed41-3c9c-44f1-bd66-972b33e8cbf5';

const apiClient = axios.create({
    baseURL: BASE_API_ENDPOINT,
    headers: {
        'x-auth-token': TOKEN
    }
})

export const RiotApiClient = axios.create({
    // baseURL: BASE_RIOT_API_ENDPOINT,
    headers: {
        'X-Riot-Token': RIOT_TOKEN
    }
})

export default apiClient