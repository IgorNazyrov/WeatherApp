import { useState, useEffect, createContext } from "react";

export const TemperatureContext = createContext()

export const TemperatureProvider = ({children}) => {
  const [temperature, setTemperature] = useState(() => {
    return localStorage.getItem('temperature') || 'celsius'
  })

  useEffect(() => {
    localStorage.setItem('temperature', temperature)
  }, [temperature])

  const toggleTemperature = () => {
    setTemperature((prevTemperature) => prevTemperature === 'celsius' ? 'fahrenheit' : 'celsius')
  }

  const getTemperature = (celsiusTemperature) => {
    if (temperature === 'celsius') {
      if (celsiusTemperature === 0) {
        return `${celsiusTemperature}°C`
      } else if (celsiusTemperature < 0) {
        return `${celsiusTemperature}°C`
      } else {
        return `+${celsiusTemperature}°C`
      }
    } else {
      const fahrenheitTemperature = (celsiusTemperature * 9 / 5) + 32
      if (fahrenheitTemperature === 0) {
        return `${fahrenheitTemperature}°F`
      } else if (fahrenheitTemperature < 0) {
        return `-${fahrenheitTemperature}°F`
      } else {
        return `${fahrenheitTemperature}°F`
      }
    }
  }
  return (
    <TemperatureContext.Provider value={{temperature, toggleTemperature, getTemperature}}>
      {children}
    </TemperatureContext.Provider>
  )
}