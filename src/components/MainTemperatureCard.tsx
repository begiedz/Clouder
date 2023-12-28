
const MainTemperatureCard = ({ weather }: any) => {
    const weatherStatus = weather.weather[0].description;

    return (
        <main className="main card">
            <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={`${weatherStatus} icon`}
            />

            <h2>{weather.name} <sup>{weather.sys.country}</sup></h2>
            {/* Staronizhestebliyevskaya */}

            <div className="temperature">
                {Math.round(weather.main.temp)}
                <sup>°</sup>
            </div>

            <div className="weather-status">
                {weatherStatus.charAt(0).toUpperCase() + weatherStatus.slice(1)}
            </div>

            <ul>
                <li>
                    H: {Math.round(weather.main.temp_max)}
                    <sup>°</sup>
                </li>
                <li>
                    L: {Math.round(weather.main.temp_min)}
                    <sup>°</sup>
                </li>
            </ul>
        </main>
    );
};

export default MainTemperatureCard;
