!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{};e.SENTRY_RELEASE={id:"fc0a3215185208421c8509241fe46789d2fcc797"};var n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="d4690955-fe12-4f5b-8430-355fad1f7a99",e._sentryDebugIdIdentifier="sentry-dbid-d4690955-fe12-4f5b-8430-355fad1f7a99");}catch(e){}}();import './sentry.server.config_CPMNECBo.mjs';
import { c as createComponent } from './astro-component_4lonc0yU.mjs';
import 'piccolore';
import { T as maybeRenderHead, a4 as addAttribute, Q as renderTemplate } from './params-and-props_DEd3TzkK.mjs';
import { r as renderComponent } from './entrypoint_rwGAyWuX.mjs';
import { R as ROUTE, $ as $$BaseLayout } from './base-layout_BcZAYz_a.mjs';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const $$CollectionCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CollectionCard;
  const { title, cover, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} class="w-full aspect-square sm:aspect-3/4 relative button-hover group"> <div class="w-full h-full"> <div class="w-full h-full relative"> <img class="w-full h-full object-cover"${addAttribute(cover, "src")} alt=""> <div class="w-full h-full absolute inset-0 bg-black/50 group-hover:bg-black/75 transition-colors duration-200 z-10"></div> </div> </div> <div class="w-full h-full inset-0 absolute z-10"> <div class="w-full h-full flex flex-col justify-center items-center"> <p class="text-white text-2xl md:text-3xl xl:text-4xl font-light text-center uppercase">${title}</p> </div> </div> </a>`;
}, "/Users/mpacheco/Documents/projects/PROJECT-web-kan/web-kan/src/components/section-components/collectionCard.astro", void 0);

const $$CollectionsSection = createComponent(($$result, $$props, $$slots) => {
  const collections = [
    {
      title: "camisetas",
      cover: "/default/camisetas-collection.png",
      url: `${ROUTE.SHOP.path}?category=runners`
    },
    {
      title: "medias",
      cover: "/default/medias-collection.png",
      url: `${ROUTE.SHOP.path}?category=runners`
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="featured" class="w-full py-14 lg:py-20 flex justify-center scroll-mt-10"> <div class="w-full max-wrapper flex flex-col gap-6 lg:gap-10"> <h2 class="w-full text-2xl font-montserrat uppercase">COLECCIONES</h2> <div class="w-full border border-[#DADADA]"></div> <div class="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 xl:gap-10"> ${collections.map((collection) => {
    return renderTemplate`${renderComponent($$result, "CollectionCard", $$CollectionCard, { "title": collection.title, "cover": collection.cover, "url": collection.url })}`;
  })} </div> </div> </section>`;
}, "/Users/mpacheco/Documents/projects/PROJECT-web-kan/web-kan/src/components/sections/collections-section.astro", void 0);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function cls11(...inputs) {
  return cn(...inputs);
}
function formatPrice(price) {
  const numericPrice = typeof price === "string" ? parseFloat(price) : price;
  if (isNaN(numericPrice)) {
    return "GTQ 0.00";
  }
  return new Intl.NumberFormat("es-GT", {
    style: "currency",
    currency: "GTQ",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(numericPrice);
}

const $$ProductCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ProductCard;
  const { name, price, tag, img, imgHover, size, slug } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`${ROUTE.SHOP.path}/${slug}`, "href")} class="w-full h-full flex flex-col gap-2.5 group"> <div class="w-full aspect-4/4"> <div class="w-full h-full relative"> <img class="w-full h-full object-cover absolute inset-0"${addAttribute(img, "src")} alt=""> <img class="w-full h-full object-cover absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"${addAttribute(imgHover, "src")} alt=""> </div> </div> <div class="w-full h-full flex flex-col justify-between gap-2.5"> <div class="w-full flex max-sm:flex-col justify-end sm:justify-between  max-md:text-sm"> <p class="w-full font-light line-clamp-3 uppercase sm:mr-2"> ${name} </p> <p class="min-w-fit text-website-orange font-mozilla font-medium text-end"> ${formatPrice(price)} </p> </div> <div class="w-full font-mozilla font-medium uppercase text-xs md:text-sm relative"> <p class="w-full"> ${tag} </p> <div class="w-full h-full bg-white flex justify-center gap-3 absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"> ${size.map((item) => renderTemplate`<div class="flex justify-center aspect-square border-b border-black"> <p class="">${item}</p> </div>`)} </div> </div> </div> </a>`;
}, "/Users/mpacheco/Documents/projects/PROJECT-web-kan/web-kan/src/components/section-components/productCard.astro", void 0);

const $$FeaturedProductsSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$FeaturedProductsSection;
  const { products } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="featured" class="w-full py-14 lg:py-20 flex justify-center scroll-mt-10"> <div class="w-full max-wrapper flex flex-col gap-6 lg:gap-10"> <h2 class="w-full text-2xl font-montserrat uppercase">
productos destacados
</h2> <div class="w-full border border-[#DADADA]"></div> <div class="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 xl:gap-10"> ${products.map((product) => {
    return renderTemplate`${renderComponent($$result, "ProductCard", $$ProductCard, { "img": product.img, "imgHover": product.imgHover, "name": product.name, "price": product.price, "tag": product.tag, "size": product.size, "slug": product.slug })}`;
  })} </div> </div> </section>`;
}, "/Users/mpacheco/Documents/projects/PROJECT-web-kan/web-kan/src/components/sections/featured-products-section.astro", void 0);

