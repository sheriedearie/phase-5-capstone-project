import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { UserContext } from "../components/User";
import React, { useContext } from 'react';


const ProductCard = ({ user_id, name, price }) => {
    const { user } = useContext(UserContext);
    // console.log(product.name
    console.log("this is the product card")
    console.log(user.products)
    return (
        <Card className="card" elevation={0}>

            <CardContent align="center">
                {/* <img src={photo === null ? "" : photo.url} alt="" /> */}
                <Typography variant="h5" component="h3" color="secondary">
                    Name: {user.products.name}
                </Typography>
                <Typography variant="h5" component="h3" color="secondary">
                    Price: {user.products.price}
                </Typography>
                <Typography variant="h5" component="h3" color="secondary">
                    Creator: {user.products.username}
                </Typography>
            </CardContent>

        </Card>
    )
}

export default ProductCard