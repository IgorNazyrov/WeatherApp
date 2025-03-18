import { useContext } from "react"
import styles from './SearchBar.module.css'
import { CityContext } from "../../CityContext"

export default function SearchBar () {
  const {textCity, setTextCity} = useContext(CityContext)

  return (
    <>
      <input type="text" value={textCity} onChange={(e) => setTextCity(e.target.value)} className={styles.searchInput} placeholder="Поиск города..."/>
    </>
  )
}