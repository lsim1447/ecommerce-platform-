import { productsSchema } from "../db/productsSchema";
import { db } from "../db/client";
import { eq } from "drizzle-orm";

export const findAllProducts = async () => {
  try {
    return await db
      .select({
        id: productsSchema.id,
        name: productsSchema.name,
        inventory_count: productsSchema.inventory_count,
      })
      .from(productsSchema);
  } catch (error: any) {
    throw new Error("Find All Product failed!");
  }
};

export const updateProduct = async (productId: number, quantity: number) => {
  if (quantity < 0) {
    throw new Error('Inventory_count cannot be negative!"');
  }

  const [product] = await db
    .select({
      id: productsSchema.id,
      name: productsSchema.name,
      inventory_count: productsSchema.inventory_count,
    })
    .from(productsSchema)
    .where(eq(productsSchema.id, Number(productId)));

  if (!product) {
    throw new Error("No product found!");
  }

  // Update inventory count
  await db
    .update(productsSchema)
    .set({ inventory_count: quantity })
    .where(eq(productsSchema.id, productId));

  return {
    status: 200,
    message: "Inventory updated successfully",
    inventory_count: quantity,
  };
};
