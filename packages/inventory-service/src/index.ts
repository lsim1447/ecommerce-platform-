import { drizzle } from "drizzle-orm/node-postgres"; // Adjust according to your DB setup
import { Pool } from "pg";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Ensure this is set in your .env file
});

export * from "./db/productsSchema";

export * from "./repository/product";

// Initialize the Drizzle ORM
export const db = drizzle({ client: pool });
