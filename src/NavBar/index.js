import styles from './NavBar.module.css';
import Logo from '../logosmall.png'

export function NavigationBar() {
    return <div className={styles.navigation}>
        <div>
            <img className={styles.logoSmall} src={Logo} alt="Logo" />
        </div>
        <div className={styles.optionsDiv}>
            <div className={styles.options}>Sklep</div>
            <div className={styles.options}>O nas</div>
            <div className={styles.options}>Kontakt</div>
        </div>
    </div>
}