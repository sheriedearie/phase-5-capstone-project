import ProductList from './ProductList'
import React, { useState, useEffect } from "react";


const ProductContainer = () => {
    const [products, setProducts] = useState([]);

    console.log("products container")
    console.log(products)

    useEffect(() => {
        fetch("/api/products")
            .then((r) => r.json())
            .then(prods => {
                setProducts(prods)
                console.log("PRODUCTS SET")
                console.log(prods)
            }
            )
            .catch(err => alert(err))
    }, []);

    return (
        <div>
            <h1>Products to Purchase</h1>
            <ProductList prods={products} />
        </div>
    )
}

export default ProductContainer