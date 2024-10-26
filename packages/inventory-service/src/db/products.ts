import { pgTable, text, integer } from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: text("name").notNull(),
  inventory_count: integer("inventory_count").notNull(),
});
