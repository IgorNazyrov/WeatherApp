import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store";

interface ThemeProviderProps {
  children: React.ReactNode
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const theme = useSelector((state: RootState) => state.theme.current)

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light-theme')
      document.documentElement.classList.remove('dark-theme')
    } else {
      document.documentElement.classList.add('dark-theme')
      document.documentElement.classList.remove('light-theme')
    }
  }, [theme])

  return (
    <>
    {children}
    </>
  )
}

export default ThemeProvider