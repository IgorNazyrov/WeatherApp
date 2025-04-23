import styles from './ToggleTemperature.module.css'
import { toggleTemperature } from "../../../features/temperatureSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from 'app/store';
import { FC } from 'react';

const ToggleTemperature: FC = () => {
  const dispatch = useDispatch()
  const TemperatureUnit = useSelector((state: RootState) => state.temperature.unit)

  const handleToggle = () => {
    dispatch(toggleTemperature())
  }

  return (
    <>
      <div className={styles.containerTemperature} onClick={handleToggle}>
        {TemperatureUnit === "celsius" ? "°C" : "°F"}
      </div>
    </>
  )
} 

export default ToggleTemperature