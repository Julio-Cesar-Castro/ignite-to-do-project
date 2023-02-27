import {useState, ChangeEvent, useMemo} from 'react'

import { EmptyMessage } from './EmptyMessage'

import { PlusCircle, Trash } from 'phosphor-react'

import Swal from 'sweetalert2'
import styles from './BodyTask.module.css'




export function BodyTask(){
  const [userTyping, setUserTyping] = useState("");

  const [listTask, setListTask] = useState([
    {
      id: 0,
      content: 'Estudando React',
      checked: false,
    }
  ])

// const

const buildTask = {
  id: Math.random(),
  content: userTyping,
  checked: false,
}

const doneTaskes = useMemo(() => {
  return listTask.filter(tasks => tasks.checked)
}, [listTask])

// functions

  function handleUserTyping(e: ChangeEvent<HTMLInputElement>){
    setUserTyping(e.target.value)
  }

  function handleAddNewTask(){

   if(userTyping == ""){
    Swal.fire({
      icon: 'error',
      title: 'Ops!',
      text: 'Você não pode adicionar tarefas vazias!',
      iconColor: " #e25858",
      color: '#d9d9d9',
      background: '#262626',
      confirmButtonColor: '#4EA8DE',
    })
   } else{
    setListTask([...listTask,buildTask])
    setUserTyping("");
   }
  }


  function handleDeleteTask(id: number){
    setListTask(listTask.filter(item => item.id !== id))
  }

  function isCheckBoxChecked(e: ChangeEvent<HTMLInputElement>, index: number){

    listTask[index].checked = e.target.checked;

    setListTask([...listTask])

  }


    return(

      <>
        <form className={styles.taskBox} onSubmit={e => e.preventDefault()}>
          <input 
            className={styles.inputTask} 
            name="inputTask" 
            type="text" 
            placeholder="Adicione uma nova tarefa" 
            onChange={handleUserTyping}
            value={userTyping} />

          <button 
              className={styles.button} 
              type="submit"
              onClick={handleAddNewTask}
              >
                  Criar
                  <PlusCircle weight='bold' size={16} />
          </button>
        </form>

        <div className={styles.task}>
          <div className={styles.taskInfo}>
            <p className={styles.createTask}>Tarefas criadas <span>{listTask.length}</span></p>
            <p className={styles.doneTask}>Concluídas <span>{doneTaskes.length} de {listTask.length}</span></p>
          </div>
       {
          

          listTask.length > 0 ? 

            listTask.map((task,index) => {
              return (
                  <div className={styles.list}  key={task.id}>
                    <input type="checkbox" checked={task.checked} onChange={(e) => isCheckBoxChecked(e,index)} />
                    <p>{task.content}</p>
                    <Trash className={styles.trash} onClick={() => handleDeleteTask(task.id)} />
                  </div>
              )
            })
          : <EmptyMessage />
          
       }
      </div>
      </>
    )
}
