import { createRoot } from 'react-dom/client'
import App from './App.js'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import ThemeProvider from './app/ThemeProvider.js'

const divRoot = document.getElementById('root')

if (divRoot) {
  createRoot(divRoot).render(
    <BrowserRouter basename="/WeatherApp">
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
    </BrowserRouter>
  )
} 