const $$PrimaryButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PrimaryButton;
  const { label, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="w-fit px-14 lg:px-20 py-3 lg:py-5 bg-white lg:text-xl uppercase button-hover"${addAttribute(href, "href")}> ${label} </a>`;
}, "/Users/mpacheco/Documents/projects/PROJECT-web-kan/web-kan/src/components/section-components/primaryButton.astro", void 0);

const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="w-full min-h-screen flex justify-center relative"> <div class="w-full h-full absolute top-0"> <div class="w-full h-full relative"> <div class="w-full h-full bg-black"> <img class="h-full xl:w-full object-cover" src="/images/hero.jpeg" alt=""> </div> <div class="w-full h-full absolute top-0 bg-black/40"></div> </div> </div> <div class="w-full max-wrapper z-10 flex flex-col justify-end"> <div class="w-full h-full flex justify-center items-center pt-20"> <img id="hero-snake" class="w-20 object-cover transition-all duration-700 ease-out" src="/images/w-snake.png" alt=""> </div> <div class="w-full flex flex-col gap-8 pb-20"> <h1 class="w-full max-w-[480px] text-white text-3xl md:text-[40px] font-mozilla font-extralight md:text-base/10">
LA CONSTANCIA SUPERA LA MOTIVACIÓN
</h1> ${renderComponent($$result, "PrimaryButton", $$PrimaryButton, { "label": "ver colección" })} </div> </div> </section>`;
}, "/Users/mpacheco/Documents/projects/PROJECT-web-kan/web-kan/src/components/sections/hero-section.astro", void 0);

