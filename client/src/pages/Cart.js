import React from 'react'
import { Box, Button } from "../styles";


const Cart = () => {

// fetch purchases?
    return (
        <>
            <Box>
                <h1>This is your Cart</h1>
                <p>This is where you will find all the products that you expect to purchase</p>
            </Box>
            &nbsp;
            <Button>Checkout</Button>
        </>
    )
}

export default Cart