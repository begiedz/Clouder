import axios from 'axios';

const URL: string = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY: any = import.meta.env.VITE_API_KEY;

export const fetchWeather = async (query: string) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        },
    });
    return data;
};
