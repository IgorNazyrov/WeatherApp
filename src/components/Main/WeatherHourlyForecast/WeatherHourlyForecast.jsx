import { useState, useEffect, useCallback, useContext } from "react"
import WeatherIcon from "../../WeatherIcon/WeatherIcon"
import styles from './WeatherHourlyForecast.module.css'
import { TemperatureContext } from '../../TemperatureContext'

export default function WeatherHourlyForecast ({data, }) {
  const [hourlyForecast, setHourlyForecast] = useState([])
  const {getTemperature} = useContext(TemperatureContext)

  
  
  // const procces24HourForecast = useCallback(() => {
  //   const now = new Date()
  //   const forecastEnd = new Date(now.getTime() + 24 * 60 * 60 * 1000)
  //   const hourlyData = []
  
  //   if(!data || !data.list) {
  //     console.error("Data не передалась")
  //     return[]
  //   }
  
  //   const relevantForecast = data.list.filter((item) => {
  //     const itemDate = new Date(item.dt_txt)
  //     return itemDate >= now && itemDate <= forecastEnd
  //   })
  
  //   if (relevantForecast.length > 0) {
  //     relevantForecast.forEach((forecast) => {
  //       hourlyData.push({
  //         time: new Date(forecast.dt_txt).toLocaleTimeString("ru-Ru", {
  //           hour: "2-digit",
  //           minute: "2-digit" 
  //         }),
  //         temperature: forecast.main.temp,
  //         weather: forecast.weather[0].main,
  //       })
  //     })
  //   } else {
  //     console.warn('нет прогнозов на следующие 24 часа')
  //     return []
  //   }

  //   console.log('Прогноз на 24 часа: ', hourlyData)
  //   return hourlyData
  // })

  // useEffect(() => {
  //   const forecast = procces24HourForecast()
  //   setHourlyForecast(forecast)
  // }, [data])
  
  return (
    <>
      {hourlyForecast ? (
        <div className={styles.containerHourly}>
          <h2 className={styles.h2Hourly}>24-часовой прогноз</h2>
          <div className={styles.listHourlyForecasts}>
            {hourlyForecast.map((forecast, index) => (
              <div className={styles.hourlyForecast} key={index}>
                <div className={styles.hourlyDate}>{forecast.time}</div>
                <div className={styles.hourlyWeatherIcon}><WeatherIcon width={'55px'} weather={forecast.weather}/></div>
                <div className={styles.hourlyTemperature}>{getTemperature(Math.round(forecast.temperature - 273))}</div>
              </div>
            ))}
          </div>
        </div>
      ) : ''}
      {/* <h3>24-часовой прогноз</h3>
      {hourlyForecast.map((forecast, index) => (
        forecast ? (
          <div key={index}>
            <p>Время: {forecast.time}</p>
            <p>Температура: {forecast.temperature}</p>
            <WeatherIcon weather={forecast.weather} fontSize={'1em'}/>
          </div>
        ) : ' '
      ))} */}
    </>
  )
}