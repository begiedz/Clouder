import { useState } from 'react';
import { fetchWeather } from './api/fetchWeather';

import Searchbar from './components/Searchbar';
import MainTemperatureCard from './components/MainTemperatureCard';
import NotificationCard from './components/NotificationCard';

import './sass/main.scss';

interface WeatherData {
    main: {
        temp: number;
        [key: string]: any;
    };
    weather: {
        description: string;
        [key: string]: any;
    }[];
    [key: string]: any;
}

function App() {
    const [query, setQuery] = useState<string>('');
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [error, setError] = useState<string>('')

    const search = async () => {
        try {
            const data = await fetchWeather(query)
            setError('')
            setWeather(data);
            // console.log(data.weather[0].description);
            // console.log(Math.round(data.main.temp));
            setQuery('');
            console.log(data);
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message)
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
            {error ? <NotificationCard message={error} /> : (weather && weather.main ? <MainTemperatureCard weather={weather} /> : null)}
        </>
    );
}

export default App;
