import { useState, useEffect, useCallback, FC } from "react";
import styles from "./WeatherNow.module.css";
import WeatherIcon from "../../WeatherIcon/WeatherIcon";
import { useSelector } from "react-redux";
import { formatTemperature } from "../../../features/temperatureSlice";
import { WeatherData, WeatherItem, WeatherForecast, WeatherNowData } from "types";
import { RootState } from "app/store";

const WeatherNow: FC<WeatherItem> = ({ data }) => {
  const temperatureUnit = useSelector((state: RootState) => state.temperature.unit)
  const [forecastNow, setForecastNow] = useState<WeatherNowData | null>(null);

  let closestForecast: WeatherForecast | null = null;
  const proccesWeatherNow = useCallback(() => {
    if (!data || !data.list) {
      console.error("Data не передалась");
      return
    }

    const now = new Date();
    const forecasts = data.list;

    let minTimeDiff = Infinity;

    forecasts.forEach((forecast) => {
      const itemDate = new Date(forecast.dt_txt);
      const timeDiff = Math.abs(itemDate.getTime() - now.getTime());

      if (timeDiff < minTimeDiff) {
        minTimeDiff = timeDiff;
        closestForecast = forecast;
      }
    });

    if (closestForecast) {
      const weatherNow: WeatherNowData = {
        time: new Date(closestForecast.dt_txt).toLocaleDateString("ru-Ru", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        temperature: closestForecast.main.temp,
        temperatureFeels: closestForecast.main.feels_like,
        weatherDescription: closestForecast.weather[0].description,
        weather: closestForecast.weather[0].main,
        humidity: closestForecast.main.humidity,
        windSpeed: closestForecast.wind.speed,
        pressure: closestForecast.main.pressure,
        visibility: closestForecast.visibility,
        city: data.city.name,
      };
      // console.log("Прогноз сейчас: ", weatherNow);
      setForecastNow(weatherNow);
    } else {
      console.warn("Нет прогнозов");
      setForecastNow(null);
    }
  }, [data])

  useEffect(() => {
    if (data) { 
      proccesWeatherNow();
    }
  }, [data, proccesWeatherNow]);

  const today = new Date();
  const dayOfWeek = today.toLocaleDateString("ru-Ru", { weekday: "short" });
  const dateString = today.toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "short",
  });
  const timeString = today.toLocaleTimeString("ru-RU", {
    hour: "numeric",
    minute: "numeric",
  });
  const timeDate = `${dayOfWeek}  ${dateString}  ${timeString}`;
  return (
    <>
      {forecastNow ? (
        <div className={styles.containerWeatherNow}>
          <div className={styles.timeDate}>{timeDate.toUpperCase()}</div>
          <div className={styles.temperature}>
            {formatTemperature((forecastNow.temperature), temperatureUnit)}
          </div>
          <div className={styles.temperatureFeels}>
            По ощущению{" "}
            {formatTemperature((forecastNow.temperatureFeels), temperatureUnit)}
          </div>
          <div className={styles.containerWeather}>
            <div className={styles.containerWeatherIcon}>
              <WeatherIcon width={'5rem'} weather={forecastNow.weather} />
            </div>
            <div className={styles.weatherDescription}>{forecastNow.weatherDescription}</div>
          </div>
          <div className={styles.listItems}>
            <div className={styles.item}>
              <div className={styles.itemTitle}>Ветер</div>
              <div className={styles.itemInformation}>
                <div className={styles.itemValue}>{forecastNow.windSpeed} </div>
                <div className={styles.itemCharacteristic}>м/с</div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.itemTitle}>Давление</div>
              <div className={styles.itemInformation}>
                <div className={styles.itemValue}>{forecastNow.pressure}</div>
                <div className={styles.itemCharacteristic}>
                  мм. <br /> рт. ст.
                </div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.itemTitle}>Влажность</div>
              <div className={styles.itemInformation}>
                <div className={styles.itemValue}>{forecastNow.humidity}</div>
                <div className={styles.itemCharacteristic}>%</div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.itemTitle}>Видимость</div>
              <div className={styles.itemInformation}>
                <div className={styles.itemValue}>{forecastNow.visibility}</div>
                <div className={styles.itemCharacteristic}>м</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default WeatherNow