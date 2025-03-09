import { useState, useEffect, } from "react";

export default function WeatherNow({ data }) {
  const [foresactNow, setForecastNow] = useState(null);

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
        weather: closestForecast.weather[0].main,
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
  return (
    <>
      {/* {foresactNow ? (
        <div className="city">
          <p>{foresactNow.city}</p>
          <p>{new Date()}</p>
        </div>
        <div>
          {foresactNow.temperature}
        </div>
      ) : ''} */}
    </>
  );
}
