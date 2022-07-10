import React, { useState, useContext, useRef } from "react";
import { Box, Button, FormField, Label, Input } from "../styles";
import { useHistory, Link } from 'react-router-dom';
import { UserContext } from "../components/User";
import emailjs from '@emailjs/browser';

const Cart = ({ onAdd, onRemove, cart, setCart, products }) => {
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    const { user } = useContext(UserContext);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    // checkout has to be there only when there are products to purchase and not when the cart is empty

    console.log("HERES THE CART")
    console.log(cart)

    function goToCheckout() {
        fetch("/api/checkout", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                user_id: user.id
            }),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                setCart([]);
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    return (
        <>
            <Box>
                {cart.length === 0 ? (
                    <>
                        <h1>Cart Is Empty</h1>
                        <Button as={Link} to="/products">
                            Add Products to the Cart
                        </Button>
                    </>

                ) :

                    cart.map(cartProd => {
                        const prod = products.find(item => item.id === cartProd.product_id)
                        const url = !!prod?.photo ? prod.photo.url : window.location.origin + '/default-avatar.png';
                        return (
                            <div className="container" key={prod.id} >

                                <Box>
                                    <h1>{prod.name}</h1>
                                    <h1>${prod.price}</h1>
                                    <img src={url} alt="product" style={{ width: "50%", height: "50%" }} />
                                    {<Button onClick={() => onRemove(prod.id)}>Remove</Button>}
                                </Box>

                            </div>

                        )
                    })}

                    
                <FormField>
                    <form ref={form} onSubmit={sendEmail}>
                        <Label>Name</Label>
                        <Input type="text" name="user_name" placeholder="Name"/>
                        <Label>Email</Label>
                        <Input type="email" name="user_email" placeholder="Email"/>
                        &nbsp;
                        &nbsp;
                        <Button type="submit" onClick={goToCheckout}>Checkout</Button>
                        &nbsp;
                    </form>

                </FormField>
                &nbsp;
                &nbsp;
            </Box>
            &nbsp;
            &nbsp;
        </>
    )
}

export default Cart