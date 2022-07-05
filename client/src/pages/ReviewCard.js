// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
import { Button, Input, Error, FormField } from "../styles";
import React, { useState, useContext } from "react";
import { UserContext } from '../components/User';
import { useHistory, Link, useLocation } from 'react-router-dom';
import EditReview from './EditReview';



const ReviewCard = ({ review, prod, onDelete }) => {
  const [comment, setComment] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const { user, setUser } = useContext(UserContext);
  const [reviewID] = useState(review?.id);
  const history = useHistory();
  const [isEditing, setIsEditing] = useState(false);
  const location = useLocation()
  const [reviewObj, setReviewObj] = useState(review);

  console.log("this is the review card" + review?.product)

  const url = !!prod?.photo ? prod.photo.url : window.location.origin + '/default-avatar.png';
  const updateReview = () => {
    setIsEditing(true);
  }
console.log("the prod in review card" + prod)

  const commitUpdate = (updatedProd) => {
    console.log("UPDATED PRODUCT")
    console.log(updatedProd);
    setReviewObj(updatedProd)
    setIsEditing(false)
  }

  function deleteReview() {
    onDelete(prod.id)
    history.push('/reviews');
  };

  console.log(review?.product)
  return (
    <div className="card" elevation={0}>
      {!isEditing ? (
        <>

          <div key={review?.id} align="center">
            {/* <Link to={`/reviews/${review?.id}`}>
              <img src={url} alt="product" />
            </Link> */}
            <h1 variant="h5" component="h3" color="secondary">
              Product: {review?.product}
            </h1>
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