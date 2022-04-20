import styles from './Footer.module.css';

export function Footer() {
    return <div className={styles.footer}>
        Created by a-zajonc, {new Date().getFullYear()}
    </div>
}