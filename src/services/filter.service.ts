import type { IProductCard } from "@/types/pages-cms";

/**
 * Normalizes a string by trimming and converting to lowercase, 
 * then capitalizes the first letter for consistent display.
 */
export const formatFilterLabel = (label: string): string => {
  const normalized = label.trim().toLowerCase();
  if (!normalized) return "";
  return normalized.charAt(0).toUpperCase() + normalized.slice(1);
};

/**
 * Extracts unique, formatted values from a collection of strings or arrays of strings.
 */
export const getUniqueFilters = (values: (string | string[] | undefined)[]): string[] => {
  const uniqueSet = new Set<string>();
  
  values.forEach((value) => {
    if (!value) return;
    
    if (Array.isArray(value)) {
      value.forEach((v) => uniqueSet.add(v.trim().toLowerCase()));
    } else {
      uniqueSet.add(value.trim().toLowerCase());
    }
  });

  const sortedValues = Array.from(uniqueSet)
    .sort()
    .map(formatFilterLabel);

  return ["Todo", ...sortedValues];
};

export interface FilterGroup {
  title: string;
  items: string[];
}

/**
 * Generates all filter groups for the product list.
 */
export const getProductFilterGroups = (products: IProductCard[]): FilterGroup[] => {
  const activeProducts = products.filter((p) => p.active !== false);

  return [
    {
      title: "Categorias",
      items: getUniqueFilters(activeProducts.map((p) => p.tag)),
    },
    {
      title: "Tallas",
      items: getUniqueFilters(activeProducts.map((p) => p.size)),
    },
    {
      title: "Colores",
      items: getUniqueFilters(activeProducts.map((p) => p.color)),
    },
  ].filter(group => group.items.length > 1); // Only show filters that have more than just "Todo"
};
