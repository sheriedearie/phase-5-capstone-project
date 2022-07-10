import ProductList from './ProductList'
import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';



const ProductContainer = ({ onAdd, purchases }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const history = useHistory();
  const [cart, setCart] = useState([]);

  console.log("products container = ")
  console.log(products)

  useEffect(() => {
    fetch("/api/products")
      .then((r) => {
        if (r.ok) {
          r.json().then(prods => setProducts(prods))
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      }
      )
      .catch((err) => setErrors(err.errors));
  }, [purchases]);

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
      <ProductList prods={products} deleteProd={deleteProduct} onAdd={onAdd} />
    </div>
  )
}

export default ProductContainer