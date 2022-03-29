import styles from './NavBar.module.css';
import Logo from '../../logosmall.png';
import React from 'react';
import { Link } from 'react-router-dom'

export function NavigationBar() {
    return <div className={styles.navigation}>
        <div>
            <Link to="/">
                <img className={styles.logoSmall} src={Logo} alt="Logo" />
            </Link>
        </div>
        <ul className={styles.optionsUl}>
            <Link to="/sklep"><div className={styles.options}>Sklep</div></Link>
            <Link to="/onas"><div className={styles.options}>O nas</div></Link>
            <Link to="/kontakt"><div className={styles.options}>Kontakt</div></Link>
        </ul>
    </div>
}

