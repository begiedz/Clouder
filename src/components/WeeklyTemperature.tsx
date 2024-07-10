import React from "react";
import { WeatherData } from "../types/WeatherData"

interface WeatherProps {
  weather: WeatherData
}

const WeeklyTemperature = ({ weather }: WeatherProps) => {

  function getDayName(dateStr: string, locale: string) {
    const date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });
  }

  return (
    <div className="card weekly">
      <h6>Week Forecast</h6>
      <div className="titleSeparator" />
      <ul>
        {weather.forecast.forecastday.map((day, key) => {
          return (
            <React.Fragment key={key}>
              <li>
                <div>{key == 0 ? 'Today' : getDayName(day.date, "en-EN")}</div>
                <img src={`https:${day.day.condition.icon}`} />
                <div>
                  H: {Math.round(day.day.maxtemp_c)}<sup>°</sup>
                </div>
                <div>
                  L: {Math.round(day.day.mintemp_c)}<sup>°</sup>
                </div>
              </li>
              {key < weather.forecast.forecastday.length - 1 && (
                <div className="listSeparator" />
              )}
            </React.Fragment>
          )
        })}
      </ul>
    </div>
  )
}

export default WeeklyTemperature