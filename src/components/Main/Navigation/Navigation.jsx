import { useState, useEffect, useContext, useCallback } from 'react';
import styles from './Navigation.module.css'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ThemeContext } from '../../ThemeContext';

export default function Navigation ({data}) {
  const [foresactNow, setForecastNow] = useState(null);
  const {theme} = useContext(ThemeContext)
  const location = useLocation()
  const { city: cityParam } = useParams()
  
  const proccesWeatherNow = useCallback(() => {
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
      // console.log("Прогноз сейчас: ", weatherNow);
      setForecastNow(weatherNow)
    } else {
      console.warn("Нет прогнозов");
      setForecastNow(null)
    }
  }, [data])

  useEffect(() => {
    if (data) {
      proccesWeatherNow(data)
    }
  }, [data, proccesWeatherNow]);

  const navigate = useNavigate()
  
  const handleLinkClick = (path) => {
    navigate(`/${path}?parametr=${Date.now()}`)
  }

  return (
    <>
      {foresactNow ? (
        <div className={styles.containerNavigation}>
          <div className={styles.containerH2Nav}>
            <h2 className={styles.h2Title}>Погода в {foresactNow.city} сегодня</h2>
            <div className={styles.containerLinks}> 
              <div to='#' className={`${styles.link} ${theme === 'light' ? '' : styles.linkDark} ${location.pathname.startsWith('/weatherNow/') ? styles.linkActive : ''}`} onClick={(e) => {e.preventDefault(); handleLinkClick(`weatherNow/${cityParam}`)}}>Сейчас</div>
              <div to='#' className={`${styles.link} ${theme === 'light' ? '' : styles.linkDark} ${location.pathname.startsWith('/weatherHourly/') ? styles.linkActive : ''}`} onClick={(e) => {e.preventDefault(); handleLinkClick(`weatherHourly/${cityParam}`)}}>Сегодня</div>
              <div to='#' className={`${styles.link} ${theme === 'light' ? '' : styles.linkDark} ${location.pathname.startsWith('/weather5DayForecast/') ? styles.linkActive : ''}`} onClick={(e) => {e.preventDefault(); handleLinkClick(`weather5DayForecast/${cityParam}`)}}>5 дней</div>
            </div>
          </div>
        </div>
          ) : ''
        }
    </>
  )
}