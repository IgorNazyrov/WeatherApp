import { configureStore } from "@reduxjs/toolkit";
import { cityReducer } from "../features/citySlice";
import { temperatureReducer } from "../features/temperatureSlice";
import { themeReducer } from "../features/themeSlice";

export const store = configureStore({
  reducer: {
    city: cityReducer,
    temperature: temperatureReducer,
    theme: themeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch