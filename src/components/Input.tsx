import styles from './Input.module.css'

export function Input(){
    return(
            <input className={styles.inputTask} name="inputTask" type="text" placeholder="Adicione uma nova tarefa" />
    )
}