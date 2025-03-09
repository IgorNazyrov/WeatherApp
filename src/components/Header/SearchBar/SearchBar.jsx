import { useContext } from "react"
import styles from './SearchBar.module.css'
import { CityContext } from "../../CityContext"

export default function SearchBar ({className}) {
  const {textCity, setTextCity} = useContext(CityContext)

  const content = useContext[CityContext]

  console.log(content)

  return (
    <>
      <input type="text" value={textCity} onChange={(e) => setTextCity(e.target.value)} className={`${styles.searchInput} ${className}`} placeholder="Поиск города..."/>
    </>
  )
}