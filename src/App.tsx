import './styles/fonts.css'
import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import PageHourlyForecast from './pages/PageHourlyForecast/PageHourlyForecast'
import PageWeatherNow from './pages/PageWeatherNow/PageWeatherNow'
import Page5DayForecast from './pages/Page5DayForecast/Page5DayForecast'

function App() {

  return (
    <>
    {/* <ThemeProvider> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/weatherNow/:city' element={<PageWeatherNow/>}/>
        <Route path='/weatherHourly/:city' element={<PageHourlyForecast/>}/>
        <Route path='/weather5DayForecast/:city' element={<Page5DayForecast/>}/>
      </Routes>
    {/* </ThemeProvider> */}
    </>
  )
}

export default App
