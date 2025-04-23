import { useState, useEffect, useCallback, FC } from "react";
import WeatherIcon from "../../WeatherIcon/WeatherIcon";
import styles from "./WeatherHourlyForecast.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";
import "swiper/css";
import { useSelector } from "react-redux";
import { formatTemperature } from "../../../features/temperatureSlice";
import { RootState } from "app/store";
import { HourlyForecastItem, WeatherForecast, WeatherItem } from "types";

const WeatherHourlyForecast: FC<WeatherItem> = ({ data }) => {
  const [hourlyForecast, setHourlyForecast] = useState<HourlyForecastItem[]>([]);
  const temperatureUnit = useSelector((state: RootState) => state.temperature.unit)

  const procces24HourForecast = useCallback(() => {
    const now = new Date();
    const forecastEnd = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    const hourlyData: HourlyForecastItem[] = [];

    if (!data || !data.list) {
      console.error("Data не передалась");
      return [];
    }

    const relevantForecast = data.list.filter((item: WeatherForecast) => {
      const itemDate = new Date(item.dt_txt);
      return itemDate >= now && itemDate <= forecastEnd;
    });

    if (relevantForecast.length > 0) {
      relevantForecast.forEach((forecast: WeatherForecast) => {
        hourlyData.push({
          time: new Date(forecast.dt_txt).toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
          }),
          temperature: forecast.main.temp,
          weather: forecast.weather[0].main,
        });
      });
    } else {
      console.warn("нет прогнозов на следующие 24 часа");
      return [];
    }

    // console.log("Прогноз на 24 часа: ", hourlyData);
    return hourlyData;
  }, [data]);

  useEffect(() => {
    const forecast = procces24HourForecast();
    setHourlyForecast(forecast);
  }, [procces24HourForecast]);

  return (
    <>
      {hourlyForecast ? (
        <div className={styles.containerHourly}>
          <h2 className={styles.h2Hourly}>24-часовой прогноз</h2>
          <Swiper
            className={styles.listHourlyForecasts}
            spaceBetween={10}
            slidesPerView={"auto"}
            freeMode={true}
            loop={false}
            modules={[A11y]}
            speed={1000}
            wrapperClass={styles.mySwiperClass}
          >
            {hourlyForecast.map((forecast, index) => (
              <SwiperSlide className={styles.hourlyForecast} key={index}>
                <div className={styles.hourlyDate}>{forecast.time}</div>
                <div className={styles.hourlyWeatherIcon}>
                  <WeatherIcon width={"55px"} weather={forecast.weather} />
                </div>
                <div className={styles.hourlyTemperature}>
                  {formatTemperature((forecast.temperature - 273), temperatureUnit)}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default WeatherHourlyForecast