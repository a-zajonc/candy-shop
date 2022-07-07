import React from 'react';
import { products } from '../DataBase';
import { ProductList } from '../Components/ProductList';
import { SortBy } from '../Components/SortBy';
import { BackButton } from '../Components/BackButton';
import { useLocation } from 'react-router-dom';

const getProductsByCategory = (allProducts, category) => {
    return allProducts.filter(item => item.category === category)
}

const mapPathNameToProductCategoryName = (part) => {
    switch (part) {
        case 'cukierki': return ['candy', 'Cukierki'];
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
    const [sortedProducts, setSortedProducts] = React.useState(() => matchedProducts)

    return <div>
        <div className="d-flex justify-content-start p-2">
            <BackButton />
        </div>
        <div className="fs-1 text-center">{categoryName}</div>

        <div className="container text-end p-2">
            <SortBy onSort={comparator => {
                setSortedProducts([...sortedProducts].sort(comparator))
            }} />
        </div>
        <ProductList products={sortedProducts} />
    </div>
}
