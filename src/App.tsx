import { fetchWeather } from './api/fetchWeather';
import { useState } from 'react';

import './sass/main.scss';
import Searchbar from './components/Searchbar';
import MainTemperatureCard from './components/MainTemperatureCard';

function App() {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = async (e: any) => {
        if (e.key == 'Enter') {
            const data = await fetchWeather(query);

            setWeather(data);

            // console.log(data.weather[0].description);
            // console.log(Math.round(data.main.temp));

            setQuery('');
            console.log(data);
        }
    };
    return (
        <>
            <Searchbar query={query} setQuery={setQuery} search={search} />
            {weather.main ? <MainTemperatureCard weather={weather} /> : null}
        </>
    );
}

export default App;
