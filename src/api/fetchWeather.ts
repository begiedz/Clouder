import axios from 'axios';

const URL: string = 'https://api.openweathermap.org/data/2.5/weather';

const API_KEY: string =
    // 'f33a484cf794d08d0148764789aaba32';
    'f2a7ff2b16e89ab1f7b7a7da7e17669b';

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
