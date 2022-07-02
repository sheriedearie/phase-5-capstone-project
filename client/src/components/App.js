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
import NewReview from '../pages/NewReview';
import ProductCard from "../pages/ProductCard";
import ReviewContainer from "../pages/ReviewContainer";
import EditProduct from "../pages/EditProduct";
import EditReview from "../pages/EditReview";

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
          <Route path="/products/:productID">
            <ProductCard />
          </Route>
          <Route path="/products/edit">
            <EditProduct />
          <Route path="/reviews/new">
            <NewReview />
          </Route>
          </Route>
          <Route path="/reviews">
            <ReviewContainer />
          </Route>
          <Route path="/reviews/edit">
            <EditReview />
          </Route>
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