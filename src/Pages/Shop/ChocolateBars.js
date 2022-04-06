import styles from './shop.module.css';
import { ChocolateBarsProducts } from '../../DataBase/chocolateBarsDataBase';
import { ProductsDisplay } from '../../Components/ProductsDisplay';

export function ChocolateBars() {

    return <div>
        <div className={styles.headline}>Czekolady i batoniki</div>
        <div className={styles.sorting}><select>
            <option value="default">Domyślnie</option>
            <option value="priceup">Cena rosnąco</option>
            <option value="pricedown">Cena malejąco</option>
            <option value="alphabetically">Alfabetycznie</option>
        </select></div>
        {ProductsDisplay(ChocolateBarsProducts)}
    </div>
}