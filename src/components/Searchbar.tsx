import { useState } from 'react';
import { fetchWeather } from '../api/fetchWeather';
fetchWeather;

const Searchbar = () => {
    const [query, setQuery] = useState('');

    const search = async (e: any) => {
        if (e.key == 'Enter') {
            const data = await fetchWeather(query);

            console.log(data);
        }
    };
    return (
        <div className="searchbar-card">
            {/* <form action=""> */}
            <input
                type="search"
                className="searchbar"
                placeholder="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={search}
            />
            {/* </form> */}
        </div>
    );
};

export default Searchbar;
