!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{};e.SENTRY_RELEASE={id:"fc0a3215185208421c8509241fe46789d2fcc797"};var n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="4688f566-3266-49ce-98d3-bd4607e51d06",e._sentryDebugIdIdentifier="sentry-dbid-4688f566-3266-49ce-98d3-bd4607e51d06");}catch(e){}}();import { c as createComponent } from './astro-component_4lonc0yU.mjs';
import 'piccolore';
import { U as createRenderInstruction, Q as renderTemplate, a4 as addAttribute, b2 as unescapeHTML, T as maybeRenderHead, b3 as renderHead, b4 as renderSlot, F as Fragment } from './params-and-props_DEd3TzkK.mjs';
import { s as spreadAttributes, r as renderComponent } from './entrypoint_rwGAyWuX.mjs';
import { $ as $$Font } from './_astro_assets_DwExGD3h.mjs';
import 'clsx';
import { B as BUSINESS_CONFIG } from './business_BbZCAVXO.mjs';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$Favicons = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Favicons --><link rel="icon" href="/favicon.ico" sizes="any"><link rel="icon" href="/icon.svg" type="image/svg+xml"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><link rel="manifest" href="/manifest.webmanifest"><!-- Favicon for IE --><link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"><!-- Favicons for different sizes --><link rel="icon" type="image/png" sizes="16x16" href="/icon-16.png"><link rel="icon" type="image/png" sizes="32x32" href="/icon-32.png"><link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png"><!-- Apple Touch Icon (for backwards compatibility) --><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">`;
}, "/Users/mpacheco/Documents/projects/PROJECT-web-kan/web-kan/src/components/fundations/favicons.astro", void 0);

const $$Meta = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Meta Tags --><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- Theme Color for Mobile Browsers --><meta name="theme-color" content="#000000"><!-- For IE --><meta http-equiv="X-UA-Compatible" content="IE=edge">`;
}, "/Users/mpacheco/Documents/projects/PROJECT-web-kan/web-kan/src/components/fundations/meta.astro", void 0);

const $$OpenGraphArticleTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "/Users/mpacheco/Documents/projects/PROJECT-web-kan/web-kan/node_modules/.pnpm/astro-seo@1.1.0_prettier@3.5.3_typescript@5.9.2/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", void 0);

const $$OpenGraphBasicTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}><meta property="og:type"${addAttribute(openGraph.basic.type, "content")}><meta property="og:image"${addAttribute(openGraph.basic.image, "content")}><meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "/Users/mpacheco/Documents/projects/PROJECT-web-kan/web-kan/node_modules/.pnpm/astro-seo@1.1.0_prettier@3.5.3_typescript@5.9.2/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", void 0);

const $$OpenGraphImageTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}${height ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}${alt ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "/Users/mpacheco/Documents/projects/PROJECT-web-kan/web-kan/node_modules/.pnpm/astro-seo@1.1.0_prettier@3.5.3_typescript@5.9.2/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", void 0);

const $$OpenGraphOptionalTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "/Users/mpacheco/Documents/projects/PROJECT-web-kan/web-kan/node_modules/.pnpm/astro-seo@1.1.0_prettier@3.5.3_typescript@5.9.2/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", void 0);

const $$ExtendedTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}${props.extend.meta?.map(({ content, httpEquiv, media, name, property }) => renderTemplate`<meta${addAttribute(name, "name")}${addAttribute(property, "property")}${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(media, "media")}>`)}`;
}, "/Users/mpacheco/Documents/projects/PROJECT-web-kan/web-kan/node_modules/.pnpm/astro-seo@1.1.0_prettier@3.5.3_typescript@5.9.2/node_modules/astro-seo/src/components/ExtendedTags.astro", void 0);

const $$TwitterTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "/Users/mpacheco/Documents/projects/PROJECT-web-kan/web-kan/node_modules/.pnpm/astro-seo@1.1.0_prettier@3.5.3_typescript@5.9.2/node_modules/astro-seo/src/components/TwitterTags.astro", void 0);

