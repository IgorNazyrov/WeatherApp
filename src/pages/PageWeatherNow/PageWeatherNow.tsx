import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'

export default function PageWeatherNow () {
  return (
    <>
      <Header/>
      <Main now={true} />
    </>
  )
}