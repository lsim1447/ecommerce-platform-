import { db, productsSchema } from "@repo/inventory-service";
import { Product } from "@repo/types";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // const allProducts: Product[] = await findAllProducts();
    const allProducts: Product[] = await db.select().from(productsSchema);
    return NextResponse.json(allProducts);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
