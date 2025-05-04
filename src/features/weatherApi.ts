import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GeoData, WeatherData } from 'types'
const apiKey = import.meta.env.VITE_API_KEY as string

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.openweathermap.org/data/2.5/',
  }),
  endpoints: (builder) => ({
    getWeatherByCity: builder.query<WeatherData, string>({
      query: (city: string) => ({
        url: 'forecast',
        params: {
          q: city,
          appid: apiKey,
          units: 'metric',
          lang: 'ru',
          cnt: 40
        }
      }),
      keepUnusedDataFor: 300
    }),
    getReverseGeokoding: builder.query<GeoData[], {lat: number; lon: number}>({
      query: ({lat, lon}) => ({
        url: 'https://api.openweathermap.org/geo/1.0/reverse',
        params: {
          lat,
          lon,
          limit: 1,
          appid: apiKey
        }
      })
    })
  })
})

export const { 
  useGetWeatherByCityQuery, useGetReverseGeokodingQuery, useLazyGetReverseGeokodingQuery, useLazyGetWeatherByCityQuery
} = weatherApi