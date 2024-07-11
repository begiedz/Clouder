import axios from 'axios';

const URL: string = 'https://api.weatherapi.com/v1/forecast.json';
const API_KEY: string = import.meta.env.VITE_API_KEY;

export const fetchWeather = async (query: string) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      key: API_KEY,
      days: 10,
    },
  });
  return data;
};
