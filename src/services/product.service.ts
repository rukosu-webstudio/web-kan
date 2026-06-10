export const getProductPrueba = async () => {
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

    return JSON.parse(content);
  } catch (error) {
    console.error("Error loading product:", error);
    return null;
  }
};