const $$LanguageAlternatesTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$LanguageAlternatesTags;
  const { languageAlternates } = Astro2.props;
  return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "/Users/mpacheco/Documents/projects/PROJECT-web-kan/web-kan/node_modules/.pnpm/astro-seo@1.1.0_prettier@3.5.3_typescript@5.9.2/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro", void 0);

const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || (props.openGraph.basic.title ?? void 0) == void 0 || (props.openGraph.basic.type ?? void 0) == void 0 || (props.openGraph.basic.image ?? void 0) == void 0) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is strongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  const baseUrl = Astro2.site ?? Astro2.url;
  const defaultCanonicalUrl = new URL(Astro2.url.pathname + Astro2.url.search, baseUrl);
  const shouldRemoveTrailingSlash = Astro2.props.removeTrailingSlashForRoot && Astro2.url.pathname === "/";
  const canonicalHref = shouldRemoveTrailingSlash ? defaultCanonicalUrl.origin + defaultCanonicalUrl.search : defaultCanonicalUrl.href;
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}<link rel="canonical"${addAttribute(Astro2.props.canonical || canonicalHref, "href")}>${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}${Astro2.props.noarchive ? ", noarchive" : ""}${Astro2.props.nocache ? ", nocache" : ""}${Astro2.props.robotsExtras ? `, ${Astro2.props.robotsExtras}` : ""}`, "content")}>${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}${Astro2.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro2.props })}`}`;
}, "/Users/mpacheco/Documents/projects/PROJECT-web-kan/web-kan/node_modules/.pnpm/astro-seo@1.1.0_prettier@3.5.3_typescript@5.9.2/node_modules/astro-seo/src/SEO.astro", void 0);

const $$Seo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Seo;
  const canonicalDefault = Astro2.url.href;
  const { metadata } = Astro2.props;
  const {
    title = BUSINESS_CONFIG.name,
    description = BUSINESS_CONFIG.description,
    canonical = canonicalDefault,
    openGraph = {},
    ignoreTitleTemplate = false,
    ...rest
  } = metadata ?? {};
  const ogImageUrl = openGraph?.image?.url || BUSINESS_CONFIG.openGraph;
  const absoluteImageUrl = ogImageUrl?.startsWith("http") ? ogImageUrl : ogImageUrl?.startsWith("/") ? `${Astro2.site}${ogImageUrl}` : ogImageUrl ? `${Astro2.site}/${ogImageUrl}` : BUSINESS_CONFIG.openGraph;
  return renderTemplate`${renderComponent($$result, "SEO", $$SEO, { "title": title, "titleTemplate": ignoreTitleTemplate ? void 0 : `%s - ${BUSINESS_CONFIG.name}`, "description": description, "canonical": canonical, "openGraph": {
    basic: {
      title,
      type: "website",
      image: absoluteImageUrl
    },
    optional: {
      description,
      siteName: BUSINESS_CONFIG.name,
      locale: "es_ES"
    }
  }, "twitter": {
    card: "summary_large_image",
    site: BUSINESS_CONFIG.site,
    creator: BUSINESS_CONFIG.social?.twitter ?? "@yourhandle"
  }, ...rest })}`;
}, "/Users/mpacheco/Documents/projects/PROJECT-web-kan/web-kan/src/components/fundations/seo.astro", void 0);

const ROUTE = {
  HOME: {
    title: "Inicio",
    path: "/"
  },
  MEN: {
    title: "Men",
    path: "/#men"
  },
  WOMEN: {
    title: "Women",
    path: "/#women"
  },
  FEATURED: {
    title: "Featured",
    path: "/#featured"
  },
  SHOP: {
    title: "Shop",
    path: "/shop"
  },
  HISTORY: {
    title: "History",
    path: "/history"
  },
  CONTACT: {
    title: "Contact",
    path: "/#contact"
  }
};
const NAV_COLLECTIONS = [ROUTE.MEN, ROUTE.WOMEN, ROUTE.FEATURED];
const NAV_ROUTES = [ROUTE.HISTORY, ROUTE.CONTACT];

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const footerRoutes = [
    {
      title: "Menú",
      routes: [ROUTE.HOME, ROUTE.HISTORY, ROUTE.SHOP]
    },
    {
      title: "COLECCIONES",
      routes: [ROUTE.FEATURED, ROUTE.WOMEN, ROUTE.MEN]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="w-full bg-black"> <div class="w-full max-wrapper flex flex-col gap-10 py-20"> <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-10"> <div class="w-full h-full"> <div class="w-full h-full flex max-lg:justify-center max-h-[180px]"> <img class="h-full object-cover" src="/images/footer-logo.png" alt=""> </div> </div> <div class="w-full flex max-lg:justify-center justify-end items-center"> <div class="w-fit flex justify-end gap-x-10 text-white uppercase"> ${footerRoutes.map((item) => {
    return renderTemplate`<div class="flex flex-col gap-y-4 gap-x-10 items-end"> <p class="text-end font-montserrat font-semibold text-2xl"> ${item.title} </p> <div class=" flex flex-col gap-2 items-end nav-link-animated"> ${item.routes.map((route) => {
      return renderTemplate`<a class=" text-end font-light"${addAttribute(route.path, "href")}> ${route.title} </a>`;
    })} </div> </div>`;
  })} </div> </div> </div> <p class="w-full text-center text-website-orange">
KAN © - All rights reserved
</p> </div> </footer>`;
}, "/Users/mpacheco/Documents/projects/PROJECT-web-kan/web-kan/src/components/globals/footer.astro", void 0);

