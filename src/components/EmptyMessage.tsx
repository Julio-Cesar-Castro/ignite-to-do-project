import EmptyImg from '../assets/emptyTask.svg'
import styles from './EmptyMessage.module.css'

export function EmptyMessage(){
    return(
        <div className={styles.taskList}>
            <img src={EmptyImg} />
            <article>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
            </article>
        </div>
    )
}