import { configureStore } from "@reduxjs/toolkit";
import { WeatherApi } from "../features/WeatherApi";
import { cityReducer } from "../features/citySlice";
import { temperatureReducer } from "../features/temperatureSlice";
import { themeReducer } from "../features/themeSlice";

export const store = configureStore({
  reducer: {
    [WeatherApi.reducerPath]: WeatherApi.reducer,
    city: cityReducer,
    temperature: temperatureReducer,
    theme: themeReducer,
  },

  middleware: (getDefaultMidle) => 
    getDefaultMidle()
      .concat(WeatherApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch