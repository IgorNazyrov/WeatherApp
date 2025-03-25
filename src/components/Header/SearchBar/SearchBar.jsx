import { useContext, useState } from "react";
import styles from "./SearchBar.module.css";
import { CityContext } from "../../CityContext";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const { setTextCity } = useContext(CityContext);
  const [inputValue, setInputValue] = useState('')
  const navigate = useNavigate()

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue !== '') {
      setTextCity(inputValue);
      setInputValue('')
      navigate(`/weatherHourly/${inputValue}`)
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
