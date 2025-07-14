import { useState } from "react";
import DropDownCategoriesComponent from "./DropDownComponent";
import { searchProductsQuery as searchProductsByQuery } from "./ProductsList";
import ProductsListDisplayCompononent from "./ProductsListDisplayComponent";

import './ProductsList.css'

function ProductsListComponent() {
    
    const [nameQuery, setNameQuery] = useState('')
    const [categoryQuery, setCategoryQuery] = useState('')

    const handleNameQuery = (event) => {
        setNameQuery(event.target.value)
    }

    return (
        <div className="productsListContainer">
            <div className="filterContainer">
                <input className="searchInput" placeholder="Buscar por nombre..." onChange={handleNameQuery}/>
                <DropDownCategoriesComponent changeCategory={setCategoryQuery} />
            </div>

            <ProductsListDisplayCompononent productList={searchProductsByQuery({name: nameQuery, category: categoryQuery})}/>
        </div>
    )
}

export default ProductsListComponent;