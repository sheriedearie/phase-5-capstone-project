import { useContext } from "react";
// import { Link } from "react-router-dom";
// import { Button } from "../styles";
import ProductCard from './ProductCard';
import { UserContext } from '../components/User';
import React, { useState, useEffect } from "react";


const ProductList = () => {
    const[products, setProducts] = useState([]);
    const { user } = useContext(UserContext);
console.log("this is the product list")
console.log("this is the user")
console.log(user)
console.log(products)
    useEffect(() => {
        fetch ("/api/products").then((r) => r.json()).then(products => setProducts(products))
       }, []);  
     
  return (
    <div>
        <h1>"these are the available products"</h1>
        <ProductCard />
      </div>
  )
}

export default ProductList