import { marked } from "marked";
import type { IProduct, IProductCard } from "@/types/pages-cms";

/**
 * Retrieves all products from the src/content/products directory.
 * Maps them to IProductCard format for list views.
 */
export const getAllProducts = async (): Promise<IProductCard[]> => {
  try {
    const files = import.meta.glob("../content/products/*.md", {
      query: "?raw",
      import: "default",
      eager: true,
    });

    const products = Object.values(files)
      .map((content) => {
        const parsed = JSON.parse(content as string) as IProduct;

        // Clean /public prefix from image paths for Astro/Vite compatibility
        return {
          ...parsed,
          category: parsed.category
            ? parsed.category.split(",").map((c) => c.trim())
            : [],
          img: parsed.img?.replace(/^(\/)?public/, ""),
          imgHover: parsed.imgHover?.replace(/^(\/)?public/, ""),
          gallery: parsed.gallery?.map((img) => img.replace(/^(\/)?public/, "")),
        } as IProductCard;
      })
      .filter((product) => product.active !== false);

    return products;
  } catch (error) {
    console.error("Error loading products:", error);
    return [];
  }
};

/**
 * Retrieves a single product by its slug.
 */
export const getProductBySlug = async (slug: string): Promise<IProduct | null> => {
  try {
    const files = import.meta.glob("../content/products/*.md", {
      query: "?raw",
      import: "default",
      eager: true,
    });

    const productFile = Object.values(files).find((content) => {
      const parsed = JSON.parse(content as string) as IProduct;
      return parsed.slug === slug && parsed.active !== false;
    });

    if (!productFile) return null;

    const product = JSON.parse(productFile as string) as IProduct;

    if (product.description) {
      product.description = await marked.parse(product.description);
    }

    // Clean image paths
    product.img = product.img?.replace(/^(\/)?public/, "");
    product.imgHover = product.imgHover?.replace(/^(\/)?public/, "");
    product.gallery = product.gallery?.map((img) =>
      img.replace(/^(\/)?public/, ""),
    );

    return product;
  } catch (error) {
    console.error(`Error loading product with slug ${slug}:`, error);
    return null;
  }
};

export const getProductPrueba = async (): Promise<IProduct | null> => {
  try {
    const products = import.meta.glob("../content/products/2026-06-10-calcetin-deportivo-transpirable.md", {
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
