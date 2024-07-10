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
  console.log(next24hForecast);

  function getHour(unixDate: number) {
    const date = new Date(unixDate * 1000);
    return date.getHours();
  }

  console.log(getHour(1720612800));

  return (
    <div className="card hourly">
      <h6>Hourly Forecast</h6>
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