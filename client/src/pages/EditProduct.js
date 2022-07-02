import { useState } from "react";
import { useHistory, useParams } from "react-router";
import styled from "styled-components";
import { Button, Error, FormField, Input, Label } from "../styles";

function EditProduct({ productObj, updateProduct }) {
    const [product, setProduct] = useState({
    name: productObj.name,
    price: productObj.price
    });
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    
    console.log("here is where to edit the product")
    console.log(product)


    const handleChange = (e) => {
        setProduct({
            ...product, [e.target.name]: e.target.value,
        })
    }

    console.log("this is the productId in the edit product" + productObj.id)
    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
    
        fetch(`/api/products/${productObj.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify({name: product.name, price: product.price})
        }).then((r) => {
            console.log(product.name)
            setIsLoading(false);
            if (r.ok) {
                r.json().then(data => updateProduct(data))
                history.push("/products");
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        })
            .catch((err) => alert(err.errors))
    }

    return (
        <Wrapper>
            <WrapperChild>
                <h2>Edit Product</h2>
                <form onSubmit={handleSubmit}>
                    <FormField>
                        <Label htmlFor="name">Name: </Label>
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            value={product.name}
                            onChange={handleChange}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="price">Price: </Label>
                        <Input
                            type="number"
                            name="price"
                            id="price"
                            value={product.price}
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