import { UserContext } from '../components/User'
import PurchasedProduct from './PurchasedProduct';
import React, { useEffect, useState, useContext } from 'react'

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
  // const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

  return (
    <>
      <div className="card" elevation={0}>

        <h1>Welcome back {user.name}!</h1>
        <img src={avatarURL} alt="avatar" />

      </div>

      <div>
        {/* if the cart checkout out increase it */}
        <h2>You have purchased this many products: {purchases.length}</h2>
        {/* Displaying products that have been purchased */}
        {purchases?.map(purchase => {
          return (<PurchasedProduct key={purchase?.id} purchase={purchase} />)
        })}
      </div>

    </>
  );
}

export default Profile