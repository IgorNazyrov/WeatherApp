import { useState, useEffect, useCallback } from "react"
import WeatherIcon from "../../WeatherIcon/WeatherIcon"

export default function WeatherHourlyForecast ({data, }) {
  const [hourlyForecast, setHourlyForecast] = useState([])
  
  const procces24HourForecast = useCallback(() => {
    const now = new Date()
    const forecastEnd = new Date(now.getTime() + 24 * 60 * 60 * 1000)
    const hourlyData = []
  
    if(!data || !data.list) {
      console.error("Data не передалась")
      return[]
    }
  
    const relevantForecast = data.list.filter((item) => {
      const itemDate = new Date(item.dt_txt)
      return itemDate >= now && itemDate <= forecastEnd
    })
  
    if (relevantForecast.length > 0) {
      relevantForecast.forEach((forecast) => {
        hourlyData.push({
          time: new Date(forecast.dt_txt).toLocaleDateString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit"
          }),
          temperature: forecast.main.temp,
          weather: forecast.weather[0].main,
        })
      })
    } else {
      console.warn('нет прогнозов на следующие 24 часа')
      return []
    }

    console.log('Прогноз на 24 часа: ', hourlyData)
    return hourlyData
  })

  useEffect(() => {
    const forecast = procces24HourForecast()
    setHourlyForecast(forecast)
  }, [data])
  
  return (
    <>
      <h3>24-часовой прогноз</h3>
      {hourlyForecast.map((forecast, index) => (
        forecast ? (
          <div key={index}>
            <p>Время: {forecast.time}</p>
            <p>Температура: {forecast.temperature}</p>
            <WeatherIcon weather={forecast.weather} fontSize={'1em'}/>
          </div>
        ) : ' '
      ))}
    </>
  )
}