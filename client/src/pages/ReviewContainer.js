import ReviewList from "./ReviewList";
import React, { useState, useEffect } from "react";

const ReviewContainer = () => {
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        fetch("/api/reviews").then((r) => r.json()).then(
            reviews => {
                console.log("Here are the reviews")
                console.log(reviews)
                setReviews(reviews);
            })
    }, []);

    return (
        <>
            <div>Here are your reviews</div>
            <ReviewList reviews={reviews} />
        </>
    )
}

export default ReviewContainer