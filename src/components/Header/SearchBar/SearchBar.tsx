import { FC, useState } from "react";
import styles from "./SearchBar.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateCity } from "../../../features/citySlice";

const SearchBar: FC = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue !== '') {
      dispatch(updateCity(inputValue))
      setInputValue('')
      navigate(`/weatherHourly/${inputValue}`)
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

export default SearchBar