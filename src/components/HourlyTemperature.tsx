import { WeatherData } from "../App"

interface WeatherProps {
  weather: WeatherData
}

const HourlyTemperature = ({ weather }: WeatherProps) => {
  return (
    <div className="card main">
      <h2>HourlyTemperature</h2>

    </div>
  )
}

export default HourlyTemperature