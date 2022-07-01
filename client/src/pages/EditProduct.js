import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Button, Error, FormField, Input, Label } from "../styles";

function EditProduct({ productObj, handleUpdate }) {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    const [productID] = useState(products?.id);

    
    console.log("here is where to edit the product")
    console.log(products)


    const handleChange = (e) => {
        setProducts({
            ...products, [e.target.name]: e.target.value,
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (
            [products.name, products.price, products.user.name].some((val) => val.trim() === '')
        ) { alert('All information must be filled out!') }
        setIsLoading(true);
    
        fetch(`/api/products${productObj.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify(products.name, products.price)
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then(data => handleUpdate(data))
                history.push("/products");
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        })
            .catch((err) => alert(err.errors))
    }

    fetch(`/api/products/${productID}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(name, price),
    }).then((r) => {
        if (r.ok) {
            setProducts(products)
        }
        else {
            r.json().then((err) => setErrors(err.erros));
        }
    });

    return (
        <Wrapper>
            <WrapperChild>
                <h2>Edit Product</h2>
                <form onSubmit={handleSubmit}>
                    <FormField>
                        <Label htmlFor="name">Name: </Label>
                        <Input
                            type="text"
                            id="name"
                            value={name}
                            onChange={handleChange}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="price">Price: </Label>
                        <Input
                            type="number"
                            id="price"
                            value={price}
                            onChange={handleChange}
                        />
                    </FormField>
                    <FormField>
                        <Button color="primary" type="submit">
                            {isLoading ? "Loading..." : "Update"}
                        </Button>
                    </FormField>
                    <FormField>
                        {errors?.map((err) => (
                            <Error key={err}>{err}</Error>
                        ))}
                    </FormField>
                </form>
            </WrapperChild>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  gap: 24px;
`;

const WrapperChild = styled.div`
  flex: 1;
`;

export default EditProduct;