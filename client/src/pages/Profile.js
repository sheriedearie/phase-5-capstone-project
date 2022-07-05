import { UserContext } from '../components/User'
import PurchasedProduct from './PurchasedProduct';
import React, { useEffect, useState, useContext } from 'react'

// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import ProductContainer from './ProductContainer';
// import ReviewContainer from './ReviewContainer';


function Profile() {
  const [purchases, setPurchases] = useState([]);
  const { user } = useContext(UserContext);
  const avatarURL = user.avatar === null ? window.location.origin + './default-avatar.png' : user.avatar.url;


  // map through purchases
  useEffect(() => {
    fetch("/api/purchased_products")
      .then((r) => r.json())
      .then((purchases) => {
        console.log("these are the purchases")
        console.log(purchases)
        setPurchases(purchases)
      });
  }, []);
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

      </div>
      <div>
        <h2>You have purchased this many products: {user.total_purchased_products}</h2>
        {/* {purchases?.map(purchase => {
          return purchase.products.map(product => <PurchasedProduct product={product} key={purchase?.id} purchase={purchase}/>)
        })}  */}

        {/* review console */}
        {/* check serializer */}
        {/* serialized in the products */}
        {/* how does backend receive the data if array of purchases, and a purchase has an array of products - then leave 45-47 alone */}
      </div>
    </>
  );
}

export default Profile