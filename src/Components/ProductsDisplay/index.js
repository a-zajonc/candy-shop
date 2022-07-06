
export function ProductsDisplay({ products }) {
    return <div className="container text-center">
        {(products).map(product =>
            <div className="p-2 d-flex justify-content-center border-top" key={product.id}>
                <div>
                    <img className="rounded border" style={{ height: "200px", width: "200px" }} src={product.imgSrc} alt={product.alt} />
                </div>
                <div className="p-2">
                    <div className="h2 text-wrap" style={{ width: "200px" }}>{product.name}</div>
                    <div className="text-muted pb-2">Waga: {product.weight}</div>
                    <div className="text-muted h6">Cena za opakowanie: {product.price} zł</div>
                </div>
            </div>
        )
        }
    </div>
}