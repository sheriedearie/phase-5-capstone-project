import React, { useState, useRef } from "react";
import { Box, Button, FormField } from "../styles";
import emailjs from '@emailjs/browser';


const Cart = ({ products }) => {
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [cart, setCart] = useState([]);

        const form = useRef();

        const sendEmail = (e) => {
            e.preventDefault();

            emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        };

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
                    {/* <div>{current_user.cart.products}</div> */}

                    {/* map through the products and then onclick destory the product object... combine based on the product and cart id */}
                    <div>
                        {cart.length === 0 && <h1> Cart is Empty</h1>}
                    </div>
                    <p>Add Items to Purchase</p>
                </Box>
                &nbsp;
                <FormField ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </FormField>
                {/* email js
            print out in the front end a confirmation message
            keep track of purchases and empty the cart, which happens when the checkout button is clicked. */}
                <Button onClick={handleSubmit}>Checkout</Button>
            </>
        )
    }

    export default Cart