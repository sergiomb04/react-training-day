import { useState } from "react";
import DropDownCategoriesComponent from "./DropDownComponent";
import { productsList, searchProductsQuery as searchProductsByQuery } from "./ProductsList";
import ProductsListDisplayCompononent from "./ProductsListDisplayComponent";

function ProductsListComponent() {
    
    const [nameQuery, setNameQuery] = useState('')
    const [categoryQuery, setCategoryQuery] = useState('')

    const handleNameQuery = (event) => {
        setNameQuery(event.target.value)
        console.log(event.target.value)
    }

    function getCurrentQuery() {
        console.log("Category", categoryQuery)
        return {name: nameQuery, category: categoryQuery}
    }

    return (
        <div>
            <input placeholder="Buscar por nombre..." onChange={handleNameQuery}/>
            <DropDownCategoriesComponent changeCategory={setCategoryQuery} />
            <ProductsListDisplayCompononent productList={searchProductsByQuery(getCurrentQuery())}/>
        </div>
    )
}

export default ProductsListComponent;