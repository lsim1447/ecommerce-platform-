import { Router, Request, Response } from "express";
import { findAllProducts, findProductById, updateProduct } from "../repository";

const router = Router();

router.get("/all", async (req: Request, res: Response) => {
  try {
    const allProducts = await findAllProducts();

    res.status(200).json({ products: allProducts });
  } catch (error: any) {
    res
      .status(500)
      .json({ error: "Failed to fetch products", details: error.message });
  }
});

router.get("/:productId", async (req: Request, res: Response) => {
  const { productId } = req.params;

  try {
    // Fetch product inventory
    const product = await findProductById(Number(productId));

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

router.post("/update", async (req: Request, res: Response) => {
  const { productId, quantity } = req.body;

  try {
    updateProduct(productId, quantity);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to update inventory", details: error });
  }
});

export default router;
