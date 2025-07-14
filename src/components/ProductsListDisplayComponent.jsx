import ProductDisplayComponent from "./ProductDisplayComponent";


function ProductsListDisplayCompononent({ productList }) {
    return (productList &&
        <div className="productsDisplayContainer">
            {productList.map(product => <ProductDisplayComponent key={product.id} id={product.id} />)}
        </div>
    )
}


export default ProductsListDisplayCompononent;