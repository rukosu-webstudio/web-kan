// biome-ignore lint/style/useFilenamingConvention: Component filenames are PascalCase
import { ROUTE } from "@/config/routes";
import { formatPrice } from "@/lib/utils";
import type { IProductCard } from "@/types/pages-cms";

export const ProductCard = ({
  name,
  price,
  tag,
  img,
  gallery,
  size,
  slug,
}: IProductCard) => {
  const hoverImage = gallery && gallery.length > 0 ? gallery[0] : img;

  return (
    <a
      className="group flex h-full w-full flex-col gap-2.5"
      href={`${ROUTE.SHOP.path}/${slug}`}
    >
      <div className="aspect-4/4 w-full">
        <div className="relative h-full w-full">
          <img
            alt={name}
            className="absolute inset-0 h-full w-full object-cover"
            height={400}
            src={img}
            width={400}
          />
          {hoverImage && (
            <img
              alt={`${name} hover`}
              className="absolute inset-0 z-10 h-full w-full object-cover opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              height={400}
              src={hoverImage}
              width={400}
            />
          )}
        </div>
      </div>
      <div className="flex h-full w-full flex-col justify-between gap-2.5">
        <div className="flex w-full justify-end max-sm:flex-col max-md:text-sm sm:justify-between">
          <p className="line-clamp-3 w-full font-light uppercase sm:mr-2">
            {name}
          </p>
          <p className="min-w-fit text-end font-medium font-mozilla text-website-orange">
            {formatPrice(price)}
          </p>
        </div>
        <div className="relative w-full font-medium font-mozilla text-xs uppercase md:text-sm">
          <p className="w-full">{tag}</p>
          <div className="absolute inset-0 flex h-full w-full justify-center gap-3 bg-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            {size?.map((item: string) => (
              <div
                className="flex aspect-square justify-center border-black border-b"
                key={item}
              >
                <p className="">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
