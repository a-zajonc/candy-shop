import styles from './shop.module.css';
import { ProductsDisplay } from '../../Components/ProductsDisplay';
import { sodasProducts } from '../../DataBase/sodasDataBase';

export function Sodas() {

    return <div>
        <div className={styles.headline}>Słone przekąski</div>
        <div className={styles.sorting}><select>
            <option value="default">Domyślnie</option>
            <option value="priceup">Cena rosnąco</option>
            <option value="pricedown">Cena malejąco</option>
            <option value="alphabetically">Alfabetycznie</option>
        </select></div>
        {ProductsDisplay(sodasProducts)}
    </div>
}