import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";
import ReviewCard from './ReviewCard'

function ReviewList({ reviews }) {
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    if (!reviews) {
      fetch("/api/reviews")
        .then((r) => {
          if (r.status === 200) {
            r.json()
              .then((reviews) => setReviewList(reviews))
          } else {
            r.json()
              .then((err) => alert(err.errors))
          }
        })
        .catch((err) => alert(err.errors))
      console.log("these are the reviewslist" + reviews)
    }
  }, [])

  const finalReviewList = reviews ? reviews : reviewList
  const renderReview = finalReviewList?.map(review => {
    return <ReviewCard key={review.id} review={review} />
  });

  return (
    <Wrapper>
      <Box>
        {reviews?.length > 0 ? (
          <div>{renderReview}</div>
        ) : (
          <>
            <h2>No Reviews Found</h2>
            <Button as={Link} to="/profile">
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
