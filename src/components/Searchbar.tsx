
import { fetchWeather } from '../api/fetchWeather';
fetchWeather;

const Searchbar = (props: any) => {
    return (
        <div>
            <input
                type="search"
                className="searchbar"
                placeholder="Search location..."
                value={props.query}
                onChange={(e) => props.setQuery(e.target.value)}
                onKeyDown={props.search}
            />
        </div>
    );
};

export default Searchbar;
