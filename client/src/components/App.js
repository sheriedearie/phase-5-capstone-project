import React, { useEffect, useContext } from "react";
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
        <NavBar user={user} setUser={setUser} />
        <Switch>
          <Route path="/product/new">
            <NewProduct />
          </Route>
          <Route path="/products">
            <ProductContainer />
          </Route>
          <Route path="/reviews">
            <ReviewContainer />
          </Route>
          <Route path="/reviews/new">
            <NewReview />
          </Route>
          {/* create a new review but only if you 
          have already purchased the product */}
          {/* can't get there without purchasing something*/}
          <Route path="/cart">
            <Cart />
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
    );
  }
}

export default App;