import { productsList } from "./ProductsList";

function ProductDisplayComponent({ id }) {

    const product = productsList.find(product => product.id === id)
    
    return (
        <div className="productComponent">
            <h3 className="productName">{product.name}</h3>
            <h4 className="productPrice">{product.price}</h4>
            <h6 className="productCategory">{product.category}</h6>
        </div>
    )
}

export default ProductDisplayComponent;