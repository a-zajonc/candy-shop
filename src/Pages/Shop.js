import styles from './pages.module.css';
import { Link } from 'react-router-dom';

export function Shop() {
    return <div className={styles.shop}>
        <span className={styles.headline}>Wybierz kategorie:</span>

        <div className={styles.productsRow}>
            <div className={styles.shopProductDiv}>
                <Link to="/sklep/cukierki">
                    <img className={styles.productImage}
                        src="https://www.kindpng.com/picc/m/39-390697_candy-png-candy-icon-sweets-emoji-transparent-png.png"
                        alt="Cukierki" />
                    <div className={styles.text}>Cukierki</div>
                </Link>
            </div>

            <div className={styles.shopProductDiv}>
                <Link to="/sklep/przekaskislone">
                    <img className={styles.productImage}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReBZ2t6ct-s4hHIxlRmjowVRIMuQ2ga3_5o3-BOedfEW4Q7K_nvsGYNPBCOPQ-4pMHtj0&usqp=CAU"
                        alt="Przekąski słone" />
                    <div className={styles.text}>Przekąski słone</div>
                </Link>
            </div>
            <div className={styles.shopProductDiv}>
                <Link to="/sklep/czekoladyibatoniki">
                    <img className={styles.productImage}
                        src="https://www.kindpng.com/picc/m/225-2254356_candy-bar-clipart-transparent-background-chocolate-bar-clipart.png"
                        alt="Czekolady i batoniki" />
                    <div className={styles.text}>Czekolady i batoniki</div>
                </Link>
            </div>
            <div className={styles.shopProductDiv}>
                <Link to="/sklep/napoje">
                    <img className={styles.productImage}
                        src="https://www.seekpng.com/png/detail/18-186518_cartoon-soda-png-svg-royalty-free-download-soda.png"
                        alt="Napoje słodzone" />
                    <div className={styles.text}>Napoje słodzone</div>
                </Link>
            </div>
        </div>
    </div>
}