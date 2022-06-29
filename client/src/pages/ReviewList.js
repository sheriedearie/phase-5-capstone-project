import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";
import ReviewCard from './ReviewCard'

function ReviewList() {
  const [reviews, setReviews] = useState([]);
console.log("these are the reviews" + reviews)
  return (
    <Wrapper>
      <Box>
        {reviews.length > 0 ? (
          reviews?.map((reviews) => (
            <ReviewCard key={reviews.id} reviews={reviews} />
          
      ))
      ) : (
      <>
        <h2>No Reviews Found</h2>
        <Button as={Link} to="/reviews/new">
          Make a New Review
        </Button>

      </>
      )}
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

export default ReviewList;
