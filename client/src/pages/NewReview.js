import { useState, useContext, useRef } from "react";
import { UserContext } from "../components/User";
import { useHistory, Redirect, useLocation } from "react-router";
import styled from "styled-components";
import { Button, Error, FormField, Input, Label } from "../styles";

const NewReview = () => {
    const [rating, setRating] = useState("");
    const [comment, setComment] = useState("");
    const [product, setProduct] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    const { setUser } = useContext(UserContext);
    const photo = useRef(null);
    const location = useLocation();
    const locationState = location.state



    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData(e.target)
        formData.append("rating", rating)
        formData.append("comment", comment)
        console.log("FORM DATA")
        for (let el of formData.values()) {
            console.log(el)
        }

        fetch("/api/reviews", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              rating: rating,
              product: locationState.product,
              comment: comment
            }),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((review) => setUser(currentUser => (
                    { ...currentUser, reviews: [...currentUser.reviews, review] }
                )));
                history.push("/reviews");
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }
if (!locationState?.product.name) return <Redirect to='/products'/>

    return (
        <Wrapper>
            <WrapperChild>
                <h2>Add a new review for the{locationState.product}</h2>
                <form onSubmit={handleSubmit}>
                                        <FormField>
                        <Label htmlFor="product">Product: </Label>
                        <Input
                            type="text"
                            id="product"
                            value={product}
                            onChange={(e) => setRating(e.target.value)}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="rating">Rating: </Label>
                        <Input
                            type="integer"
                            id="rating"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="comment">Comment: </Label>
                        <Input
                            type="text"
                            id="comment"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
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

export default NewReview