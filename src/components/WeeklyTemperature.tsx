import { WeatherData } from "../types/WeatherData"

interface WeatherProps {
  weather: WeatherData
}

const WeeklyTemperature = ({ weather }: WeatherProps) => {
  return (
    <div className="card weekly">
      <h6>Week Forecast</h6>
      <hr className="titleSeparator" />
      <ul>
        {weather.forecast.forecastday.map((day, key) => {
          return (
            <>
              <li key={key}>
                <div>{day.date}</div>
                <img src={`https:${day.day.condition.icon}`} />
                <div>
                  H: {Math.round(day.day.maxtemp_c)}<sup>°</sup>
                </div>
                <div>
                  L: {Math.round(day.day.mintemp_c)}<sup>°</sup>
                </div>
              </li>
              <hr className="listSeparator" />
            </>
          )
        })}
      </ul>
    </div>
  )
}

export default WeeklyTemperature