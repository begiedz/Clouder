import { fetchWeather } from './api/fetchWeather';
import { useState } from 'react';
import cloudsImg from './assets/img/clouds-cloud-svgrepo-com.svg';

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
            <nav>
                <div>
                    <img src={cloudsImg} alt="logo" />
                    <h1>Clouder</h1>
                </div>
                <Searchbar query={query} setQuery={setQuery} search={search} />
                <button>
                    <span
                        className="material-symbols-rounded"
                        style={{ fontSize: `30px`, color: `#000` }}>
                        menu
                    </span>
                </button>
            </nav>

            {weather.main ? <MainTemperatureCard weather={weather} /> : null}
        </>
    );
}

export default App;
