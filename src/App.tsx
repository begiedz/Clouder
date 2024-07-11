import { useState } from 'react';
import { fetchWeather } from './api/fetchWeather';

import { WeatherData } from './types/WeatherData'
import Searchbar from './components/Searchbar';
import MainTemperatureCard from './components/MainTemperatureCard';
import NotificationCard from './components/NotificationCard';
import HourlyTemperature from './components/HourlyForecast';
import WeeklyTemperature from './components/DailyForecast';

import './sass/main.scss';

function App() {
  const [query, setQuery] = useState<string>('');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null)
  const [key, setKey] = useState<number>(0)

  const fetchForecast = async (query: string) => {
    try {
      const data = await fetchWeather(query)
      setQuery('');
      setError(null)
      setWeather(data);
      setKey(prevKey => prevKey + 1)

      console.log(data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
        console.log(error);
      } else {
        console.log(error);
      }
    }
  }
  return (
    <>
      <Searchbar
        query={query}
        setQuery={setQuery}
        fetchForecast={fetchForecast} />

      {error ? <NotificationCard message={error} /> :
        weather?.current &&
        <>
          <MainTemperatureCard key={key} weather={weather} />
          <HourlyTemperature key={key + 1} weather={weather} />
          <WeeklyTemperature key={key + 2} weather={weather} />
        </>
      }
    </>
  );
}

export default App;
