import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Button, Error, FormField, Input, Label } from "../styles";

const EditReview = ({ reviewObj, updateReview }) => {
    const [review, setReview] = useState({
        comment: reviewObj.comment,
        rating: reviewObj.rating
    });
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleChange = (e) => {
        setReview({
            ...review, [e.target.name]: e.target.value,
        })
    }
    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);

        fetch(`/api/reviews/${reviewObj.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify({ rating: review.rating, comment: review.comment })

        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((review) => updateReview(review)
                );
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
                <h2>Edit Review</h2>
                <form onSubmit={handleSubmit}>
                    <FormField>
                        <Label htmlFor="rating">Rating: </Label>
                        <Input
                            type="integer"
                            id="rating"
                            name="rating"
                            value={review.rating}
                            onChange={handleChange}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="comment">Comment: </Label>
                        <Input
                            type="text"
                            id="comment"
                            name="comment"
                            value={review.comment}
                            onChange={handleChange}
                        />
                    </FormField>
                    <FormField>
                        <Button color="primary" type="submit">
                            {isLoading ? "Loading..." : "Update"}
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

export default EditReview