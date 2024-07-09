import { useState } from 'react';
import { fetchWeather } from './api/fetchWeather';

import Searchbar from './components/Searchbar';
import MainTemperatureCard from './components/MainTemperatureCard';
import NotificationCard from './components/NotificationCard';

import './sass/main.scss';
import HourlyTemperature from './components/HourlyTemperature';

export interface WeatherData {
  location: {
    name: string;
    country: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  };
  forecast: {
    forecastday: {
      day: {
        maxtemp_c: number;
        mintemp_c: number;
      };
    }[];
  };
}

function App() {
  const [query, setQuery] = useState<string>('');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null)
  const [key, setKey] = useState<number>(0)

  const search = async () => {
    try {
      const data = await fetchWeather(query)
      setError(null)
      setQuery('');
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

  const searchByEnter = (e: any) => {
    if (e.key == 'Enter') {
      search()
    }
  };
  const searchByClick = () => {
    search()
  }
  return (
    <>
      <Searchbar query={query} setQuery={setQuery} searchByEnter={searchByEnter} searchByClick={searchByClick} />
      {error ? <NotificationCard message={error} /> :
        weather?.current ? (
          <>
            <MainTemperatureCard key={key} weather={weather} />
            <HourlyTemperature key={key + 1} weather={weather} />
          </>
        ) : null}
    </>
  );
}

export default App;
