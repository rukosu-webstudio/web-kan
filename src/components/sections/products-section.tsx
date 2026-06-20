import { useCallback, useEffect, useMemo, useState } from "react";
import type { FilterGroup } from "@/services/filter.service";
import type { IProductCard } from "@/types/pages-cms";
import ProductCard from "../section-components/productCard";
import SelectCategory from "../section-components/SelectCategory";

export const ProductsSection = ({
  products,
  filterGroups,
}: {
  products: IProductCard[];
  filterGroups: FilterGroup[];
}) => {
  // State for active filters
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string>
  >(() => {
    const initial: Record<string, string> = {};
    for (const group of filterGroups) {
      initial[group.title] = "Todo";
    }
    return initial;
  });

  const handleFilterChange = useCallback((title: string, value: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [title]: value,
    }));
  }, []);

  const clearFilters = () => {
    setSelectedFilters((prev) => {
      const cleared: Record<string, string> = {};
      for (const key of Object.keys(prev)) {
        cleared[key] = "Todo";
      }
      return cleared;
    });
  };

  // Handle initial filters from URL query parameters
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const categoryParam = params.get("category");

    if (categoryParam) {
      // Find the formatted label that matches the param (case insensitive)
      const group = filterGroups.find((g) => g.title === "Categorias");
      if (group) {
        const matchedItem = group.items.find(
          (item) => item.toLowerCase() === categoryParam.toLowerCase()
        );
        if (matchedItem) {
          handleFilterChange("Categorias", matchedItem);
        }
      }
    }
  }, [handleFilterChange, filterGroups]);

  // Check if any filter is active
  const hasActiveFilters = Object.values(selectedFilters).some(
    (val) => val !== "Todo"
  );

  // Filtering Logic (AND)
  const filteredProducts = useMemo(
    () =>
      products.filter((product) =>
        Object.entries(selectedFilters).every(([title, selectedValue]) => {
          if (selectedValue === "Todo") {
            return true;
          }

          const valToMatch = selectedValue.toLowerCase();

          if (title === "Categorias") {
            return product.category?.some(
              (c) => c.toLowerCase() === valToMatch
            );
          }

          if (title === "Etiquetas") {
            return product.tag?.toLowerCase() === valToMatch;
          }

          if (title === "Tallas") {
            return product.size?.some((s) => s.toLowerCase() === valToMatch);
          }

          if (title === "Colores") {
            return product.color?.toLowerCase() === valToMatch;
          }

          return true;
        })
      ),
    [products, selectedFilters]
  );

  return (
    <section className="flex w-full justify-center py-14 lg:py-20">
      <div className="max-wrapper w-full">
        <div className="grid w-full items-stretch gap-8 sm:gap-5 md:grid-cols-[30%_1fr] lg:grid-cols-[20%_1fr]">
          {/* FILTROS */}
          <div className="h-full w-full">
            <div className="sticky top-28 flex w-full flex-col gap-4 md:gap-6 lg:gap-10">
              <div className="flex flex-col gap-8">
                {filterGroups.map((group) => (
                  <div className="flex w-full flex-col gap-1" key={group.title}>
                    <p className="w-full font-medium text-xl uppercase">
                      {group.title}
                    </p>
                    <SelectCategory
                      items={group.items}
                      onValueChange={(val) =>
                        handleFilterChange(group.title, val)
                      }
                      placeholder={group.title}
                      value={selectedFilters[group.title]}
                    />
                  </div>
                ))}
              </div>

              {hasActiveFilters && (
                <button
                  className="link-animated w-fit font-mozilla text-sm text-website-orange uppercase"
                  onClick={clearFilters}
                  type="button"
                >
                  Borrar filtros
                </button>
              )}
            </div>
          </div>

          {/* PRODUCTOS */}
          <div className="flex w-full flex-col gap-10">
            <div className="flex w-full items-end justify-between border-black/10 border-b pb-4">
              <p className="font-light text-sm uppercase tracking-wider">
                {filteredProducts.length} Productos encontrados
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid w-full grid-cols-2 gap-6 md:gap-8 lg:grid-cols-3 xl:grid-cols-4 xl:gap-10">
                {filteredProducts.map((product) => (
                  <ProductCard
                    gallery={product.gallery}
                    img={product.img}
                    key={product.slug}
                    name={product.name}
                    price={product.price}
                    size={product.size}
                    slug={product.slug}
                    tag={product.tag}
                  />
                ))}
              </div>
            ) : (
              <div className="flex w-full flex-col items-center justify-center gap-4 border border-black/10 border-dashed py-20 text-center">
                <p className="font-light text-xl uppercase">
                  No se encontraron productos
                </p>
                <button
                  className="link-animated text-sm text-website-orange uppercase"
                  onClick={clearFilters}
                  type="button"
                >
                  Ver todos los productos
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
