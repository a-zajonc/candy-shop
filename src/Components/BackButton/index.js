import React from 'react';
import styles from './BackButton.module.css';
import { Link } from 'react-router-dom';

export function BackButton() {
    return <Link to="/sklep">
        <button className={styles.button}>Powrót</button>
    </Link>
}