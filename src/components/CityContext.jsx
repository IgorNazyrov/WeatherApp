import { useState, createContext } from "react";

export const CityContext = createContext()

export const CityProvider = ({children}) => {
  const [textCity, setTextCity] = useState('')

  return (
    <CityContext.Provider value={{textCity, setTextCity}}>
      {children}
    </CityContext.Provider>
  )
}
