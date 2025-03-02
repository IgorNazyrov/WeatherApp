import { useState, useEffect } from "react";
import Moon from "../../../Icons/Moon/Moon";
import styles from "../../../Icons/Moon/Moon.module.css";

export default function ToggleThemes () {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })

  const toggle = () => {
    setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light' )
  }

  useEffect(() => {
    localStorage.setItem('theme', theme)
    if (theme === 'light') {
      document.documentElement.classList.add('light-theme')
      document.documentElement.classList.remove('dark-theme')
    } else {
      document.documentElement.classList.add('dark-theme')
      document.documentElement.classList.remove('light-theme')
    }
  }, [theme])

  const iconColor = theme === 'light' ? 'black' : 'white'
  return (
    <>
      {theme === 'light' ? (
        <Moon alt="Иконка тёмной Луны" onClick={toggle} style={{cursor: 'pointer'}}/>
      ) : (
        <Moon alt="Иконка жёлтой Луны" className={styles.moonDarkTheme} onClick={toggle} style={{cursor: 'pointer'}}/>
      )}
    </>
  )
}