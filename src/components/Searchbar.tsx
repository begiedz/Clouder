// import { useState } from 'react';
import { fetchWeather } from '../api/fetchWeather';
fetchWeather;

const Searchbar = (props: any) => {
    return (
        <div className="searchbar-card">
            {/* <form action=""> */}
            <input
                type="search"
                className="searchbar"
                placeholder="Search"
                value={props.query}
                onChange={(e) => props.setQuery(e.target.value)}
                onKeyDown={props.search}
            />
            {/* </form> */}
        </div>
    );
};

export default Searchbar;
