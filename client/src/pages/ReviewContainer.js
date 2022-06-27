import ReviewList from "./ReviewList";
import React, { useState, useEffect } from "react";

const ReviewContainer = () => {
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        fetch("/api/reviews")
        .then((r) => r.json())
        .then(reviews => setReviews(reviews))
        .catch(err => alert(err))
    }, []);

    return (
        <>
            <h1>Here are your reviews</h1>
            <ReviewList reviews={reviews} />
        </>
    )
}

export default ReviewContainer