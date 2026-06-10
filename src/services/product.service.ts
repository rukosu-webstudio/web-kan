import { getEntry } from "astro:content";

export const getProductPrueba = async () => {
  const entry = await getEntry("products", "2026-06-10-calcetin-deportivo-transpirable");
  return entry;
};
