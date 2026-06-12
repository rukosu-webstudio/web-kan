import { useMemo, useState, useEffect } from "react";
import type { IProductCard } from "@/types/pages-cms";
import type { FilterGroup } from "@/services/filter.service";
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
    filterGroups.forEach((group) => {
      initial[group.title] = "Todo";
    });
    return initial;
  });

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
  }, []);

  const handleFilterChange = (title: string, value: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [title]: value,
    }));
  };

  const clearFilters = () => {
    setSelectedFilters((prev) => {
      const cleared: Record<string, string> = {};
      Object.keys(prev).forEach((key) => {
        cleared[key] = "Todo";
      });
      return cleared;
    });
  };

  // Check if any filter is active
  const hasActiveFilters = Object.values(selectedFilters).some(
    (val) => val !== "Todo",
  );

  // Filtering Logic (AND)
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      return Object.entries(selectedFilters).every(([title, selectedValue]) => {
        if (selectedValue === "Todo") return true;

        const valToMatch = selectedValue.toLowerCase();

        if (title === "Categorias") {
          return product.category?.toLowerCase() === valToMatch;
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
      });
    });
  }, [products, selectedFilters]);

  return (
    <section className="w-full py-14 lg:py-20 flex justify-center">
      <div className="w-full max-wrapper ">
        <div className="w-full grid md:grid-cols-[30%_1fr] lg:grid-cols-[20%_1fr] items-stretch gap-8 sm:gap-5 ">
          {/* FILTROS */}
          <div className="w-full h-full">
            <div className="w-full sticky top-28 flex flex-col gap-4 md:gap-6 lg:gap-10">
              <div className="flex flex-col gap-8">
                {filterGroups.map((group, index) => (
                  <div key={index} className="w-full flex flex-col gap-1">
                    <p className="w-full text-xl uppercase font-medium">
                      {group.title}
                    </p>
                    <SelectCategory
                      placeholder={group.title}
                      items={group.items}
                      value={selectedFilters[group.title]}
                      onValueChange={(val) =>
                        handleFilterChange(group.title, val)
                      }
                    />
                  </div>
                ))}
              </div>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="w-fit text-website-orange uppercase font-mozilla text-sm link-animated"
                >
                  Borrar filtros
                </button>
              )}
            </div>
          </div>

          {/* PRODUCTOS */}
          <div className="w-full flex flex-col gap-10 ">
            <div className="w-full flex justify-between items-end border-b border-black/10 pb-4">
              <p className="text-sm font-light uppercase tracking-wider">
                {filteredProducts.length} Productos encontrados
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 xl:gap-10">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.slug}
                    img={product.img}
                    gallery={product.gallery}
                    name={product.name}
                    price={product.price}
                    tag={product.tag}
                    size={product.size}
                    slug={product.slug}
                  />
                ))}
              </div>
            ) : (
              <div className="w-full py-20 flex flex-col items-center justify-center gap-4 text-center border border-dashed border-black/10">
                <p className="text-xl font-light uppercase">
                  No se encontraron productos
                </p>
                <button
                  onClick={clearFilters}
                  className="text-website-orange uppercase text-sm link-animated"
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
