import React, { useEffect, useContext } from "react";
import {UserContext} from './User'
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
// import ReviewList from "../pages/ReviewList";
import NewReview from "../pages/NewReview";
import Home from "./Home";
import SignUpForm from "./SignUpForm";
import Profile from "../pages/Profile";


function App() {
  const { user, setUser } = useContext(UserContext);


  useEffect(() => {
    // auto-login
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) { return <Login />;
  }
  else {
  return (
      <>
        <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route path="/reviews/new">
              <NewReview />
            </Route>
            <Route path="/products/new">
              {/* <NewProducts/> */}
            </Route>
            <Route path="/products">
              {/* <ProductsCard/> */}
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
