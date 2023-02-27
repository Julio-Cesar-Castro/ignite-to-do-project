import { Header } from "./components/Header"
import { BodyTask } from './components/BodyTask'

import styles from './App.module.css'


export function App() {

  return (
    <div className={styles.wrapper}>
      <Header />

      <BodyTask/>
    </div>
  )
}

