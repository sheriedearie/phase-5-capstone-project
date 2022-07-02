import ProductList from './ProductList'
import React, { useState, useEffect, useHistory } from "react";


const ProductContainer = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState([]);

    console.log("products container = ")
    console.log(products)

    useEffect(() => {
        fetch("/api/products")
            .then((r) => r.json())
            .then(prods => {
                setProducts(prods)
                console.log("PRODUCTS SET =")
                console.log(prods)
            }
            )
            .catch(err => alert(err))
    }, []);

    function deleteProduct(prodID) {
        setErrors([]);
        setIsLoading(true);
    
        console.log("Deleting product: " + prodID)
    
        fetch(`/api/products/${prodID}`, {
          method: 'delete'
        }).then((r) => {
          if (r.ok) {
            setProducts([...products].filter((prod) => prod.id !== prodID))
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        })
          .catch((err) => setErrors(err.errors));
      };

    console.log("TOP DELETE FUNCTION")
    console.log(deleteProduct.name)

    return (
        <div>
            <h1>Products to Purchase</h1>
            <ProductList prods={products} deleteProd={deleteProduct} />
        </div>
    )
}

export default ProductContainer