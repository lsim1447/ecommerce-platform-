"use client";
import React from "react";
import ProductList from "../components/ProductList";
import styled from "styled-components";

const DashboardContainer = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
  background-color: #e0e0e0;
  border-radius: 10px;
`;

const Home: React.FC = () => {
  return (
    <DashboardContainer>
      <h1>Store</h1>
      <ProductList />
    </DashboardContainer>
  );
};

export default Home;
