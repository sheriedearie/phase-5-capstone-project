import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/api/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <Wrapper>
      <Logo>
        <Link to="/home">Kome N Get'it</Link>
      </Logo>
      <Nav user={user} setUser={setUser}>
      <Button as={Link} to="/profile">
          Profile
        </Button>
        <Button as={Link} to="/products/new">
          Create A New Product
        </Button>
        <Button as={Link} to="/products">
          Available Products
        </Button>
        <Button as={Link} to="/cart">
          Cart
        </Button>
        <Button as={Link} to="/reviews/new">
          Create a New Review
        </Button>
        <Button as={Link} to="/reviews">
          Reviews
        </Button>
        <Button variant="outline" onClick={handleLogoutClick}>
          Logout
        </Button>
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const Logo = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 3rem;
  color: #994718;
  margin: 0;
  line-height: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
`;

export default NavBar;
