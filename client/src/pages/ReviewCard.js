// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
import { Button, Input, Error, FormField } from "../styles";
import React, { useState, useContext, useEffect } from "react";
import { useHistory, Link, useLocation } from 'react-router-dom';
import EditReview from './EditReview';



const ReviewCard = ({ review, prod, onDelete }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const history = useHistory();
  const [isEditing, setIsEditing] = useState(false);
  const location = useLocation()
  const [reviewObj, setReviewObj] = useState(review);

  console.log("this is the review card" + review?.product)

  const updateReview = () => {
    setIsEditing(true);
  }
console.log("the prod in review card" + prod)

  const commitUpdate = (updatedReview) => {
    console.log("UPDATED REVIEW")
    console.log(updatedReview);
    setReviewObj(updatedReview)
    setIsEditing(false)
  }
  useEffect(() => {
    if (!review) {
      fetch(`/api/reviews/${review.id}`)
        .then((r) => r.json())
        .then((review) => {
          setReviewObj(review);
          console.log("Product ID in the product card = ")
          console.log(review)
        });
    }
  }, []);
console.log("this is the review ID")
console.log(review.id)

  function deleteReview() {
    onDelete(review.id)
    history.push('/reviews');
  };

  console.log("REVIEW CARD")
  console.log(review)
  return (
    <div className="card" elevation={0}>
      {!isEditing ? (
        <>

          <div key={review?.id} align="center">
            <Link to={`/reviews/${review?.id}`}>
            <h1 variant="h5" component="h3" color="secondary">
              Product: {review?.product_name}
            </h1>
            </Link>
            <h1 variant="h5" component="h3" color="secondary">
              Rating: {review?.rating}
            </h1>
            <h1 variant="h5" component="h3" color="secondary">
              comment: {review?.comment}
            </h1>
            <h1 variant="h5" component="h3" color="secondary">
              Creator: {review?.buyer}
            </h1>
          </div>
          {location.pathname !== "/reviews" ? (
            <>
              <Button onClick={updateReview} variant="fill" color="primary" type="submit">
                {isLoading ? "Editing..." : "Edit"}
              </Button>
              <Button onClick={deleteReview} variant="fill" color="primary" type="submit">
                {isLoading ? "Deleting..." : "Delete"}
              </Button>
              <FormField>
                {errors?.map((err) => (
                  <Error key={err}>{err}</Error>
                ))}
              </FormField>
            </>
          ) : null}

        </>
      ) : <EditReview id={review.id} updateReview={commitUpdate} reviewObj={reviewObj} />

      }
    </div>
  );
}


export default ReviewCard