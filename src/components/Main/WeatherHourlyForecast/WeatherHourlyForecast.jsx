import { useState, useEffect, useCallback, useContext } from "react";
import WeatherIcon from "../../WeatherIcon/WeatherIcon";
import styles from './WeatherHourlyForecast.module.css';
import { TemperatureContext } from '../../TemperatureContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules'; // Import only needed modules

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar'; // Keep scrollbar if you want it

export default function WeatherHourlyForecast({ data, }) {
    const [hourlyForecast, setHourlyForecast] = useState([]);
    const { getTemperature } = useContext(TemperatureContext);

    const procces24HourForecast = useCallback(() => {
        const now = new Date();
        const forecastEnd = new Date(now.getTime() + 24 * 60 * 60 * 1000);
        const hourlyData = [];

        if (!data || !data.list) {
            console.error("Data не передалась");
            return [];
        }

        const relevantForecast = data.list.filter((item) => {
            const itemDate = new Date(item.dt_txt);
            return itemDate >= now && itemDate <= forecastEnd;
        });

        if (relevantForecast.length > 0) {
            relevantForecast.forEach((forecast) => {
                hourlyData.push({
                    time: new Date(forecast.dt_txt).toLocaleTimeString("ru-Ru", {
                        hour: "2-digit",
                        minute: "2-digit"
                    }),
                    temperature: forecast.main.temp,
                    weather: forecast.weather[0].main,
                });
            });
        } else {
            console.warn('нет прогнозов на следующие 24 часа');
            return [];
        }

        console.log('Прогноз на 24 часа: ', hourlyData);
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
                        slidesPerView={'auto'}  // Auto slides per view
                        freeMode={true}      // Enable free mode
                        loop={false}          // Disable loop (optional, if you don't want infinite scroll)
                        navigation={true}     // Show navigation arrows
                        modules={[Navigation, A11y]} // Pass modules here.  Removed Pagination and Scrollbar
                        scrollbar={false}      // Remove scrollbar
                    >
                        {hourlyForecast.map((forecast, index) => (
                            <SwiperSlide className={styles.hourlyForecast} key={index}>
                                <div className={styles.hourlyDate}>{forecast.time}</div>
                                <div className={styles.hourlyWeatherIcon}><WeatherIcon width={'55px'} weather={forecast.weather} /></div>
                                <div className={styles.hourlyTemperature}>{getTemperature(Math.round(forecast.temperature - 273))}</div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            ) : ''}
        </>
    );
}

