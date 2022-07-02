// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
import { Button, Error, FormField } from "../styles";
import React, { useState, useEffect } from "react";
import { useHistory, Link, useLocation } from 'react-router-dom';
import EditProduct from "./EditProduct";


const ProductCard = ({ prod, onDelete }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [productObj, setProductObj] = useState(prod);
  const history = useHistory();
  const [isEditing, setIsEditing] = useState(false);
  const location = useLocation()

  

  console.log("DELETE FUNCTION")
  console.log(onDelete.name);


  const url = !!prod?.photo ? prod.photo.url : window.location.origin + '/default-avatar.png';

  const updateProduct = () => {
    setIsEditing(true);
  }

  const commitUpdate = (updatedProd) => {
    console.log("UPDATED PRODUCT")
    console.log(updatedProd);
    setProductObj(updatedProd)
    setIsEditing(false)
  }

  useEffect(() => {
    if (!prod) {
      fetch(`/api/products/${prod.id}`)
        .then((r) => r.json())
        .then((product) => {
          debugger;
          setProductObj(product);
          console.log("Product ID in the product card = ")
          console.log(product)
        });
    }
  }, []);


  function deleteProduct() {
    onDelete(prod.id)
    history.push('/products');
  };

  return (
    <div className="card" elevation={0}>

      {!isEditing ? (
        <>
          <div key={productObj?.id} align="center">
            <Link to={`/products/${productObj.id}`}>
              <img src={url} alt="product" />
            </Link>

            <h1 variant="h5" component="h3" color="secondary">
              Name: {productObj.name}
            </h1>
            <h1 variant="h5" component="h3" color="secondary">
              Price: ${productObj?.price}
            </h1>
            <h1 variant="h5" component="h3" color="secondary">
              Creator: {productObj?.user?.name}
            </h1>
          </div>
          {location.pathname !== "/products" ? (
            <>
              <Button onClick={updateProduct} variant="fill" color="primary" type="submit">
                {isLoading ? "Editing..." : "Edit"}
              </Button>
              <Button onClick={deleteProduct} variant="fill" color="primary" type="submit">
                {isLoading ? "Deleting..." : "Delete"}
              </Button>
              <FormField>
                {errors?.map((err) => (
                  <Error key={err}>{err}</Error>
                ))}
              </FormField>
            </>
          ) : null}

        </>
      ) : <EditProduct id={prod.id} updateProduct={commitUpdate} productObj={productObj} />

      }

      <Button>Add to Cart</Button>

    </div>

  );
}
export default ProductCard