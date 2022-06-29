import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, Input } from "../styles";
import React, { useState, useContext } from "react";
import { UserContext } from '../components/User';


const ReviewCard = ({ review, product }) => {
  const [comment, setComment] = useState(product.comments);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const { user, setUser } = useContext(UserContext);
  const [reviewID] = useState(review?.id);
  const itemDeletedEvent = new Event("ItemDeleted")

  console.log("this is the review card")
  console.log(review)

  function deleteReview() {
    setErrors([]);
    setIsLoading(true);

    fetch(`/api/reviews/${reviewID}`, {
      method: 'delete'
    }).then((r) => {
      if (r.ok) {
        setUser(currentUser => {
          const newReviews = currentUser.reviews.filter((review) => {
            const otherId = review.id || review.review?.id
            const different = reviewID !== otherId
            console.log("Comparing " + reviewID + " to " + otherId)
            return different;
          });
          return { ...currentUser, reviews: newReviews }
        })
      }
      else {
        r.json().then((err) => setErrors(err.erros));
      }
    });

    const deleteButton = document.querySelector(`#deleteBtn${reviewID}`)
    deleteButton.textContent = "DELETING...";
    document.dispatchEvent(itemDeletedEvent)
  }
  
    return (
      <Card className="card" elevation={0}>

        <CardContent align="center">
          <Typography variant="h5" component="h3" color="secondary">
            Rating: {review.rating}
          </Typography>
          <Typography variant="h5" component="h3" color="secondary">
            comment: <Input
              type="text"
              id="comments"
              autoComplete="off"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </Typography>
          <Button>Update Comment</Button>
        </CardContent>
        <Button id={`deleteBtn${reviewID}`} onClick={deleteReview}>Delete Review</Button>
      </Card>
    )
    {/* <Button as={Link} to={{
            pathname: '/appointments/new', state: {
              walkerName: name, walkerId: id
            }
          }}> Create Appointment With This Walker </Button> */}
  }


  export default ReviewCard