import clearDay from '../assets/img/clear-day.svg';
// import bgImage from 'https://cdn.pixabay.com/photo/2016/01/02/01/51/clouds-1117584_1280.jpg';

const MainTemperatureCard = () => {
    let temperature;
    let cityName;
    let hiTemperature;
    let loTemperature;
    let weatherImage;
    let weatherStatus;
    return (
        <div className="temperature-card">
            <img src={weatherImage} alt="weather image" />

            <h2>{cityName}</h2>

            <div className="temperature">
                {temperature}
                <sup>°C</sup>
            </div>

            <div className="weather-status">{weatherStatus}</div>

            <ul>
                <li>
                    H: {hiTemperature}
                    <sup>°C</sup>
                </li>
                <li>
                    L: {loTemperature}
                    <sup>°C</sup>
                </li>
            </ul>
        </div>
    );
};

export default MainTemperatureCard;
