import type { IProductCard } from "@/types/pages-cms";
import ProductCard from "../section-components/productCard";
import SelectCategory from "../section-components/SelectCategory";

const allCategories = [
  {
    title: "Categorias",
    categories: ["Todo", "running", "gym", "womem", "men", "yoga"],
  },
  { title: "Tallas", categories: ["Todo", "s", "m", "l", "xl", "unitalla"] },
];

export const ProductsSection = ({ products }: { products: IProductCard[] }) => {
  return (
    <section className="w-full py-14 lg:py-20 flex justify-center">
      <div className="w-full max-wrapper ">
        <div className="w-full grid md:grid-cols-[30%_auto] lg:grid-cols-[20%_auto] justify-between items-stretch gap-8 sm:gap-5">
          <div className="w-full h-full">
            <div className="w-full sticky top-28 flex flex-col gap-4 md:gap-6 lg:gap-10">
              {allCategories.map((item, index) => {
                return (
                  <div key={index} className="w-full flex flex-col gap-2.5">
                    <p className="w-full text-xl lg:text-2xl uppercase">
                      {item.title}
                    </p>
                    <SelectCategory
                      placeholder={item.title}
                      items={item.categories}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full ">
            <div className="w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 xl:gap-10">
              {products.map((product) => {
                return (
                  <ProductCard
                    img={product.img}
                    imgHover={product.imgHover}
                    name={product.name}
                    price={product.price}
                    tag={product.tag}
                    size={product.size}
                    slug={product.slug}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
