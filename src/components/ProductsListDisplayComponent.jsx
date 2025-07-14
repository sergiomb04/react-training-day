import ProductDisplayComponent from "./ProductDisplayComponent";


function ProductsListDisplayCompononent({ productList }) {
    return (productList &&
        <div className="productsDisplayContainer">
            {productList.map(product => <ProductDisplayComponent id={product.id} />)}
        </div>
    )
}


export default ProductsListDisplayCompononent;