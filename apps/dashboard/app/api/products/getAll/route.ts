import { db, productsSchema } from "@repo/inventory-service";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // const allProducts: any[] = await findAllProducts();
    const allProducts: any[] = await db.select().from(productsSchema);
    return NextResponse.json(allProducts);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
