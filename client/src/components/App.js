import React, { useEffect, useContext, useState } from "react";
import { UserContext } from './User'
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import NewProduct from "../pages/NewProduct";
import Home from "./Home";
import SignUpForm from "./SignUpForm";
import Profile from "../pages/Profile";
import ProductList from '../pages/ProductList'
import Cart from '../pages/Cart'
import ReviewContainer from "../pages/ReviewContainer";
// import express from '/'

function App() {
  const { user, setUser } = useContext(UserContext);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [purchases, setPurchases] = useState([]);

  function addToCart(prod) {
    fetch(`api/users/${user.id}/cart_products`,
      {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product_id: prod.id,
          user_id: user.id,
          quantity: 1
        })
      }).then((r) => {
        if (r.ok) {
          r.json().then((cartProds) => setCart(cartProds))
        }
        else {
          r.json().then((err) => setErrors(err.errors));
        }
      })
      .catch((err) => setErrors(err.errors));
  };

  function removeFromCart(prodID) {
    fetch(`/api/cart_products/${prodID}`, {
      method: 'delete'
    }).then((r) => {
      if (r.ok) {
        setCart([...cart].filter((prod) => prod.product_id !== prodID))
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    })
      .catch((err) => setErrors(err.errors));

  };

  function deleteProduct(prodID) {
    setErrors([]);
    setIsLoading(true);

    console.log("Deleting product: " + prodID)

    fetch(`/api/products/${prodID}`, {
      method: 'delete'
    }).then((r) => {
      if (r.ok) {
        setProducts([...products].filter((prod) => prod.id !== prodID))
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    })
      .catch((err) => setErrors(err.errors));
  };

  useEffect(() => {
    //Get Available Products
    fetch("/api/products")
      .then((r) => r.json())
      .then(prods => {
        setProducts(prods)
        console.log("PRODUCTS SET =")
        console.log(prods)
      }
      )
      .catch(err => alert(err))
  }, [purchases]);

  useEffect(() => {
    //Get current user and Cart
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((usr) => {
          setUser(usr)
          fetch(`/api/users/${usr.id}/cart_products`).then((r) => {
            if (r.ok) {
              r.json().then((cartProds) => {
                setCart(cartProds)
              })
            }
          })
        });
      }
    });
  }, []);

  if (!user) {
    return <Login />;
  }
  else {
    return (
      <>

        <>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route path="/products/new">
              <NewProduct products={products} setProducts={setProducts} />
            </Route>
            <Route path="/products">
              <ProductList prods={products} deleteProd={deleteProduct} onAdd={addToCart} />
            </Route>
            <Route path="/reviews">
              <ReviewContainer />
            </Route>
            <Route path="/cart">
              <Cart onAdd={addToCart} cart={cart} setCart={setCart} onRemove={removeFromCart} products={products} />
            </Route>
            <Route path="/signin">
              <Login />
            </Route>
            <Route path="/profile">
              <Profile purchases={purchases} setPurchases={setPurchases} />
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