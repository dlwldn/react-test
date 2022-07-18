import axios, { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { RiotApiClient } from '.'

type SummonerInfo = {
    id: string;
    accountId: string;
    puuid: string;
    name: string;
    profileIconId: number;
    revisionDate: number;
    summonerLevel: number;
}

const fetchSummonerInfo = async (name: string): Promise<SummonerInfo> => {
    const res = await RiotApiClient.get(`/lol/summoner/v4/summoners/by-name/${name}`);
    return res.data
}

export const useSummoner = (id: string, name: string) => {
    const result = useQuery([`/getSummoner/${id}`, name], () => fetchSummonerInfo(name));
    return result;
}