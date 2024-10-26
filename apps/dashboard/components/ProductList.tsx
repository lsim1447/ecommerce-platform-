"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchAllProducts } from "../services/inventoryService";

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

interface Product {
  id: string;
  name: string;
  inventory_count: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchAllProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <ProductListWrapper>
      <h2>Product List</h2>
      {products.map((product) => (
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
