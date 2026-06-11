import { marked } from "marked";
import type { IProduct } from "@/types/pages-cms";

export const getProductPrueba = async (): Promise<IProduct | null> => {
  try {
    const products = import.meta.glob("../content/products/2026-06-09-camiseta-deportiva-transpirable.md", {
      query: "?raw",
      import: "default",
      eager: true,
    });

    const content = Object.values(products)[0] as string;

    if (!content) {
      throw new Error("Product file not found or empty");
    }

    const product = JSON.parse(content) as IProduct;

    if (product.description) {
      product.description = await marked.parse(product.description);
    }

    return product;
  } catch (error) {
    console.error("Error loading product:", error);
    return null;
  }
};
