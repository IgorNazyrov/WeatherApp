import SearchBar from "./SearchBar/SearchBar"
import ToggleThemes from "./ToggleThemes/ToggleThemes"
import ToggleTemperature from "./ToggleTemperature/ToggleTemperature"
import styles from './Header.module.scss'
import { Link } from "react-router-dom"

export default function Header () {
  return (
    <>
    <header>
      <div className={styles.container}>
        <Link to={'/'} className={styles.headerLogo}>WeatherApp</Link>
        <div className={styles.usersTools}>
          <SearchBar/>
          <ToggleThemes/>
          <ToggleTemperature/>
        </div>
      </div>
    </header>
    </>
  )
}