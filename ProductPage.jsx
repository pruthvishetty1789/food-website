// src/components/ProductPage.js
import React from 'react';
import products from '../data/products';
import { ProductContainer, ProductCard } from './StyledComponents';
import { Link } from 'react-router-dom';

const ProductPage = () => {
  return (
    <ProductContainer>
      {products.map(product => (
        <ProductCard key={product.id}>
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>Rs{product.price}</p>
          <Link to={`/products/${product.id}`}>View Details</Link>
        </ProductCard>
      ))}
    </ProductContainer>
  );
};

export default ProductPage;
