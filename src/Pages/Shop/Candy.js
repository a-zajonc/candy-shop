import React from 'react';
import styles from './shop.module.css';
import { candyProducts } from '../../DataBase/candyDataBase';
import { ProductsDisplay } from '../../Components/ProductsDisplay';

export function Candy() {

    return <div>
        <div className={styles.headline}>Cukierki</div>
        <div className={styles.sorting}><select>
            <option value="default">Domyślnie</option>
            <option value="priceup">Cena rosnąco</option>
            <option value="pricedown">Cena malejąco</option>
            <option value="alphabetically">Alfabetycznie</option>
        </select></div>
        {ProductsDisplay(candyProducts)}
    </div>
}