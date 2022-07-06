import { useState } from "react";
export function SortBy({ products }) {

    const [sortType, setSortType] = useState("default")

    if (sortType === "alphabetically") {
        products
            .sort((a, b) => a.name.localeCompare(b.name))
    }

    if (sortType === "priceup") {
        products
            .sort((a, b) => a.price - b.price)
    }
    if (sortType === "pricedown") {
        products
            .sort((a, b) => b.price - a.price)
    }
    if (sortType === "default") {
        products
            .sort((a, b) => a.id - b.id)
    }

    return <select className="custom-select" value={sortType} onChange={event => setSortType(event.target.value)}>
        <option value="default">Domyślnie</option>
        <option value="priceup">Cena rosnąco</option>
        <option value="pricedown">Cena malejąco</option>
        <option value="alphabetically">Alfabetycznie</option>
    </select>
}