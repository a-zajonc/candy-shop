import styles from './shop.module.css';
import { ProductsDisplay } from '../../Components/ProductsDisplay';
import { sodasProducts } from '../../DataBase/sodasDataBase';
import { Sort } from '../../Components/Sort';

export function Sodas() {

    return <div>
        <div className={styles.headline}>Słone przekąski</div>
        {Sort(sodasProducts)}
        {ProductsDisplay(sodasProducts)}
    </div>
}