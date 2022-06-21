import ProductList from './ProductList'
import React, { useState, useEffect } from "react";


const ProductContainer = () => {
    const [products, setProducts] = useState(null);
    useEffect(() => {
        fetch("/api/products").then((r) => r.json()).then(
            products => {
                console.log("HERE ARE THE PRODUCTS(Container)")
                console.log(products)
                // setProducts(products);
            })
    }, []);

    return (
        <div>
            <h1>"these are the available products"</h1>
            <ProductList products={products} />
        </div>
    )
}

export default ProductContainer