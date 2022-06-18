
// import { Link } from "react-router-dom";
// import { Button } from "../styles";
import ProductList from './ProductList'
import React, { useState, useEffect } from "react";


const ProductContainer = () => {
    const[products, setProducts] = useState([]);
console.log("this is the product container")
console.log(products)
    useEffect(() => {
        fetch ("/api/products").then((r) => r.json()).then(products => setProducts(products))
       }, []);  
     
  return (
    <div>
        <h1>"these are the available products"</h1>
        <ProductList products={products}/>
      </div>
  )
}

export default ProductContainer