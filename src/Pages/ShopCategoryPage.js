import React from 'react';
import styles from './pages.module.css';
import { products } from '../DataBase';
import { ProductsDisplay } from '../Components/ProductsDisplay';
import { SortBy } from '../Components/SortBy';
import { BackButton } from '../Components/BackButton';
import { useLocation } from 'react-router-dom';

const getProductsByCategory = (allProducts, category) => {
    return allProducts.filter(item => item.category === category)
}

const mapPathNameToProductCategoryName = (part) => {
    switch (part) {
        case 'cukierki': return ['candy', 'Cukierasy'];
        case 'przekaskislone': return ['saltySnack', 'Słone Przekąski'];
        case 'czekoladyibatoniki': return ['chocolateBar', 'Czekolady i Batoniki']
        case 'napoje': return ['soda', "Napoje"]
        default: return ''
    }

}

const getProductsDetails = (pathname, allProducts) => {
    const productNamePart = pathname.split('/').slice(-1)[0]
    const [categoryName, displayName] = mapPathNameToProductCategoryName(productNamePart)

    const matchingProducts = getProductsByCategory(allProducts, categoryName)

    return [displayName, matchingProducts]
}

export function ShopCategoryPage() {
    const { pathname } = useLocation()
    const [categoryName, matchedProducts] = getProductsDetails(pathname, products)


    return <div>
        <div className={styles.headlineCategory}>{categoryName}</div>
        <div className={styles.buttonAndSelect}>
            <BackButton />

            <SortBy products={matchedProducts} />
        </div>
        <ProductsDisplay products={matchedProducts} />
    </div>
}
