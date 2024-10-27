import { db, productsSchema } from "@repo/inventory-service";
import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";

export async function POST(request: Request) {
  const body = await request.json();
  const { productId, quantity } = body;

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
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    // Ensure inventory won't go negative
    if (quantity < 0) {
      return NextResponse.json(
        { error: "Inventory_count cannot be negative!" },
        { status: 400 }
      );
    }

    // Update inventory count
    await db
      .update(productsSchema)
      .set({ inventory_count: quantity })
      .where(eq(productsSchema.id, productId));

    return NextResponse.json({
      message: "Inventory updated successfully",
      inventory_count: quantity,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update inventory", details: error },
      { status: 500 }
    );
  }
}
