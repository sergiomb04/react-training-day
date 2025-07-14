import { productsList } from "./ProductsList";

export default function DropDownCategoriesComponent({ changeCategory }) {

    const allCategories = productsList.map(product => product.category)
    const uniqueCategories = [...new Set(allCategories)];
    
    const handleChange = (event) => {
        changeCategory(event.target.value)
    }

    return (productsList &&
        <select onChange={handleChange}>
            <option value="">Selecciona una categoría</option>

            {uniqueCategories.map(category => {
                return <option value={category}>{category}</option>
            })}
        </select>
    )
}