import { useState, useEffect } from "react"
import WeatherIcon from "../../../WeatherIcon/WeatherIcon"

export default function Weather5DayForecast ({data, }) {
  const getDayOfWeek = (dateString) => {
    const date = new Date(dateString)
    const options = {weekday: 'long'}
    return date.toLocaleDateString('ru-RU', options)
  }

  const [forecastData, setForecastData] = useState([])

  const processForecastData = () => {
    const dailyData = []
    const today = new Date()
    
    for (let i = 1; i <= 5; i++) {
      const nextDay = new Date(today)
      nextDay.setDate(nextDay.getDate() + i)
      const nextDayString = nextDay.toISOString().slice(0, 10)

      if (!data || !data.list) {
        console.error('data не передались')
        return []
      }

      const dailyForecasts = data.list.filter((item) => {
        const itemDate = new Date(item.dt_txt)
        const itemDateString = itemDate.toISOString().slice(0, 10)
        
        if(!item || !item.dt_txt) {
          console.error('Item или dt_txt не передались:', item )
        }

        return itemDateString === nextDayString
      })

      if (dailyForecasts.length > 0) {
        const weather = dailyForecasts[0].weather[0].main
        console.log(weather)
        let minTemp = dailyForecasts[0].main.temp
        let maxTemp = dailyForecasts[0].main.temp
        dailyForecasts.forEach((forecast) => {
          const temp = forecast.main.temp

          if (temp < minTemp) {
            minTemp = temp
          }
  
          if (temp > maxTemp) {
            maxTemp = temp
          }
        })
        dailyData.push({
          date: nextDayString,
          minTemp: minTemp,
          maxTemp: maxTemp,
          weather: weather,
        })
      } else {
        dailyData.push(null)
      }

    } 
    console.log(dailyData)
    return dailyData
  }

  useEffect(() => {
    const data = processForecastData()
    setForecastData(data)
  }, [data])

  return (
    <>
    <h3>
      Пятидневный прогноз
    </h3>
    <div>
      {forecastData.map((day, index) => (
        day ? (
          <div key={index}>
              <p>Дата: {getDayOfWeek(day.date)}</p>
              <WeatherIcon weather={day.weather} fontSize={'1em'} />
              <p>макс темп: {day.maxTemp}</p>
              <p>мин темп: {day.minTemp}</p>
            </div>
          ) : (
            ''
          )
        ))}
    </div>
    </>
  )

}
