import { useState, useEffect, useContext } from "react";
import { CityContext } from "../../CityContext";
import Weather5DayForecast from "../Weather5DayForecast/Weather5DayForecast";
import WeatherHourlyForecast from "../WeatherHourlyForecast/WeatherHourlyForecast";
import WeatherNow from "../WeatherNow/WeatherNow";

export default function ContainerWeatherNow () {
  const [data, setData] = useState(null)
  const [geoDataCity, setGeoDataCity] = useState('')
  const [city, setCity] = useState('')
  const {textCity, setTextCity} = useContext(CityContext)
  const apiKey = '0e5372bc6b4f344b57d639dda586c32f'
  
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const latitude = position.coords.latitude
          const longitude = position.coords.longitude
          fetchData(latitude, longitude)
        }
      )
    }

    const fetchData = async (latitude, longitude) => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&lang=ru&appid=${apiKey}`)
        if (!response.ok) {
          throw new Error(`Ошибка с API: ${response.status} ${response.statusText}`)
        }
        const dataCity = await response.json()
        setData(dataCity)
      } catch (error) {
        console.log(error.message)
      }
    }

  }, [])
  
  console.log(data)
  return (
    <>
      {data ? <WeatherNow data={data}/> : ''}
      {data ? <WeatherHourlyForecast data={data}/> : ''}
      {data ? <Weather5DayForecast data={data}/> : ''}
    </>
  )
}