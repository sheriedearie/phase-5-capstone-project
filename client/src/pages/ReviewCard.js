// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
import { Button, Input } from "../styles";
import React, { useState, useContext } from "react";
import { UserContext } from '../components/User';
import { useHistory } from 'react-router-dom';



const ReviewCard = ({ review, product }) => {
  const [comment, setComment] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const { user, setUser } = useContext(UserContext);
  const [reviewID] = useState(review?.id);
  const itemDeletedEvent = new Event("ItemDeleted");
  const history = useHistory();



  function deleteReview() {
    setErrors([]);
    setIsLoading(true);

    fetch(`/api/reviews/${reviewID}`, {
      method: 'delete'
    }).then((r) => {
      if (r.ok) {
        setUser(review)
         history.push('/reviews');
        
         } else {
        r.json().then((err) => setErrors(err.erros));
      }
    });
  }
    console.log("this is the review card" + review)


  console.log(review?.rating)

  return (
    <div className="card" elevation={0} key={review?.id}>
      <div align="center">
        <h1 variant="h5" component="h3" color="secondary">
          Rating: {review?.rating}
        </h1>
        <h1 variant="h5" component="h3" color="secondary">
          comment: {review?.comment}
        </h1>
        <h1 variant="h5" component="h3" color="secondary">
          Creator: {review?.buyer}
        </h1>
        <Button>Update Comment</Button>
      </div>
      <Button onClick={deleteReview} variant="fill" color="primary" type="submit">
      {isLoading ? "Deleting..." : "Delete"}
    </Button>
    </div>
  )
}


export default ReviewCard