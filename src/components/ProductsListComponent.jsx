import { useState } from "react";
import DropDownCategoriesComponent from "./DropDownComponent";
import { searchProductsQuery as searchProductsByQuery } from "./ProductsList";
import ProductsListDisplayCompononent from "./ProductsListDisplayComponent";

function ProductsListComponent() {
    
    const [nameQuery, setNameQuery] = useState('')
    const [categoryQuery, setCategoryQuery] = useState('')

    const handleNameQuery = (event) => {
        setNameQuery(event.target.value)
    }

    return (
        <div>
            <input placeholder="Buscar por nombre..." onChange={handleNameQuery}/>
            <DropDownCategoriesComponent changeCategory={setCategoryQuery} />
            <ProductsListDisplayCompononent productList={searchProductsByQuery({name: nameQuery, category: categoryQuery})}/>
        </div>
    )
}

export default ProductsListComponent;