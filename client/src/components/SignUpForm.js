import React, { useState, useRef } from "react";
import { Button, Error, Input, FormField, Label } from "../styles";

function SignUpForm({ onLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const avatar = useRef(null);


  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    const formData = new FormData(e.target)
    formData.append("name", name)
    formData.append("email", email)
    formData.append("username", username)
    formData.append("password", password)
    formData.append("password_confirmation", passwordConfirmation)
    //formData.append("avatar", avatar)
    console.log("Signup FORM DATA")
    for (let el of formData.values()) {
      console.log(el)
    }

    fetch("/api/signup", {
      method: "POST",
      body: formData
    })
      .then((r) => {
        setIsLoading(false);
        if (r.ok) {
          r.json().then((user) => onLogin(user));
        }
        else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormField>
        <Label htmlFor="email">Email</Label>
        <Input
          type="text"
          id="email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormField>
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password Confirmation</Label>
        <Input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
      </FormField>
      <FormField>
        <Label htmlFor="mediaurl">Profile Image</Label>
        <Input
          type="file"
          name="avatar"
          ref={avatar}
          onChange={(e) => avatar.current = e.target.value }
        />
      </FormField>
      <FormField>
        <Button type="submit">{isLoading ? "Loading..." : "Sign Up"}</Button>
      </FormField>
      <FormField>
        {errors?.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
      </FormField>
    </form>
  );
}

export default SignUpForm;
