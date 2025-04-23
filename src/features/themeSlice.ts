import { createSlice } from "@reduxjs/toolkit";

type ThemeCurrent = 'light' | 'dark'

interface ThemeState {
  current: ThemeCurrent
}

const getInitialState = (): ThemeCurrent => {
  const savedTheme = localStorage.getItem('theme')
  return savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'light'
}

const initialState: ThemeState = {
  current: getInitialState()
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.current = state.current === 'light' ? 'dark' : 'light'
      
      localStorage.setItem('theme', state.current)
      
      if (state.current === 'light') {
        document.documentElement.classList.add('light-theme')
        document.documentElement.classList.remove('dark-theme')
      } else {
        document.documentElement.classList.add('dark-theme')
        document.documentElement.classList.remove('light-theme')
      }
    },
  }
})

export const {toggleTheme} = themeSlice.actions
export const themeReducer = themeSlice.reducer