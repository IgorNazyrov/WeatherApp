import SearchBar from "./SearchBar/SearchBar"
import ToggleThemes from "./ToggleThemes/ToggleThemes"
import ToggleTemperature from "./ToggleTemperature/ToggleTemperature"
import styles from './Header.module.scss'

export default function Header () {
  return (
    <>
    <header>
      <div className={styles.container}>
        <div className={styles.headerLogo}>WeatherApp</div>
        <SearchBar/>
        <ToggleThemes/>
        <ToggleTemperature/>
      </div>
    </header>
    </>
  )
}