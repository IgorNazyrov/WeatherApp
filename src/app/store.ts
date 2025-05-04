import { configureStore } from "@reduxjs/toolkit";
import { cityReducer } from "../features/citySlice";
import { temperatureReducer } from "../features/temperatureSlice";
import { themeReducer } from "../features/themeSlice";
import { weatherApi } from "../features/weatherApi";

export const store = configureStore({
  reducer: {
    city: cityReducer,
    temperature: temperatureReducer,
    theme: themeReducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(weatherApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch