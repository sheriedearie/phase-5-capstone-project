import ReviewList from "./ReviewList";
import React, { useState, useEffect } from "react";

const ReviewContainer = () => {
    const [reviews, setReviews] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState([]);


    console.log("this is a review container")
    console.log(reviews)

    useEffect(() => {
        fetch("/api/reviews")
            .then((r) => r.json())
            .then(reviews => setReviews(reviews))
            .catch(err => alert(err))
    }, []);

    function deleteReview(reviewID) {
        setErrors([]);
        setIsLoading(true);
    
        fetch(`/api/reviews/${reviewID}`, {
          method: 'delete'
        }).then((r) => {
          if (r.ok) {
            setReviews([...reviews].filter((review) => review.id !== reviewID))
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        })
        .catch((err) => setErrors(err.errors));
      };

    return (
        <>
            <h1>Reviews</h1>
            <ReviewList reviews={reviews} deleteReview={deleteReview} />
        </>
    )
}

export default ReviewContainer