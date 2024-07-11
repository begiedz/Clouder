import { WeatherData } from "../types/WeatherData"

interface WeatherProps {
  weather: WeatherData
}

const HourlyTemperature = ({ weather }: WeatherProps) => {

  const todaysForecast = weather.forecast.forecastday[0].hour
  const nextDayForecast = weather.forecast.forecastday[1].hour


  const date: Date = new Date()
  const currentHour: number = date.getHours()

  const reducedForecast = todaysForecast.slice(currentHour)
  const nextDayReducedForecast = nextDayForecast.slice(0, currentHour)
  const next24hForecast = reducedForecast.concat(nextDayReducedForecast)

  function getHour(unixDate: number) {
    const date = new Date(unixDate * 1000);
    return date.getHours();
  }

  return (
    <div className="card hourly">
      <h3>Hourly Forecast</h3>
      <div className="titleSeparator" />
      <ul>
        {next24hForecast.map((hour, key) => {
          return (
            <li key={key}>
              <div>{key == 0 ? "Now" : getHour(hour.time_epoch)}</div>
              <img src={`https:${hour.condition.icon}`} />
              <div>{Math.round(hour.temp_c)}<sup>°</sup></div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default HourlyTemperature