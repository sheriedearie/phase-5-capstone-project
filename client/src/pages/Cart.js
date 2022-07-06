import React, { useState, useContext, useRef } from "react";
import { Box, Button, FormField, Label, Input } from "../styles";
import { useHistory, Link } from 'react-router-dom';
import { UserContext } from "../components/User";
import emailjs from '@emailjs/browser';

const Cart = ({ onAdd, onRemove, cart, setCart, products }) => {
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    const { user, setUser } = useContext(UserContext);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wfn86pq', 'template_oc88con', form.current, 'AXOv5cbmlxB0LSRNl')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

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
                                <FormField>
                                    <form ref={form} onSubmit={sendEmail}>
                                        <Label>Name</Label>
                                        <Input type="text" name="user_name" />
                                        <Label>Email</Label>
                                        <Input type="email" name="user_email" />
                                        &nbsp;
                                        &nbsp;
                                        <Button type="submit" onClick={goToCheckout}>Checkout</Button>
                                        &nbsp;
                                    </form>
                                </FormField>
                            </div>
                        )
                    })}

                &nbsp;
                &nbsp;
            </Box>
            &nbsp;
            &nbsp;

            {/* email js
            print out in the front end a confirmation message
            keep track of purchases and empty the cart, which happens when the checkout button is clicked. */}
        </>
    )
}

export default Cart