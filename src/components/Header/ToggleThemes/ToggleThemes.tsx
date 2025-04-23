import Moon from "../../../Icons/Moon/Moon";
import styles from "../../../Icons/Moon/Moon.module.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../../features/themeSlice";
import './ToggleThemes.module.css'
import { RootState } from "app/store";
import { FC } from "react";

const ToggleThemes: FC = () => {
  const dispatch = useDispatch()
  const currentTheme = useSelector((state: RootState) => state.theme.current)

  return (
    <>
      {currentTheme === 'light' ? (
        <Moon onClick={() => dispatch(toggleTheme())}/>
      ) : (
        <Moon className={styles.moonDarkTheme} onClick={() => dispatch(toggleTheme())}/>
      )}
    </>
  )
}

export default ToggleThemes