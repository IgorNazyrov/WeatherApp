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
      return `${celsiusTemperature}°C`
    } else {
      const fahrenheitTemperature = (celsiusTemperature * 9 / 5) + 32
      return `${fahrenheitTemperature}  `
    }
  }
  return (
    <TemperatureContext.Provider value={{temperature, toggleTemperature, getTemperature}}>
      {children}
    </TemperatureContext.Provider>
  )
}