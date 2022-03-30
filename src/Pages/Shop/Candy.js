// import styles from './shop.module.css';
import { CandyProducts } from '../../DataBase/candyDataBase';

export function Candy() {
    const product = CandyProducts.map(product => {
        return <p key={product.id}>{product.name}</p>
    })

    return <div>
        <li>{product}
        </li>
    </div>
}