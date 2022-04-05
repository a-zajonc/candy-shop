import styles from './shop.module.css';
import { CandyProducts } from '../../DataBase/candyDataBase';
import { useState } from 'react';

export function Candy() {

    const [products, setProducts] = useState([{
        name: "Dumle",
        id: "1",
        weight: "100 g",
        price: 10.00,
        imgSrc: "https://wikiimg.tojsiabtv.com/wikipedia/commons/thumb/1/1b/FC_Dumle_Original.jpg/1200px-FC_Dumle_Original.jpg",
        alt: "Cukierki Dumle"
    },
    {
        name: "Zozole",
        id: "2",
        weight: "1000 g",
        price: 13.00,
        imgSrc: "https://tanifilet.pl/wp-content/uploads/2021/02/mieszko-cukierki-zozole.jpg",
        alt: "Cukierki Zozole"
    },
    {
        name: "Werther's Original",
        id: "3",
        weight: "100 g",
        price: 18.00,
        imgSrc: "https://www.torebrings.se/bilder/artikelbilder/27/270524big.jpg",
        alt: "Cukierki Werther's Original"
    },
    {
        name: "Michałki Kokosowe",
        id: "4",
        weight: "300 g",
        price: 12.00,
        imgSrc: "https://www.candycup.pl/userdata/public/gfx/270/Biale-Michalki-Wawel.jpg",
        alt: "Cukierki Michałki kokosowe"
    }
    ]
    )

    return <div>
        <div className={styles.headline}>Cukierki</div>
        <div className={styles.sorting}><select>
            <option value="default">Domyślnie</option>
            <option value="priceup">Cena rosnąco</option>
            <option value="pricedown">Cena malejąco</option>
            <option value="alphabetically">Alfabetycznie</option>
        </select></div>

        <div>
            <div>
                {products && products.map(product =>
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
    </div>
}