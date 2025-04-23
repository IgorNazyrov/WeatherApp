import SearchBar from "./SearchBar/SearchBar"
import ToggleThemes from "./ToggleThemes/ToggleThemes";
import ToggleTemperature from "./ToggleTemperature/ToggleTemperature";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect, FC } from "react";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import { useSelector } from "react-redux";
import { RootState } from "app/store";

const Header: FC = () => {
  const theme = useSelector((state: RootState) => state.theme.current)
  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 767px)").matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)")
    const handleMediaChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener("change", handleMediaChange)

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange)
    }
  }, []);

  return (
    <>
      <header className={styles.container}>
        <Link to={"/"} className={styles.logoContainer}>
          <div className={styles.svgContainer}>
          <WeatherIcon weather={"Clouds"} width={'2.5em'}/>
          </div>
          <h1
            className={`${styles.headerLogo} ${
              theme === "light" ? "" : styles.headerDarkLogo
            }`}
          >
            WeatherApp
          </h1>
        </Link>
        {isMobile ? (
          <>
            <SearchBar />
            <ToggleThemes />
            <ToggleTemperature />
          </>
        ) : (
          <div className={styles.usersTools}>
            <SearchBar />
            <ToggleThemes />
            <ToggleTemperature />
          </div>
        )}
      </header>
    </>
  );
}

export default Header