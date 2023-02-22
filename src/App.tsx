import { Header } from "./components/Header"
import { Input } from './components/Input'
import { Button } from './components/Button'
import { BodyTask } from './components/BodyTask'

import styles from './App.module.css'

export function App() {

  return (
    <div className={styles.wrapper}>
      <Header />

      <div className={styles.taskBox}>
        <Input />
        <Button />
      </div>

      <BodyTask />
      
    </div>
  )
}

