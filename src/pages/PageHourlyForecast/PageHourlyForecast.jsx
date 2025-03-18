import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'

export default function PageHourlyForecast () {
  return (
    <>
      <Header/>
      <Main now={true} hourly={true}/>
    </>
  )
}