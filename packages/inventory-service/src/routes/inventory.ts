import { Router, Request, Response } from "express";
import { productsSchema } from "../db/productsSchema";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { eq } from "drizzle-orm";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL!,
});
const db = drizzle({ client: pool });

const router = Router();

router.get("/all", async (req: Request, res: Response) => {
  try {
    const allProducts = await db
      .select({
        id: productsSchema.id,
        name: productsSchema.name,
        inventory_count: productsSchema.inventory_count,
      })
      .from(productsSchema);

    res.status(200).json({ products: allProducts });
  } catch (error: any) {
    res
      .status(500)
      .json({ error: "Failed to fetch products", details: error.message });
  }
});

router.post("/update", async (req: Request, res: Response) => {
  const { productId, quantity } = req.body;

  try {
    const [product] = await db
      .select({
        id: productsSchema.id,
        name: productsSchema.name,
        inventory_count: productsSchema.inventory_count,
      })
      .from(productsSchema)
      .where(eq(productsSchema.id, Number(productId)));

    if (!product) {
      res.status(404).json({ error: "Product not found" });
    }

    // Ensure inventory won't go negative
    if (quantity < 0) {
      res.status(400).json({ error: "Inventory_count cannot be negative!" });
    }

    // Update inventory count
    await db
      .update(productsSchema)
      .set({ inventory_count: quantity })
      .where(eq(productsSchema.id, productId));

    res.json({
      message: "Inventory updated successfully",
      inventory_count: quantity,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to update inventory", details: error });
  }
});

router.get("/:productId", async (req: Request, res: Response) => {
  const { productId } = req.params;

  try {
    // Fetch product inventory
    const [product] = await db
      .select()
      .from(productsSchema)
      .where(eq(productsSchema.id, Number(productId)));

    if (!product) {
      res.status(404).json({ error: "Product not found" });
    }

    res.json({
      productId: product.id,
      inventory_count: product.inventory_count,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch inventory", details: error });
  }
});

export default router;
