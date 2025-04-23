import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const WeatherApi = createApi({
  reducerPath: 'WeatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.openweathermap.org/data/2.5'
  }),

  endpoints: (builder) => ({
    getWeather: builder.query({
      query: (city, apiKey) => ({
        url: '/forecast',
        params: {
          q: city,
          lang: 'ru',
          units: 'metric',
          appid: apiKey,
        }
      })
    })
  })
})

export const { useGetWeather } = WeatherApi