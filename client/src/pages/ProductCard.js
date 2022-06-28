// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
import React from 'react';
import { Button } from "../styles";

const ProductCard = ({ product }) => {
    // const {onClick} = product;

    console.log("this is the product card")
    console.log(product)
    const url = !!product.photo ? product.photo.url : window.location.origin + '/default-avatar.png';


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
        </div>
    )
}

export default ProductCard