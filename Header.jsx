// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #f8b400;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 1rem;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>BITE ELITE </h1>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Login</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;
