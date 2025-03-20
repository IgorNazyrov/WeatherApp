import { useState, useEffect, useContext } from "react";
import { TemperatureContext } from "../../TemperatureContext";
import styles from "./WeatherNow.module.css";
import WeatherIcon from "../../WeatherIcon/WeatherIcon";

export default function WeatherNow({ data }) {
  const { getTemperature } = useContext(TemperatureContext);
  const [foresactNow, setForecastNow] = useState(null);

  const capitalize = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const proccesWeatherNow = () => {
    if (!data || !data.list) {
      console.error("Data не передалась");
      return null;
    }

    const now = new Date();
    const forecasts = data.list;

    let closestForecast = null;
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
      const weatherNow = {
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
      console.log("Прогноз сейчас: ", weatherNow);
      setForecastNow(weatherNow);
    } else {
      console.warn("Нет прогнозов");
      setForecastNow(null);
    }
  };

  useEffect(() => {
    if (data) {
      proccesWeatherNow(data);
    }
  }, [data]);

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
      {foresactNow ? (
        <div className={styles.containerWeatherNow}>
          <div className={styles.timeDate}>{timeDate.toUpperCase()}</div>
          <div className={styles.temperature}>
            {getTemperature(Math.round(foresactNow.temperature - 273))}
          </div>
          <div className={styles.temperatureFeels}>
            По ощущению{" "}
            {getTemperature(Math.round(foresactNow.temperatureFeels - 273))}
          </div>
          <div className={styles.containerWeather}>
            <div className={styles.containerWeatherIcon}>
              <WeatherIcon width={'5rem'} weather={foresactNow.weather} />
            </div>
            <div className={styles.weatherDescription}>{foresactNow.weatherDescription}</div>
          </div>
          <div className={styles.listItems}>
            <div className={styles.item}>
              <div className={styles.itemTitle}>Ветер</div>
              <div className={styles.itemInformation}>
                <div className={styles.itemValue}>{foresactNow.windSpeed} </div>
                <div className={styles.itemCharacteristic}>м/с</div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.itemTitle}>Давление</div>
              <div className={styles.itemInformation}>
                <div className={styles.itemValue}>{foresactNow.pressure}</div>
                <div className={styles.itemCharacteristic}>
                  мм. <br /> рт. ст.
                </div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.itemTitle}>Влажность</div>
              <div className={styles.itemInformation}>
                <div className={styles.itemValue}>{foresactNow.humidity}</div>
                <div className={styles.itemCharacteristic}>%</div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.itemTitle}>Видимость</div>
              <div className={styles.itemInformation}>
                <div className={styles.itemValue}>{foresactNow.visibility}</div>
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
