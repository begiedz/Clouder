import { fetchWeather } from './api/fetchWeather';
import { useState } from 'react';

import './sass/main.scss';
import Searchbar from './components/Searchbar';
import MainTemperatureCard from './components/MainTemperatureCard';

function App() {
    const [query, setQuery] = useState('');

    const search = async (e: any) => {
        if (e.key == 'Enter') {
            const data = await fetchWeather(query);

            console.log(data);
        }
    };
    return (
        <>
            <Searchbar query={query} setQuery={setQuery} search={search} />
            <MainTemperatureCard />
        </>
    );
}

export default App;
