import styles from "./App.module.css"
import Form from "./components/form/Form"

function App() {
  return (
    <>
      <h1 className={styles.title}>Buscador Clima</h1>
      <div className={styles.container}>
        <Form />

      </div>
    </>
  )
}

export default App
