import './styles/fonts.css'
import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import { TemperatureProvider } from './components/TemperatureContext'
import { CityProvider } from './components/CityContext'
import { ThemeProvider } from './components/ThemeContext'

function App() {

  return (
    <>
    <ThemeProvider>
    <CityProvider>
    <TemperatureProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </TemperatureProvider>
    </CityProvider>
    </ThemeProvider>
    </>
  )
}

export default App
