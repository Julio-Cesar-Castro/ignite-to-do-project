import { PlusCircle } from 'phosphor-react'
import styles from './Button.module.css'

export function Button(){
    return(
        <button 
            className={styles.button} 
            type="submit"
            >
                Criar
                <PlusCircle weight='bold' size={16} />
        </button>
    )
}