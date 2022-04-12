import React from 'react';
import styles from './pages.module.css';
import { candyProducts } from '../DataBase/candyDataBase';
import { sodasProducts } from '../DataBase/sodasDataBase';
import { saltySnacksProducts } from '../DataBase/saltySnacksDataBase';
import { ProductsDisplay } from '../Components/ProductsDisplay';
import { Sort } from '../Components/Sort';
import { chocolateBarsProducts } from '../DataBase/chocolateBarsDataBase';
import { BackButton } from '../Components/BackButton';

export function ShopCategoryPage() {
    let categoryName = ""
    let products = []
    if ((window.location.href).includes("cukierki")) {
        products = candyProducts;
        categoryName = "Cukierki"
    }
    if ((window.location.href).includes("napoje")) {
        products = sodasProducts;
        categoryName = "Napoje"
    }
    if ((window.location.href).includes("przekaskislone")) {
        products = saltySnacksProducts;
        categoryName = "Słone Przekąski"
    }
    if ((window.location.href).includes("czekoladyibatoniki")) {
        products = chocolateBarsProducts
        categoryName = "Czekolady i Batoniki"
    }

    return <div>
        <div className={styles.headlineCategory}>{categoryName}</div>
        <div className={styles.buttonAndSelect}>
            <BackButton />
            {Sort(products)}
        </div>
        {ProductsDisplay(products)}
    </div>
}
