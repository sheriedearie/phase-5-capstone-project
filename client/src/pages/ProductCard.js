// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
import { Button } from "../styles";
import React, { useState, useContext, useEffect } from "react";
import { UserContext } from '../components/User';
import { useHistory, useParams } from 'react-router-dom';
// import EditProduct from "./EditProduct";


const ProductCard = ({ prods }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const { user, setUser } = useContext(UserContext);
  const [reviews, setReviews] = useState([]);
  const [productObj, setProductObj] = useState([]);
  const { productID } = useParams();
  const history = useHistory();
  const [isEditing, setIsEditing] = useState(false);

  console.log("this is the product card")
  console.log(prods)
  const url = !!prods?.photo ? prods.photo.url : window.location.origin + '/default-avatar.png';

  // const addNewReview = (reviews) => {
  //   setReviews((currentReviews) => [reviews, ...currentReviews]);
  // };

  function deleteProduct() {
    setErrors([]);
    setIsLoading(true);

    fetch(`/api/products/${productID}`, {
      method: 'delete'
    }).then((r) => {
      if (r.ok) {
        setProductObj(prods)
        history.push('/products');
      } else {
        r.json().then((err) => setErrors(err.erros));
      }
    })
      .catch((err) => setErrors(err.errors));
  };
  useEffect(() => {
    if (!prods) {
      fetch(`/api/products/${productID}`)
        .then((r) => r.json())
        .then((product) => {
          setProductObj(product);
          console.log("this is getting the product" + product)
          // setReviews(product.reviews);
        });
    }
  }, [productID, prods]);

  const finalProduct = prods ? prods : productObj;

console.log("This is the" + finalProduct)

  return (
    <div className="card" elevation={0}>

      <div key={finalProduct?.id} align="center">
        <img src={url} alt="product" />
        <h1 variant="h5" component="h3" color="secondary">
          Name: {finalProduct.name}
        </h1>
        <h1 variant="h5" component="h3" color="secondary">
          Price: ${finalProduct?.price}
        </h1>
        <h1 variant="h5" component="h3" color="secondary">
          Creator: {finalProduct?.user?.name}
        </h1>
      </div>
      <Button>Add to Cart</Button>
      <Button onClick={deleteProduct} variant="fill" color="primary" type="submit">
        {isLoading ? "Deleting..." : "Delete"}
      </Button>
      {/* <EditProduct /> */}
    </div>
  );
}
export default ProductCard