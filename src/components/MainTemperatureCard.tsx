
const MainTemperatureCard = (props: any) => {
    // const weatherStatus = props.weather.weather[0].main;
    const weatherStatus = props.weather.weather[0].description;
    return (
        <div className="main card">
            <img
                src={`https://openweathermap.org/img/wn/${props.weather.weather[0].icon}@2x.png`}
                alt={weatherStatus}
            />

            <h2>{props.weather.name} <sup>{props.weather.sys.country}</sup></h2>
            {/* Staronizhestebliyevskaya */}

            <div className="temperature">
                {Math.round(props.weather.main.temp)}
                <sup>°C</sup>
            </div>

            <div className="weather-status">
                {weatherStatus.charAt(0).toUpperCase() + weatherStatus.slice(1)}
            </div>

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
