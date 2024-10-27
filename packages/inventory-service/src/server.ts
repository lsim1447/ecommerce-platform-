// This file is not part of the requirements.
// Only for presentational purpose

import express from "express";
import productRoutes from "./routes/productRoutes";
import * as dotenv from "dotenv";

dotenv.config();

const cors = require("cors");
const app = express();
app.use(cors());

app.use(express.json());

app.use("/products", productRoutes);
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Products | Inventory service running on port ${PORT}`);
});
