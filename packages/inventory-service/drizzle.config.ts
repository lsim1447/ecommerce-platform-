import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: ["./src/db/productsSchema.ts"],
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    password: "mypassword",
    port: 5432,
    user: "szilardlazar",
    host: "localhost",
    database: "szilardlazar",
    ssl: false,
  },
  verbose: true,
  strict: true,
});
