import { useState, useEffect, useContext, useCallback } from "react";
import { CityContext } from "../CityContext";
import Weather5DayForecast from "./Weather5DayForecast/Weather5DayForecast";
import WeatherHourlyForecast from "./WeatherHourlyForecast/WeatherHourlyForecast";
import WeatherNow from "./WeatherNow/WeatherNow";
import { useParams, useNavigate } from "react-router-dom";
import Navigation from "./Navigation/Navigation";

// типы пропсов не указаны из-за того что я ещё не изучил TypeScript, но я знаю об этой проблеме

export default function Main({now, hourly, fiveDay,}) {
  const {textCity} = useContext(CityContext)
  const { city } = useParams();
  const [data, setData] = useState(null);
  const apiKey = "0e5372bc6b4f344b57d639dda586c32f";
  const navigate = useNavigate(); 

  const fetchData = useCallback(async (cityName) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&lang=ru&appid=${apiKey}`
      );
      if (!response.ok) {
        throw new Error(
          `Ошибка с API: ${response.status} ${response.statusText}`
        );
      }
      const dataCity = await response.json();
      console.log(dataCity);
      setData(dataCity);
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  const getGeolocationAndRedirect = useCallback(async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          try {
            const response = await fetch(
              `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${apiKey}`
            );

            if (!response.ok) {
              throw new Error(
                `Ошибка с API: ${response.status} ${response.statusText}  `
              );
            }
            const geoData = await response.json();
            console.log(geoData);
            if (geoData && geoData.length > 0 && geoData[0].name) {
              const cityName = geoData[0].name;
              navigate(`/weatherHourly/${cityName}`);
            } else {
              console.warn("Не удалось определить город по геолокации");
            }
          } catch (error) {
            console.error("Ошибка при получении названия города:", error);
          }
        },
        (error) => {
          console.error("Ошибка геолокации:", error);
        }
      );
    } else {
      console.log("Геолокация не поддерживается браузером");
    }
  }, [apiKey, navigate]);

  useEffect(() => {
    if (textCity && textCity !== '') {
      fetchData(textCity);
    } else if (city) {
      fetchData(city);
    } else {
      getGeolocationAndRedirect();
    }
  }, [textCity, city, fetchData, getGeolocationAndRedirect]);

  return (
    <>
      <main>
        {data ? <Navigation data={data}/> : ''}
        {data && now ? <WeatherNow data={data} /> : ''}
        {data && hourly ? <WeatherHourlyForecast data={data} /> : ''}
        {data && fiveDay ? <Weather5DayForecast data={data} /> : ''}
      </main>
    </>
  );
}