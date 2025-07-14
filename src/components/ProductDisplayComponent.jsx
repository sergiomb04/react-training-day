import { productsList } from "./ProductsList";

function ProductDisplayComponent({ id }) {

    const product = productsList.find(product => product.id === id)
    
    return (
        <div className="productComponent">
            <div className="imageContainer">
                <img src="/img/product.png" className="productImage"></img>
            </div>
            <div className="productInfo">
                <h6 className="productCategory">{product.category}</h6>
                <h3 className="productName">{product.name}</h3>
                <h4 className="productPrice">${product.price}</h4>
            </div>
        </div>
    )
}

export default ProductDisplayComponent;