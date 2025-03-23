import { useContext } from "react";
import { TemperatureContext } from "../../TemperatureContext";
import styles from './ToggleTemperature.module.css'

export default function ToggleTemperature () {
  const {temperature, toggleTemperature} = useContext(TemperatureContext) 

  const handleToggleTemperature = (unit) => {
    toggleTemperature(unit)
  }

  return (
    <>
      <div className={styles.containerTemperature} onClick={handleToggleTemperature}>
        {temperature === "celsius" ? "°C" : "°F"}
      </div>
    </>
  )
} 