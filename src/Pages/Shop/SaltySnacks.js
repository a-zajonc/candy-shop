import styles from './shop.module.css';
import { ProductsDisplay } from '../../Components/ProductsDisplay';
import { saltySnacksProducts } from '../../DataBase/saltySnacksDataBase';
import { Sort } from '../../Components/Sort';

export function SaltySnacks() {

    return <div>
        <div className={styles.headline}>Słone przekąski</div>
        {Sort(saltySnacksProducts)}
        {ProductsDisplay(saltySnacksProducts)}
    </div>
}