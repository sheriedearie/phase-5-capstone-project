import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

import { Button, Error, Input, FormField, Label } from "../styles";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  function handleCallbackResponse(response){
    console.log("Encoded JWT ID token:" + response.credential)
  }

  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id: "1033425165287-n58hde6vdv6s4s0it1jme74qee404ghk.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })
    // debugger;
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "outline", size: "medium"}
    );
  }, []);


  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
        history.push("/home");
      } else {
        r.json().then((err) => setErrors(err.errors));
        console.log(errors)
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormField>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormField>
      <div id="signInDiv">
      </div>
      <FormField>
        <Button variant="fill" color="primary" type="submit">
          {isLoading ? "Loading..." : "Login"}
        </Button>
      </FormField>
      <FormField>
        {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
      </FormField>
    </form>
  );
}

export default LoginForm;
