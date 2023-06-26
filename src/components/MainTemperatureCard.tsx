// import clearDay from '../assets/img/clear-day.svg';
// import bgImage from 'https://cdn.pixabay.com/photo/2016/01/02/01/51/clouds-1117584_1280.jpg';

const MainTemperatureCard = (props: any) => {
    return (
        <div className="temperature-card">
            {/* <img src={} alt="weather image" /> */}

            <h2>{props.weather.name}</h2>

            <div className="temperature">
                {Math.round(props.weather.main.temp)}
                <sup>°C</sup>
            </div>

            <div className="weather-status">{props.weather.weather[0].main}</div>

            <ul>
                <li>
                    H: {Math.round(props.weather.main.temp_max)}
                    <sup>°C</sup>
                </li>
                <li>
                    L: {Math.round(props.weather.main.temp_min)}
                    <sup>°C</sup>
                </li>
            </ul>
        </div>
    );
};

export default MainTemperatureCard;
