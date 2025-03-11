import { useState, useEffect, useContext} from "react";
import { TemperatureContext } from "../../TemperatureContext";

export default function WeatherNow({ data }) {
  const {temperature, getTemperature} = useContext(TemperatureContext)
  const [foresactNow, setForecastNow] = useState(null);
  console.log(new Date)

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
        weather: closestForecast.weather[0].description,
        humidity: closestForecast.main.humidity,
        windSpeed: closestForecast.wind.speed,
        pressure: closestForecast.main.pressure,
        visibility: closestForecast.visibility,
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
        <div>
          <div>{timeDate.toUpperCase()}</div>
          <div>{foresactNow.city} {foresactNow.weather}, {getTemperature(Math.round(foresactNow.temperature - 273))}</div>
          <div>ПО ОЩУЩЕНИЮ {getTemperature(Math.round(foresactNow.temperature - 273))}, ВЕТЕР: {foresactNow.windSpeed} М/С</div>
          {/* <div className="city">
            <p>{foresactNow.city}</p>
            <p>{new Date()}</p>
          </div>
          <div>
            {foresactNow.temperature}
          </div> */}
        </div>
      ) : ''}
    </>
  );
}
