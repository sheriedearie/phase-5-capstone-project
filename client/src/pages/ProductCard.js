// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
import { Button } from "../styles";
import React, { useState, useContext } from "react";
import { UserContext } from '../components/User';

const ProductCard = ({ product }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState([]);
    const { user, setUser } = useContext(UserContext);
    const [productID] = useState(product?.id);
    const itemDeletedEvent = new Event("ItemDeleted")
    // const {onClick} = product;

    console.log("this is the product card")
    console.log(product)
    const url = !!product.photo ? product.photo.url : window.location.origin + '/default-avatar.png';
    
    function deleteProduct() {
        setErrors([]);
        setIsLoading(true);
    
        fetch(`/api/products/${productID}`, {
          method: 'delete'
        }).then((r) => {
          if (r.ok) {
            setUser(currentUser => {
              const newProducts = currentUser.products.filter((product) => {
                const otherId = product.id || product.product?.id
                const different = productID !== otherId
                console.log("Comparing " + productID + " to " + otherId)
                return different;
              });
              return { ...currentUser, products: newProducts }
            })
          }
          else {
            r.json().then((err) => setErrors(err.erros));
          }
        });
    
        const deleteButton = document.querySelector(`#deleteBtn${productID}`)
        deleteButton.textContent = "DELETING...";
        document.dispatchEvent(itemDeletedEvent)
      }

    return (
        <div className="card" elevation={0}>

            <div align="center">
                <img src={url} alt="photo" />
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
            <Button id={`deleteBtn${productID}`} onClick={deleteProduct}>Delete Product</Button>

        </div>
    )
}

export default ProductCard