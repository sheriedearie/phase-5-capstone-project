// import { useHistory, Link, useLocation } from 'react-router-dom';
import { Box } from '../styles';
import NewReview from './NewReview';

const PurchasedProduct = ({ purchase }) => {
    // const url = !!purchase.product?.photo ? purchase.product?.photo : window.location.origin + '/default-avatar.png';

    // purchase.product.name
    // image
    // 
    return (
        <>
        <Box>
            <div key={purchase.product?.id} align="center">
                {/* <Link to={`/products/${productObj.id}`}> */}
                    {/* <img src={url} alt="product" /> */}
                {/* </Link> */}

                <h1 variant="h5" component="h3" color="secondary">
                    Name: {purchase.product?.name}
                </h1>
                <h1 variant="h5" component="h3" color="secondary">
                    Price: ${purchase.product?.price}
                </h1>
                <NewReview purchase={purchase}/>
            </div>
            {/* {location.pathname !== "/products" ? ( */}
        </Box>
        </>
    )
}

export default PurchasedProduct