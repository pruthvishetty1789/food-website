// src/components/Confirmation.js
import React from 'react';
import styled from 'styled-components';

const ConfirmationContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Confirmation = () => {
  return (
    <ConfirmationContainer>
      <h1>Order Confirmed</h1>
      <p>Thank you for your order! Your items will be delivered soon.</p>
    </ConfirmationContainer>
  );
};

export default Confirmation;
