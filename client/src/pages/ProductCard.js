import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ProductCard = ({ user_id, name, price }) => {
    // console.log(product.name)
    return (
        <Card className="card" elevation={0}>

            <CardContent align="center">
                {/* <img src={photo === null ? "" : photo.url} alt="" /> */}
                <Typography variant="h5" component="h3" color="secondary">
                    Name: {name}
                </Typography>
                <Typography variant="h5" component="h3" color="secondary">
                    Price: {price}
                </Typography>
                <Typography variant="h5" component="h3" color="secondary">
                    Creator: {user_id}
                </Typography>
            </CardContent>

        </Card>
    )
}

export default ProductCard