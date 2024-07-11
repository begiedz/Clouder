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
    <div className="card daily">
      <h3>Daily Forecast</h3>
      <div className="titleSeparator" />
      <ul>
        {weather.forecast.forecastday.map((day, key) => {
          return (
            <React.Fragment key={key}>
              <li>
                <div>{key == 0 ? 'Today' : getDayName(day.date, "en-EN")}</div>
                <div className="rain-wrapper">
                  <img src={`https:${day.day.condition.icon}`} />
                  <div className="rain-chance">
                    {day.day.daily_will_it_rain === 1 &&
                      <div className="rain-chance">
                        {day.day.daily_chance_of_rain}%
                      </div>}
                    {day.day.daily_will_it_snow === 1 &&
                      <div className="rain-chance">
                        {day.day.daily_chance_of_snow}%
                      </div>}
                  </div>
                </div>
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