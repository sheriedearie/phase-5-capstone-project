import { useState, useRef, useContext } from "react";
import { UserContext } from "../components/User";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Button, Error, FormField, Input, Label } from "../styles";

function NewProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const photo = useRef(null);
  const { setUser } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target)
    formData.append("name", name)
    formData.append("price", price)
    formData.append("photo", photo)

    fetch("/api/products", {
      method: "POST",
      body: formData

    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((product) => setUser(currentUser => (
          { ...currentUser, products: [...currentUser.products, product] }
        )));
        history.push("/products");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <Wrapper>
      <WrapperChild>
        <h2>Please fill out the form to add a new product</h2>
        <form onSubmit={handleSubmit}>
        <FormField>
            <Label htmlFor="name">Name: </Label>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="price">Price: </Label>
            <Input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="mediaUrl">Product: </Label>
            <Input
              type="file"
              name="photo"
              ref={photo}
              onChange={(e) => photo.current = (e.target.value)}
            />
          </FormField>
          <FormField>
            <Button color="primary" type="submit">
              {isLoading ? "Loading..." : "Add Product"}
            </Button>
          </FormField>
          <FormField>
            {errors.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
          </FormField>
        </form>
      </WrapperChild>
    </Wrapper>
  );
}

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

export default NewProduct;