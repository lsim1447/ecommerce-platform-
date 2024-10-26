"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { updateProductInventory } from "../services/inventoryService";

const UpdateInventoryWrapper = styled.div`
  padding: 1rem;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 0.5rem;
  margin: 0.5rem 0;
  display: block;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  color: #fff;
  background-color: #0070f3;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #005bb5;
  }
`;

const UpdateInventory: React.FC = () => {
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [message, setMessage] = useState("");

  const handleUpdate = async () => {
    try {
      const response = await updateProductInventory(productId, quantity);
      setMessage(`Inventory updated! New count: ${response.inventory_count}`);
    } catch (error) {
      setMessage("Error updating inventory");
      console.error(error);
    }
  };

  return (
    <UpdateInventoryWrapper>
      <h2>Update Inventory</h2>
      <Input
        type="text"
        placeholder="Product ID"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      <Input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <Button onClick={handleUpdate}>Update Inventory</Button>
      {message && <p>{message}</p>}
    </UpdateInventoryWrapper>
  );
};

export default UpdateInventory;
