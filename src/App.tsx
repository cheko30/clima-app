import styles from "./App.module.css"
import Alert from "./components/Alert/Alert"
import Form from "./components/form/Form"
import Spinner from "./components/Spinner/Spinner"
import WeatherDetail from "./components/WeatherDetail/WeatherDetail"
import useWeather from "./hooks/useWeather"

function App() {

  const { fechtWeather, loading, notFound, weather, hasWeatherData } = useWeather()
  return (
    <>
      <h1 className={styles.title}>Buscador Clima</h1>
      <div className={styles.container}>
        <Form 
          fechtWeather={fechtWeather}
        />
        {loading && <Spinner />}
        {hasWeatherData && <WeatherDetail weather={weather} />}
        {notFound && <Alert>Ciudad No Encontrada</Alert>}
      </div>
    </>
  )
}

export default App
