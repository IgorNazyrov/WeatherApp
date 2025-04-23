import { createSlice } from "@reduxjs/toolkit";

type TemperatureUnit = "celsius" | "fahrenheit"

interface TemperatureState {
  unit: TemperatureUnit
}

const getInitialState = (): TemperatureUnit => {
  const savedUnit = localStorage.getItem('temperature')
  return savedUnit === 'fahrenheit' ? 'fahrenheit' : 'celsius'
}

const initialState: TemperatureState = { 
  unit: getInitialState()
}

const temperatureSlice = createSlice({
  name: 'temperature',
  initialState,
  reducers: {
    toggleTemperature: (state) => {
      state.unit = state.unit === 'celsius' ? 'fahrenheit' : 'celsius'
      localStorage.setItem('temperature', state.unit)
    },
  }
})

export const formatTemperature = (celsiusTemp: number, unit: TemperatureUnit): string => {
  if (unit === 'celsius') {
    if (celsiusTemp === 0) return `0°C`
    return `${celsiusTemp > 0 ? '+' : ''}${Math.round(celsiusTemp)}°C`
  } else {
    const fahrenheitTemp = (celsiusTemp * 9/5) + 32
    if (fahrenheitTemp === 0) return `0°F`
    return `${fahrenheitTemp > 0 ? '+' : ''}${Math.round(fahrenheitTemp)}°F`
  }
}

export const { toggleTemperature } = temperatureSlice.actions
export const temperatureReducer = temperatureSlice.reducer