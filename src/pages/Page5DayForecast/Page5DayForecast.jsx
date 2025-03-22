import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'

export default function Page5DayForecast () {
  return (
    <>
      <Header/>
      <Main now={true} fiveDay={true}/>
    </>
  )
}