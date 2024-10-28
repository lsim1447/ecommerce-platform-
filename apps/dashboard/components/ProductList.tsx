"use client";
import { Product } from "@repo/types";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useProduct } from "../app/contexts";

// Wrapper for the product list
const ProductListWrapper = styled.div`
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: #f9f9f9; /* Light background for contrast */
  border-radius: 8px;
`;

// Container for individual product items
const ProductItem = styled.div`
  display: flex; /* Use flexbox for layout */
  align-items: center; /* Center items vertically */
  padding: 1rem;
  margin: 0.5rem 0;
  background-color: #ffffff; /* White background for items */
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Soft shadow */
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease; /* Animation for hover */

  &:hover {
    transform: translateY(-3px); /* Slight lift on hover */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15); /* Darker shadow on hover */
  }
`;

// Fake image for products
const ProductImage = styled.img`
  width: 50px; /* Small image size */
  height: 50px; /* Small image size */
  border-radius: 5px; /* Rounded corners */
  margin-right: 1rem; /* Space between image and text */
`;

// Product details styling
const ProductDetails = styled.div`
  flex-grow: 1; /* Take available space */
`;

const ProductList: React.FC = () => {
  const { products, setProducts } = useProduct();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products/getAll")
      .then((response) => response.json())
      .then((data: Product[]) => {
        setLoading(false);
        setProducts(data);
      });
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <ProductListWrapper>
      <h2>Product List</h2>
      {products.map((product: Product) => (
        <ProductItem key={product.id}>
          <ProductImage src="https://fakeimg.pl/50/" alt="Product Image" />
          <ProductDetails>
            <strong>Product ID:</strong> {product.id} <br />
            <strong>Name:</strong> {product.name} <br />
            <strong>Inventory:</strong> {product.inventory_count}
          </ProductDetails>
        </ProductItem>
      ))}
    </ProductListWrapper>
  );
};

export default ProductList;
