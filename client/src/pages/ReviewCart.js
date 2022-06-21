import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React from 'react';

const ReviewCart = ({ review }) => {
    console.log("this is the review cart")
    console.log(review)
  return (
    <Card className="card" elevation={0}>

            <CardContent align="center">
                <Typography variant="h5" component="h3" color="secondary">
                    Rating: {review.rating}
                </Typography>
                <Typography variant="h5" component="h3" color="secondary">
                    comment: {review.comment}
                </Typography>
            </CardContent>

        </Card>
  )
}

export default ReviewCart