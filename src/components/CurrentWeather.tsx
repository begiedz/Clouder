import { WeatherData } from '../types/WeatherData'

interface WeatherProps {
  weather: WeatherData
}

const MainTemperatureCard = ({ weather }: WeatherProps) => {
  return (
    <main className="main">

      <img src={`https:${weather.current.condition.icon}`} />

      <div className="nameWrapper">
        <h2>{weather.location.name}</h2>

        {weather.location.country !== weather.location.name && (
          <div className="country">{weather.location.country}</div>
        )}
      </div>

      <div className="temperature">
        {Math.round(weather.current.temp_c)}<sup>°</sup>
      </div>

      <div className="weather-status">
        {weather.current.condition.text}
      </div>

      <ul>
        <li>
          H: {Math.round(weather.forecast.forecastday[0].day.maxtemp_c)}<sup>°</sup>
        </li>
        <li>
          L: {Math.round(weather.forecast.forecastday[0].day.mintemp_c)}<sup>°</sup>
        </li>
      </ul>

    </main>
  );
};

export default MainTemperatureCard;