const $$TwoCollumnsSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$TwoCollumnsSection;
  const {
    mode = 1,
    products,
    title,
    desc,
    cover,
    url
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="women" class="w-full py-14 lg:py-20 flex justify-center scroll-mt-10"> <div class="w-full max-wrapper flex flex-col gap-6 lg:gap-10"> <div class="w-full grid grid-cols-1 lg:grid-cols-5"> <!-- COVER --> <div${addAttribute(cls11("lg:col-span-2", `lg:order-${mode}`), "class")}> <div class="max-lg:hidden w-full h-full flex justify-center items-center"> <div class="w-full h-full flex flex-col justify-end items-center max-w-[574px] aspect-square lg:aspect-12/16 overflow-hidden relative"> <div class="w-full flex flex-col justify-center items-center gap-3 z-30 py-20"> <p class="w-full max-w-[300px] text-lg lg:text-xl font-light uppercase text-center text-white"> ${desc} </p> ${renderComponent($$result, "PrimaryButton", $$PrimaryButton, { "label": "Ver todo", "href": url })} </div> <div class="w-full h-full bg-black/25 absolute inset-0 z-10"></div> <img class="w-full h-full object-cover absolute inset-0"${addAttribute(cover, "src")} alt=""> </div> </div> </div> <!-- PRODUCTOS --> <div${addAttribute(cls11("lg:col-span-3 lg:px-6 xl:px-10"), "class")}> <div class="w-full flex flex-col gap-5"> <h2 class="w-full text-2xl font-montserrat uppercase">${title}</h2> <div class="w-full border border-[#DADADA]"></div> <div class="lg:hidden w-full h-full flex justify-center items-center"> <div class="w-full h-full flex flex-col justify-end items-center max-w-[574px] aspect-square lg:aspect-12/16 overflow-hidden relative"> <div class="w-full flex flex-col justify-center items-center gap-3 z-30 py-20"> <p class="w-full max-w-[300px] text-lg lg:text-xl font-light uppercase text-center text-white"> ${desc} </p> ${renderComponent($$result, "PrimaryButton", $$PrimaryButton, { "label": "Ver todo", "href": url })} </div> <div class="w-full h-full bg-black/25 absolute inset-0 z-10"></div> <img class="w-full h-full object-cover absolute inset-0"${addAttribute(cover, "src")} alt=""> </div> </div> <div class="w-full grid grid-cols-2 gap-6 md:gap-8 xl:gap-10"> ${products.map((product) => {
    return renderTemplate`${renderComponent($$result, "ProductCard", $$ProductCard, { "img": product.img, "imgHover": product.imgHover, "name": product.name, "price": product.price, "tag": product.tag, "size": product.size, "slug": product.slug })}`;
  })} </div> </div> </div> </div> </div> </section>`;
}, "/Users/mpacheco/Documents/projects/PROJECT-web-kan/web-kan/src/components/sections/two-collumns-section.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const products = [
    {
      name: "camiseta deportiva transpirable",
      slug: "camiseta-deportiva-transpirable",
      price: 250,
      tag: "running",
      img: "/default/medias.png",
      imgHover: "/default/medias-hover.png",
      size: ["s", "m", "l", "xl"]
    },
    {
      name: "shorts de entrenamiento",
      slug: "shorts-de-entrenamiento",
      price: 180.5,
      tag: "gym",
      img: "/default/medias.png",
      imgHover: "/default/medias-hover.png",
      size: ["m", "l", "xl"]
    },
    {
      name: "sudadera con capucha",
      slug: "sudadera-con-capucha",
      price: 450,
      tag: "invierno",
      img: "/default/medias.png",
      imgHover: "/default/medias-hover.png",
      size: ["s", "m", "l", "xl", "xxl"]
    },
    {
      name: "leggings de compresión",
      slug: "leggings-de-compresion",
      price: 300,
      tag: "yoga",
      img: "/default/medias.png",
      imgHover: "/default/medias-hover.png",
      size: ["xs", "s", "m", "l"]
    },
    {
      name: "top deportivo sin costuras",
      slug: "top-deportivo-sin-costuras",
      price: 150,
      tag: "mujer",
      img: "/default/medias.png",
      imgHover: "/default/medias-hover.png",
      size: ["s", "m", "l"]
    },
    {
      name: "pantalón jogger ligero",
      slug: "pantalon-jogger-ligero",
      price: 320,
      tag: "casual",
      img: "/default/medias.png",
      imgHover: "/default/medias-hover.png",
      size: ["s", "m", "l", "xl"]
    },
    {
      name: "chamarra rompevientos",
      slug: "chamarra-rompevientos",
      price: 550,
      tag: "outdoor",
      img: "/default/medias.png",
      imgHover: "/default/medias-hover.png",
      size: ["m", "l", "xl"]
    },
    {
      name: "muñequeras de tenis",
      slug: "munequeras-de-tenis",
      price: 60,
      tag: "accesorios",
      img: "/default/medias.png",
      imgHover: "/default/medias-hover.png",
      size: ["unitalla"]
    }
  ];
  const women = [products[0], products[1], products[2], products[3]];
  const men = [products[2], products[3], products[4], products[5]];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "metadata": {
    title: "Home",
    description: "Explore our brand",
    ignoreTitleTemplate: true
  } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$HeroSection, {})} ${renderComponent($$result2, "FeaturedProductsSection", $$FeaturedProductsSection, { "products": products })} ${renderComponent($$result2, "TwoCollumnsSection", $$TwoCollumnsSection, { "products": women, "title": "WOMEN", "desc": "EL ESTÁNDAR KAN AHORA SE EXTIENDE A LAS mujeres", "cover": "/images/women-banner.png", "url": `${ROUTE.SHOP.path}?category=women` })} ${renderComponent($$result2, "TwoCollumnsSection", $$TwoCollumnsSection, { "mode": "2", "products": men, "title": "MEN", "desc": "EL ESTÁNDAR KAN AHORA SE EXTIENDE A LOS HOMBRES", "cover": "/images/men-banner.png", "url": `${ROUTE.SHOP.path}?category=men` })} ${renderComponent($$result2, "CollectionsSection", $$CollectionsSection, {})} ` })}`;
}, "/Users/mpacheco/Documents/projects/PROJECT-web-kan/web-kan/src/pages/index.astro", void 0);

const $$file = "/Users/mpacheco/Documents/projects/PROJECT-web-kan/web-kan/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
