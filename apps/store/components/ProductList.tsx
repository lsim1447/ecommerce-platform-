import { Product } from "@repo/types";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ProductGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ProductCard = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ProductImage = styled.div`
  width: 100%;
  height: 150px;
  background: url("https://fakeimg.pl/300/") center / cover no-repeat;
`;

const ProductDetails = styled.div`
  padding: 1rem;
  text-align: center;
`;

const ProductName = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin: 0.5rem 0;
  color: #333;
`;

const ProductInventory = styled.p`
  font-size: 0.9rem;
  color: #555;
`;

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
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
    <div>
      <h2>Product List</h2>
      <ProductGrid>
        {products.map((product: Product) => (
          <ProductCard key={product.id}>
            <ProductImage />
            <ProductDetails>
              <ProductName>{product.name}</ProductName>
              <ProductInventory>
                Inventory: {product.inventory_count}
              </ProductInventory>
            </ProductDetails>
          </ProductCard>
        ))}
      </ProductGrid>
    </div>
  );
};

export default ProductList;
