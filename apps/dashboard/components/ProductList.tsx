"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchAllProducts } from "../services/inventoryService";

const ProductListWrapper = styled.div`
  margin-bottom: 2rem;
`;

const ProductItem = styled.div`
  padding: 1rem;
  margin: 0.5rem 0;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
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
          Product ID({product.id}): {product.name} - Inventory:{" "}
          {product.inventory_count}
        </ProductItem>
      ))}
    </ProductListWrapper>
  );
};

export default ProductList;
