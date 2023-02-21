import styles from "./Header.module.css"
import Logo from '../assets/todo-logo.svg'

export function Header(){
    return(
        <div className={styles.header}>
            <img src={Logo} />
        </div>
    )
}