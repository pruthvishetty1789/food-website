// src/components/PlaceOrder.js
import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const OrderContainer = styled.div`
  padding: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
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

const PlaceOrder = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you would normally send the order to the backend server
    // For this example, we'll just log it to the console
    console.log('Order placed', { name, address, cartItems });

    // Clear the cart after placing the order
    clearCart();

    // Navigate to a confirmation page or home page
    navigate('/confirmation');
  };

  return (
    <OrderContainer>
      <h1>Place Order</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <Button type="submit">Place Order (COD)</Button>
      </Form>
    </OrderContainer>
  );
};

export default PlaceOrder;
