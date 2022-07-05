import React, { useEffect, useContext, useState } from "react";
import { UserContext } from './User'
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import NewProduct from "../pages/NewProduct";
import Home from "./Home";
import SignUpForm from "./SignUpForm";
import Profile from "../pages/Profile";
import ProductContainer from "../pages/ProductContainer";
import Cart from '../pages/Cart'
import ReviewContainer from "../pages/ReviewContainer";
import NewReview from '../pages/NewReview';

function App() {
  const { user, setUser } = useContext(UserContext);
  const [cart, setCart] = useState([]);


  // const onRemove = (prod) => {
  //   const exist = cart.find((item) => item.id === prod.id)
  //   if (exist.qty === 1) {
  //     setCart(cart.filter((item) => item.id !== prod.id))
  //   } else {
  //   setCart(cart.map(item => item.id === prod.id ? {...exist, qty: exist.qty - 1 } : item))
  //   }
  // }

  function addToCart(prod) {
      const inCart = cart.find(item => item.id === prod.id);
      if (inCart) {
        setCart(cart.map(item => item.id === prod.id ? { ...inCart, qty: inCart.qty + 1 } : item
        ));
      } else {
        setCart([...cart, { ...prod, qty: 1 }])
      }
  };

  function onRemove(prod) {
    const inCart = cart.find((item) => item.id === prod)
    if (inCart.qty === 1) {
        setCart(cart.filter((item) => item.id !== prod))
    } else {
        setCart(cart.map(item => item.id === prod ? { ...inCart, qty: inCart.qty - 1 } : item))
    }
    console.log("this is prod inside of the cart")
    console.log(prod)
}

  useEffect(() => {
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) {
    return <Login />;
  }
  else {
    return (
      <>
{/* 
        <div className="App">
          <h1>Count: {count}</h1>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div> */}

        <>

          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route path="/products/new">
              <NewProduct />
            </Route>
            <Route path="/products">
              <ProductContainer onAdd={addToCart}/>
            </Route>
            <Route path="/reviews/new">
              <NewReview />
            </Route>
            <Route path="/reviews">
              <ReviewContainer />
            </Route>
            <Route path="/cart">
              <Cart onAdd={addToCart} cart={cart} setCart={setCart} onRemove={onRemove}/>
            </Route>
            <Route path="/signin">
              <Login />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/signup">
              <SignUpForm />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

        </>

      </>
    );
  }
}

export default App;