import { useState, useEffect, useCallback, FC,  } from "react";
import Weather5DayForecast from "./Weather5DayForecast/Weather5DayForecast";
import WeatherHourlyForecast from "./WeatherHourlyForecast/WeatherHourlyForecast";
import WeatherNow from "./WeatherNow/WeatherNow";
import { useParams, useNavigate } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import { useSelector } from "react-redux";
import { WeatherData, GeoData, } from "types";
import { RootState } from "app/store";

interface MainProps {
  now?: boolean,
  hourly?: boolean,
  fiveDay?: boolean,
}

const Main: FC<MainProps> = ({now, hourly, fiveDay,}) => {
  const textCity = useSelector((state: RootState) => state.city.name)
  const { city } = useParams<{city?: string}>();
  const [data, setData] = useState<WeatherData | null>(null);
  const apiKey = import.meta.env.VITE_API_KEY as string
  const navigate = useNavigate();

  const fetchData = useCallback(async (cityName: string) => {
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
      // console.log(dataCity);
      setData(dataCity);
    } catch (error) {
      console.error(error instanceof Error ? error.message : 'unknown error');
    }
  }, [apiKey]);

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
            const geoData: GeoData[] = await response.json();
            // console.log(geoData);
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
          console.error("Ошибка геолокации:", error instanceof Error ? error.message : 'Unknown error');
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
      <main>
        {data ? <Navigation data={data}/> : ''}
        {data && now ? <WeatherNow data={data} /> : ''}
        {data && hourly ? <WeatherHourlyForecast data={data} /> : ''}
        {data && fiveDay ? <Weather5DayForecast data={data} /> : ''}
      </main>
  );
}

export default Main