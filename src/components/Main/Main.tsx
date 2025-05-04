import { useState, useEffect, useCallback, FC,  } from "react";
import Weather5DayForecast from "./Weather5DayForecast/Weather5DayForecast";
import WeatherHourlyForecast from "./WeatherHourlyForecast/WeatherHourlyForecast";
import WeatherNow from "./WeatherNow/WeatherNow";
import { useParams, useNavigate } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import { useSelector } from "react-redux";
import { WeatherData, GeoData, } from "types";
import { RootState } from "app/store";
import { 
  useGetReverseGeokodingQuery, useGetWeatherByCityQuery, useLazyGetReverseGeokodingQuery, useLazyGetWeatherByCityQuery
} from "../../features/weatherApi";

interface MainProps {
  now?: boolean,
  hourly?: boolean,
  fiveDay?: boolean,
}

const Main: FC<MainProps> = ({now, hourly, fiveDay,}) => {
  const textCity = useSelector((state: RootState) => state.city.name)
  const { city } = useParams<{city?: string}>();
  const navigate = useNavigate();
  const { data } = useGetWeatherByCityQuery(
    textCity || city || '',
    {
      skip: !textCity && !city,
      refetchOnMountOrArgChange: true
    }
  )
  const [fetchGeoData] = useLazyGetReverseGeokodingQuery()

  const getGeolocationAndRedirect = useCallback(async () => {
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
  
            const geoResult = await fetchGeoData({
              lat: latitude,
              lon: longitude
            })
            
            if (geoResult.data?.[0]?.name) {
              const cityName = geoResult.data[0].name
              navigate(`/weatherHourly/${cityName}`)
            }
          }
        )
      } else {
        console.log("Геолокация не поддерживается браузером");
      }
    } catch (err) {
      console.error(`Ошибка в геолокации`)
    }
  }, [navigate])

  useEffect(() => {
    if (!textCity && !city) {
      getGeolocationAndRedirect()
    }
  }, [textCity, city]);


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