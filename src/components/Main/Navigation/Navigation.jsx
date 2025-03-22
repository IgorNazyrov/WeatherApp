import { useState, useEffect, useContext } from 'react';
import styles from './Navigation.module.css'
import { TemperatureContext } from '../../TemperatureContext';
import { Link, useLocation, useParams } from 'react-router-dom';
import { ThemeContext } from '../../ThemeContext';

export default function Navigation ({data}) {
  const {getTemperature} = useContext(TemperatureContext)
  const [foresactNow, setForecastNow] = useState(null);
  const {theme} = useContext(ThemeContext)
  const location = useLocation()
  const { city: cityParam } = useParams()
  
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
        temperature: closestForecast.main.temp,
        temperatureFeels: closestForecast.main.feels_like,
        weather: closestForecast.weather[0].description,
        windSpeed: closestForecast.wind.speed,
        city: data.city.name,

      };
      console.log("Прогноз сейчас: ", weatherNow);
      setForecastNow(weatherNow)
    } else {
      console.warn("Нет прогнозов");
      setForecastNow(null)
    }
  };

  useEffect(() => {
    if (data) {
      proccesWeatherNow(data)
    }
  }, [data]);

  const today = new Date()
  const dayOfWeek = today.toLocaleDateString('ru-Ru', {weekday: 'short'})
  const dateString = today.toLocaleDateString('ru-RU', {day: 'numeric', month: 'short'})
  const timeString = today.toLocaleTimeString('ru-RU', {hour: 'numeric', minute: 'numeric'})
  const timeDate =`${dayOfWeek}  ${dateString}  ${timeString}`  

  return (
    <>
      {foresactNow ? (
        <div className={styles.containerNavigation}>
          <div className={styles.containerShortNowWeather}>
            <div className={styles.timeDate}>{timeDate.toUpperCase()}</div>
            <div className={styles.cityWeatherTemperature}>{foresactNow.city} {foresactNow.weather}, {getTemperature(Math.round(foresactNow.temperature - 273))}</div>
            <div className={styles.feelsLike}>ПО ОЩУЩЕНИЮ {getTemperature(Math.round(foresactNow.temperatureFeels - 273))}, ВЕТЕР: {foresactNow.windSpeed} М/С</div>
          </div>
          <div className={styles.containerH2Nav}>
            <h2 className={styles.h2Title}>Погода в {foresactNow.city} сегодня</h2>
            <div className={styles.containerLinks}> 
              <Link className={`${styles.link} ${theme === 'light' ? '' : styles.linkDark} ${location.pathname.startsWith('/weatherNow/') ? styles.linkActive : ''}`} to={`/weatherNow/${cityParam}`}>Сейчас</Link>
              <Link className={`${styles.link} ${theme === 'light' ? '' : styles.linkDark} ${location.pathname.startsWith('/weatherHourly/') ? styles.linkActive : ''}`} to={`/weatherHourly/${cityParam}`}>Сегодня</Link>
              <Link className={`${styles.link} ${theme === 'light' ? '' : styles.linkDark} ${location.pathname.startsWith('/weather5DayForecast/') ? styles.linkActive : ''}`} to={`/weather5DayForecast/${cityParam}`}>5 дней</Link>
            </div>
          </div>
        </div>
          ) : ''
        }
    </>
  )
}