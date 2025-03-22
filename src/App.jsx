import './styles/fonts.css'
import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import { TemperatureProvider } from './components/TemperatureContext'
import { CityProvider } from './components/CityContext'
import { ThemeProvider } from './components/ThemeContext'
import PageHourlyForecast from './pages/PageHourlyForecast/PageHourlyForecast'
import PageWeatherNow from './pages/PageWeatherNow/PageWeatherNow'
import Page5DayForecast from './pages/Page5DayForecast/Page5DayForecast'

function App() {

  return (
    <>
    <ThemeProvider>
    <CityProvider>
    <TemperatureProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/weatherNow/:city' element={<PageWeatherNow/>}/>
        <Route path='/weatherHourly/:city' element={<PageHourlyForecast/>}/>
        <Route path='/weather5DayForecast/:city' element={<Page5DayForecast/>}/>
      </Routes>
    </TemperatureProvider>
    </CityProvider>
    </ThemeProvider>
    </>
  )
}

export default App