const $$Menu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Menu;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>`;
}, "/Users/mpacheco/Documents/projects/PROJECT-web-kan/web-kan/src/components/icons/menu.astro", void 0);

const $$Close = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Close;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"${addAttribute(`${className}`, "class")}> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path> </svg>`;
}, "/Users/mpacheco/Documents/projects/PROJECT-web-kan/web-kan/src/components/icons/close.astro", void 0);

const $$MobileMenu = createComponent(($$result, $$props, $$slots) => {
  const allLinks = [...NAV_COLLECTIONS, ROUTE.SHOP, ...NAV_ROUTES];
  return renderTemplate`${maybeRenderHead()}<div id="mobile-menu" class="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center translate-x-full transition-transform duration-300 md:hidden"> <button id="mobile-menu-close" class="absolute top-10 right-6 text-white w-10 h-10"> ${renderComponent($$result, "Close", $$Close, { "class": "w-full h-full" })} </button> <div class="w-full h-full max-h-[600px] flex flex-col justify-between items-center p-4 gap-20"> <div class="w-full h-20 flex justify-center"> <img src="/images/w-snake.png" alt=""> </div> <nav class="flex flex-col items-center gap-6 text-white uppercase text-2xl font-light nav-link-animated"> ${allLinks.map((route) => renderTemplate`<a${addAttribute(route.path, "href")}${addAttribute(`nav-link-mobile ${route.path === ROUTE.SHOP.path ? "text-website-orange" : ""}`, "class")}> ${route.title} </a>`)} </nav> <p class="w-full text-center text-website-orange text-sm">
KAN © - All rights reserved
</p> </div> </div> ${renderScript($$result, "/Users/mpacheco/Documents/projects/PROJECT-web-kan/web-kan/src/components/globals/mobile-menu.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/mpacheco/Documents/projects/PROJECT-web-kan/web-kan/src/components/globals/mobile-menu.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="w-full fixed top-0 z-40 transition-all duration-300 ease-in-out" id="main-header"> <nav class="w-full flex justify-center pt-10 pb-2 transition-all duration-300 ease-in-out" id="main-nav"> <div class="w-full max-wrapper flex justify-between items-center max-md:text-xl lg:text-lg xl:text-xl text-white uppercase font-light gap-6 xl:gap-10"> <div class="flex-1 basis-0 flex items-center gap-6 xl:gap-12 max-md:hidden nav-link-animated"> ${NAV_COLLECTIONS.map((route) => renderTemplate`<a class=""${addAttribute(route.path, "href")}> ${route.title} </a>`)} </div> <div class="flex-1 basis-0 flex items-center justify-start md:hidden"> <a class="text-website-orange"${addAttribute(ROUTE.SHOP.path, "href")}> ${ROUTE.SHOP.title} </a> </div> <a class="flex-none flex justify-center items-center relative h-12 lg:h-16 button-hover"> <img id="logo-kan" class="h-12 lg:h-16 w-auto object-cover transition-all duration-500 ease-in-out" src="/images/w-kan.png" alt=""> <img id="logo-main" class="h-12 lg:h-16 w-auto object-cover transition-all duration-500 ease-in-out logoHeaderAnimation" src="/images/w-snake.png" alt=""> </a> <div class="flex-1 basis-0 flex items-center justify-end md:hidden"> <button id="mobile-menu-open"> ${renderComponent($$result, "Menu", $$Menu, {})} </button> </div> <div class="flex-1 basis-0 flex items-center justify-end gap-6 xl:gap-12 max-md:hidden nav-link-animated"> <a class="text-website-orange"${addAttribute(ROUTE.SHOP.path, "href")}> ${ROUTE.SHOP.title} </a> ${NAV_ROUTES.map((route) => renderTemplate`<a class=""${addAttribute(route.path, "href")}> ${route.title} </a>`)} </div> </div> </nav> </header> ${renderComponent($$result, "MobileMenu", $$MobileMenu, {})} ${renderScript($$result, "/Users/mpacheco/Documents/projects/PROJECT-web-kan/web-kan/src/components/globals/header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/mpacheco/Documents/projects/PROJECT-web-kan/web-kan/src/components/globals/header.astro", void 0);

const $$TailwindIndicator = createComponent(($$result, $$props, $$slots) => {
  const view = "production";
  return renderTemplate`${view === "development"}`;
}, "/Users/mpacheco/Documents/projects/PROJECT-web-kan/web-kan/src/components/tailwind-indicator.astro", void 0);

const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { metadata } = Astro2.props;
  const gtmId = BUSINESS_CONFIG.googleTagManager?.id;
  return renderTemplate`<html lang="es"${addAttribute(["scroll-smooth"], "class:list")}> <head>${renderComponent($$result, "Meta", $$Meta, {})}${renderComponent($$result, "Seo", $$Seo, { "metadata": metadata })}${renderComponent($$result, "Favicons", $$Favicons, {})}${renderComponent($$result, "Font", $$Font, { "cssVariable": "--font-mozilla" })}${renderComponent($$result, "Font", $$Font, { "cssVariable": "--font-montserrat" })}${renderComponent($$result, "Font", $$Font, { "cssVariable": "--font-inter" })}${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(gtmId ? `<script is:inline>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');<\/script>` : "")}` })}${renderHead()}</head> <body class="relative"> ${gtmId && renderTemplate`<noscript> <iframe${addAttribute(`https://www.googletagmanager.com/ns.html?id=${gtmId}`, "src")} height="0" width="0" style="display:none;visibility:hidden"></iframe> </noscript>`} ${renderComponent($$result, "Header", $$Header, {})} <main>${renderSlot($$result, $$slots["default"])}</main> ${renderComponent($$result, "Footer", $$Footer, {})} ${renderComponent($$result, "TailwindIndicator", $$TailwindIndicator, {})} </body></html>`;
}, "/Users/mpacheco/Documents/projects/PROJECT-web-kan/web-kan/src/layouts/base-layout.astro", void 0);

export { $$BaseLayout as $, ROUTE as R };
