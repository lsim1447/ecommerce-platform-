"use client";
import React from "react";
import ProductList from "../components/ProductList";
import UpdateInventory from "../components/UpdateInventory";
import styled from "styled-components";
import { ProductProvider } from "./contexts";

const DashboardContainer = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
  background-color: #e0e0e0;
  border-radius: 10px;
`;

const Home: React.FC = () => {
  return (
    <ProductProvider>
      <DashboardContainer>
        <h1>Store Dashboard</h1>
        <ProductList />
        <UpdateInventory />
      </DashboardContainer>
    </ProductProvider>
  );
};

export default Home;
