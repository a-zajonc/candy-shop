import React from 'react';
import styles from './shop.module.css';
import { candyProducts } from '../../DataBase/candyDataBase';
import { ProductsDisplay } from '../../Components/ProductsDisplay';
import { Sort } from '../../Components/Sort';

export function Candy() {

    return <div>
        <div className={styles.headline}>Cukierki</div>
        {Sort(candyProducts)}
        {ProductsDisplay(candyProducts)}
    </div>
}