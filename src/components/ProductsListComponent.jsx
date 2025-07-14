import { useState } from "react";
import DropDownCategoriesComponent from "./DropDownComponent";
import { searchProductsQuery as searchProductsByQuery } from "./ProductsList";
import ProductsListDisplayCompononent from "./ProductsListDisplayComponent";
import { MdArrowUpward, MdArrowDownward } from 'react-icons/md';

import './ProductsList.css'

function ProductsListComponent() {
    
    const [nameQuery, setNameQuery] = useState('')
    const [categoryQuery, setCategoryQuery] = useState('')
    const [priceAscendant, setPriceAscendant] = useState(false)

    const handleNameQuery = (event) => {
        setNameQuery(event.target.value)
    }

    const handlePriceAscendant = () => {
        setPriceAscendant(!priceAscendant)
    }

    const handleNameAscendant = () => {
        setAlphaAscendant(!alphaAscendant)
    }

    const buttonStyle = {
        backgroundColor: priceAscendant ? 'lightblue' : 'lightgray',
        color: 'black',
        padding: '10px 20px',
        border: 'none',
        outline: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    return (
        <div className="productsListContainer">
            <div className="filterContainer">
                <input className="searchInput" placeholder="Buscar por nombre..." onChange={handleNameQuery}/>
                <DropDownCategoriesComponent changeCategory={setCategoryQuery} />

                <button onClick={handlePriceAscendant} style={buttonStyle}>
                    Ordenar por Precio {priceAscendant ? <MdArrowUpward /> : <MdArrowDownward />}
                </button>

            </div>

            <ProductsListDisplayCompononent productList={searchProductsByQuery({name: nameQuery, category: categoryQuery, priceAscendant})}/>
        </div>
    )
}

export default ProductsListComponent;