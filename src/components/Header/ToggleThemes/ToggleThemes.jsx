import { useState, useEffect } from "react";
import Moon from "../../../Icons/Moon/Moon";
import styles from "../../../Icons/Moon/Moon.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import './ToggleThemes.module.css'

export default function ToggleThemes () {
  const {theme, toggleTheme} = useContext(ThemeContext)


  return (
    <>
      {theme === 'light' ? (
        <Moon alt="Иконка тёмной Луны" onClick={toggleTheme} style={{cursor: 'pointer'}}/>
      ) : (
        <Moon alt="Иконка жёлтой Луны" className={styles.moonDarkTheme} onClick={toggleTheme} style={{cursor: 'pointer'}}/>
      )}
    </>
  )
} 