import { WeatherData } from "../types/WeatherData"

interface WeatherProps {
  weather: WeatherData
}

const HourlyTemperature = ({ weather }: WeatherProps) => {
  return (
    <div className="card hourly">
      <h6>Today</h6>
      <hr />
      <ul>
        {weather.forecast.forecastday[0].hour.map((hour, key) => {
          return (
            <li key={key}>
              <div>{key}</div>
              <img src={`https:${hour.condition.icon}`} />
              <div>{Math.round(hour.temp_c)}</div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default HourlyTemperature