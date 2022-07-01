// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
import { Button } from "../styles";
import React, { useState, useContext } from "react";
import { UserContext } from '../components/User';
import { useHistory } from 'react-router-dom';
import EditProduct from "./EditProduct";



const ProductCard = ({ product }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const { user, setUser } = useContext(UserContext);
  const [reviews, setReviews] = useState([]);
  const [products, setProducts] = useState([]);
  const [productID] = useState(product?.id);
  const itemDeletedEvent = new Event("ItemDeleted")
  const history = useHistory();
  const [isEditing, setIsEditing] = useState(false);

  // const {onClick} = product;

  console.log("this is the product card")
  console.log(product)
  const url = !!product.photo ? product.photo.url : window.location.origin + '/default-avatar.png';

  const addNewReview = (reviews) => {
    setReviews((currentReviews) => [reviews, ...currentReviews]);
  };

  function deleteProduct() {
    setErrors([]);
    setIsLoading(true);

    fetch(`/api/products/${productID}`, {
        method: 'delete'
    }).then((r) => {
        if (r.ok) {
            setProducts(products)
            history.push('/products');
        } else {
            r.json().then((err) => setErrors(err.erros));
        }
    })
      .catch((err) => setErrors(err.errors));
  };

  const handleUpdate = (updatedProductObj) => {
    setIsEditing(true);
    setProducts(updatedProductObj);
  };



return (
  <div className="card" elevation={0}>

    <div align="center">
      <img src={url} alt="product" />
      <h1 variant="h5" component="h3" color="secondary">
        Name: {product.name}
      </h1>
      <h1 variant="h5" component="h3" color="secondary">
        Price: ${product.price}
      </h1>
      <h1 variant="h5" component="h3" color="secondary">
        Creator: {product.user.name}
      </h1>
    </div>
    <Button>Add to Cart</Button>
    <Button onClick={deleteProduct} variant="fill" color="primary" type="submit">
      {isLoading ? "Deleting..." : "Delete"}
    </Button>
    <EditProduct />
  </div>
);
}
export default ProductCard