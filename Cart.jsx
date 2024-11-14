// src/components/Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const CartContainer = styled.div`
  padding: 2rem;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem;
  background-color: #f8b400;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  font-weight: bold;

  &:hover {
    background-color: #e0a800;
  }
`;

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <CartContainer>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <CartItem key={index}>
              <p>{item.name}</p>
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </CartItem>
          ))}
          <Button onClick={() => navigate('/place-order')}>Place Order</Button>
        </>
      )}
    </CartContainer>
  );
};

export default Cart;
