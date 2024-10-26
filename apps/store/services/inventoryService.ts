import axios from "axios";

const inventoryServiceUrl = process.env.NEXT_PUBLIC_INVENTORY_SERVICE_URL;

export const fetchAllProducts = async () => {
  const response = await axios.get(`${inventoryServiceUrl}/inventory/all`);
  const { products } = response.data;

  return products;
};
