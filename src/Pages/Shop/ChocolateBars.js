import styles from './shop.module.css';
import { chocolateBarsProducts } from '../../DataBase/chocolateBarsDataBase';
import { ProductsDisplay } from '../../Components/ProductsDisplay';
import { Sort } from '../../Components/Sort';

export function ChocolateBars() {

    return <div>
        <div className={styles.headline}>Czekolady i batoniki</div>
        {Sort(chocolateBarsProducts)}
        {ProductsDisplay(chocolateBarsProducts)}
    </div>
}