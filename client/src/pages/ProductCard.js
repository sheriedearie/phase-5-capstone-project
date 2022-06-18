import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React from 'react';


const ProductCard = ({ product }) => {
    // console.log(product.name
    console.log("this is the product card")
    console.log(product)
    return (
        <Card className="card" elevation={0}>

            <CardContent align="center">
                {/* <img src={photo === null ? "" : photo.url} alt="" /> */}
                <Typography variant="h5" component="h3" color="secondary">
                    Name: {product.name}
                </Typography>
                <Typography variant="h5" component="h3" color="secondary">
                    Price: {product.price}
                </Typography>
                <Typography variant="h5" component="h3" color="secondary">
                    Creator: {product.user}
                </Typography>
            </CardContent>

        </Card>
    )
}

export default ProductCard