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
      href={`${ROUTE.SHOP.path}/${slug}`}
      className="w-full h-full flex flex-col gap-2.5 group"
    >
      <div className="w-full aspect-4/4">
        <div className="w-full h-full relative">
          <img
            className="w-full h-full object-cover absolute inset-0"
            src={img}
            alt={name}
          />
          {hoverImage && (
            <img
              className="w-full h-full object-cover absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              src={hoverImage}
              alt={`${name} hover`}
            />
          )}
        </div>
      </div>
      <div className="w-full h-full flex flex-col justify-between gap-2.5">
        <div className="w-full flex max-sm:flex-col justify-end sm:justify-between max-md:text-sm">
          <p className="w-full font-light line-clamp-3 uppercase sm:mr-2">
            {name}
          </p>
          <p className="min-w-fit text-website-orange font-mozilla font-medium text-end">
            {formatPrice(price)}
          </p>
        </div>
        <div className="w-full font-mozilla font-medium uppercase text-xs md:text-sm relative">
          <p className="w-full">{tag}</p>
          <div className="w-full h-full bg-white flex justify-center gap-3 absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {size.map((item: string) => (
              <div
                key={item}
                className="flex justify-center aspect-square border-b border-black"
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
