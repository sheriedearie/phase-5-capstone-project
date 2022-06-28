import React, { useState } from "react";
import { Box, Button } from "../styles";


const Cart = ({ products }) => {
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [cart, setCart] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
        const inCart = cart.find(item => item.id === products.id);
        if (inCart) {
            setCart(cart.map(item => item.id === products.id ? { ...inCart, qty: inCart.qty + 1 } : item
            ));
        } else {
            setCart([...cart, { ...products, qty: 1 }])
        }
    }
    // fetch purchases?
    return (
        <>
            <Box>
                <div>
                    {cart.length === 0 && <h1> Cart is Empty</h1>}
                </div>
                <p>Add Items to Purchase</p>
            </Box>
            &nbsp;
            <Button onClick={handleSubmit}>Checkout</Button>
        </>
    )
}

export default Cart