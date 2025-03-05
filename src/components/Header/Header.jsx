import SearchBar from "./SearchBar/SearchBar"
import ToggleThemes from "./ToggleThemes/ToggleThemes"
import ToggleTemperature from "./ToggleTemperature/ToggleTemperature"
import styles from './Header.module.css'
import { Link } from "react-router-dom"

export default function Header () {
  return (
    <>
    <header>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <div className={styles.svgContainer}>
            <svg
            version="1.1"
            id="_x32_"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
            fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <path
                    className={styles.blueIcon}
                    d="M416.296,232.076c-0.042,0-0.079,0.009-0.121,0.009c0.056-1.594,0.121-3.187,0.121-4.79 c0-76.646-62.131-138.771-138.763-138.771c-71.785,0-130.854,54.521-138.03,124.419c-10.066-3.113-20.755-4.791-31.842-4.791 C48.207,208.152,0,256.354,0,315.814c0,59.46,48.207,107.662,107.662,107.662h308.634c52.852,0,95.704-42.842,95.704-95.695 C512,274.919,469.148,232.076,416.296,232.076z"
                    ></path>
                </g>
              </g>
            </svg>
          </div>
        <Link to={'/'} className={styles.headerLogo}>WeatherApp</Link>
        </div>
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