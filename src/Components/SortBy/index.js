export function SortBy({ onSort }) {
    const handleSelectChange = (event) => {
        const { value } = event.target

        if (value === "alphabetically") {
            onSort((a, b) => a.name.localeCompare(b.name))
        }

        if (value === "priceup") {
            onSort((a, b) => a.price - b.price)
        }
        if (value === "pricedown") {
            onSort((a, b) => b.price - a.price)
        }
        if (value === "default") {
            onSort((a, b) => a.id - b.id)
        }
    }

    return <select className="custom-select" onChange={handleSelectChange}>
        <option value="default">Domyślnie</option>
        <option value="priceup">Cena rosnąco</option>
        <option value="pricedown">Cena malejąco</option>
        <option value="alphabetically">Alfabetycznie</option>
    </select>
}