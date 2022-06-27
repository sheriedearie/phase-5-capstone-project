import ProductList from './ProductList'
import React, { useState, useEffect } from "react";


const ProductContainer = () => {
    const [products, setProducts] = useState([]);

    console.log("these are the products")
    console.log(products)

    useEffect(() => {
        fetch("/api/products")
            .then((r) => r.json())
            .then(prods => {
                console.log("PRODUCTS AGAIN")
                console.log(prods)
                setProducts(prods)
                console.log("PRODUCTS SET")
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