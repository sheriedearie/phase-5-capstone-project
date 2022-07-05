import React, { useState, useRef } from "react";
import { Box, Button, FormField } from "../styles";
import emailjs from '@emailjs/browser';


const Cart = ({onAdd, onRemove, cart, setCart, products}) => {
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const form = useRef();

    console.log("HERES THE CART")
    console.log(cart)

        // function handleSubmit(e) {
        //     e.preventDefault();
        //     setErrors([]);
        //     setIsLoading(true);
        //     const inCart = cart.find(item => item.id === prods.id);
        //     if (inCart) {
        //         setCart(cart.map(item => item.id === prods.id ? { ...inCart, qty: inCart.qty + 1 } : item
        //         ));
        //     } else {
        //         setCart([...cart, { ...prods, qty: 1 }])
        //     }
        // }
        // fetch purchases?
        

        return (
            <>
                <Box>
                    {cart.length === 0 ? (<h1>Cart Is Empty</h1>) :
                    cart.map(cartProd => {
                        const prod = products.find(item => item.id === cartProd.product_id)
                        const url = !!prod?.photo ? prod.photo.url : window.location.origin + '/default-avatar.png';
                        return (
                        <div className="container" >
                            <Box>
                            <h1>{prod.name}</h1>
                            <h1>${prod.price}</h1>
                            <img src={url} alt="product" style={{width:"50%", height:"50%"}}/>
                            {<Button onClick={() => onRemove(prod.id)}>Remove</Button>}
                        </Box>
                            </div>
                    )})}
                </Box>
                &nbsp;
                {/* email js
            print out in the front end a confirmation message
            keep track of purchases and empty the cart, which happens when the checkout button is clicked. */}
                <Button>Checkout</Button>
            </>
        )
    }

    export default Cart