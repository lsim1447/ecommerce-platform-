import * as express from "express";
import inventoryRoutes from "./routes/inventory";
import * as dotenv from "dotenv";

dotenv.config();

const cors = require("cors");
const app = express();
app.use(cors());

app.use(express.json());

app.use("/inventory", inventoryRoutes);
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Inventory service running on port ${PORT}`);
});
