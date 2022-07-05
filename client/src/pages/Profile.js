import React, { useContext } from 'react'
import { UserContext } from '../components/User'
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import ProductContainer from './ProductContainer';
// import ReviewContainer from './ReviewContainer';


function Profile() {
  const { user } = useContext(UserContext);
  const avatarURL = user.avatar === null ? window.location.origin + './default-avatar.png' : user.avatar.url;

  console.log("this is the profile")
  console.log(user)

  if (!user) return <h2> Please Login to View Profile</h2>;

  console.log(user.name)
  console.log("this is the end of the profile")

  return (
    <>
    <div className="card" elevation={0}>

      <h1>Welcome back {user.name}!</h1>
      <img src={avatarURL} alt="avatar" />
     
      {/* <ReviewContainer /> */}
      {/* show the products that have been purchased */}
    </div>
       <div>
        <h2>You have purchased this many products: {user.total_purchased_products}</h2>
      </div>
      </>
  );
}

export default Profile