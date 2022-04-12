import React from 'react';
import styles from './shop.module.css';
import { candyProducts } from '../../DataBase/candyDataBase';
import { ProductsDisplay } from '../../Components/ProductsDisplay';
import { Sort } from '../../Components/Sort';
import { BackButton } from '../../Components/BackButton';

export function Candy() {

    return <div>
        <div className={styles.headline}>Cukierki</div>
        <div className={styles.buttonAndSelect}>
            <BackButton />
            {Sort(candyProducts)}
        </div>
        {ProductsDisplay(candyProducts)}
    </div>
}