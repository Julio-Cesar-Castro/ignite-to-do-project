import EmptyTask from '../assets/emptyTask.svg'

import styles from './BodyTask.module.css'


export function BodyTask(){
    return(
        <div className={styles.task}>
          <div className={styles.taskInfo}>
            <p className={styles.createTask}>Tarefas criadas <span>0</span></p>
            <p className={styles.doneTask}>Concluídas <span>0</span></p>
          </div>
          <div className={styles.taskList}>
            <img src={EmptyTask} />
            <article>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </article>
          </div>
      </div>
    )
}