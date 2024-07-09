import { WeatherData } from "../types/WeatherData"

interface WeatherProps {
  weather: WeatherData
}

const WeeklyTemperature = ({ weather }: WeatherProps) => {
  return (
    <div className="card weekly">
      <h6>Week Forecast</h6>
      <hr />
      <ul>
        {weather.forecast.forecastday.map((day, key) => {
          return (
            <li key={key}>
              <div>day</div>
              <img src={`https:${day.day.condition.icon}`} />
              <div>H: {day.day.maxtemp_c}</div>
              <div>L: {day.day.mintemp_c}</div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default WeeklyTemperature