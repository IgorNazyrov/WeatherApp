import { useContext, useState } from "react";
import styles from "./SearchBar.module.css";
import { CityContext } from "../../CityContext";

export default function SearchBar() {
  const { textCity, setTextCity } = useContext(CityContext);
  const [inputValue, setInputValue] = useState('')

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setTextCity(inputValue);
      setInputValue('')
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className={styles.searchInput}
        placeholder="Поиск города..."
      />
    </>
  );
}
