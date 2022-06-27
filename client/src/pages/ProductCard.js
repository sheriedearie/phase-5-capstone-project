import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React from 'react';


const ProductCard = ({ product }) => {

    console.log("this is the product card")
    console.log(product)

    return (
        <div className="card" elevation={0}>

            <div align="center">
                {/* <img src={photo === null ? "" : photo.url} alt="" /> */}
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

        </div>
    )
}

export default ProductCard