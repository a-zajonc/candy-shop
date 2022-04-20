import styles from './ProductsDisplay.module.css';

export function ProductsDisplay({ products }) {
    return <div>
        <div>
            {(products).map(product =>
                <div className={styles.productElement} key={product.id}>
                    <div>
                        <img className={styles.productImage} src={product.imgSrc} alt={product.alt} />
                    </div>
                    <div className={styles.productInfo}>
                        <div className={styles.productName}>{product.name}</div>
                        <div className={styles.productWeight}>Waga: {product.weight}</div>
                        <div className={styles.productPrice}>Cena za opakowanie: {product.price} zł</div>
                    </div>
                </div>
            )}
        </div>
    </div>
}