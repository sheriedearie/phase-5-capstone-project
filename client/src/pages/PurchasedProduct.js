
import { Box } from '../styles';
import NewReview from './NewReview';

const PurchasedProduct = ({ purchase }) => {

    return (
        <>
            <Box>
                <div key={purchase.product?.id} align="center">
                    <h1 variant="h5" component="h3" color="secondary">
                        Product: {purchase.product?.name}
                    </h1>
                    <h1 variant="h5" component="h3" color="secondary">
                        Price: ${purchase.product?.price}
                    </h1>
                    <NewReview purchase={purchase} />
                </div>
            </Box>
        </>
    )
}

export default PurchasedProduct