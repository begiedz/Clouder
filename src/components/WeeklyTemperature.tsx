import { WeatherData } from "../types/WeatherData"

interface WeatherProps {
  weather: WeatherData
}

const WeeklyTemperature = ({ weather }: WeatherProps) => {

  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // const date = new Date()
  // const today = date.getDay()

  // console.log(weekdays[today]);

  function getDayName(dateStr: string, locale: string) {
    const date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });
  }

  return (
    <div className="card weekly">
      <h6>Week Forecast</h6>
      <hr className="titleSeparator" />
      <ul>
        {weather.forecast.forecastday.map((day, key) => {
          return (
            <>
              <li key={key}>
                <div>{key == 0 ? 'Today' : getDayName(day.date, "en-EN")}</div>
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