import styles from "./App.module.css"
import Form from "./components/form/Form"
import useWeather from "./hooks/useWeather"

function App() {

  const { fechtWeather } = useWeather()
  return (
    <>
      <h1 className={styles.title}>Buscador Clima</h1>
      <div className={styles.container}>
        <Form 
          fechtWeather={fechtWeather}
        />

      </div>
    </>
  )
}

export default App
