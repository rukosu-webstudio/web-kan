!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{};e.SENTRY_RELEASE={id:"1dc07b35b0583b43bc2361e999b8228f15f82ed0"};var n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="2f5eeace-af13-4b43-b8f2-3a56eb74bfa3",e._sentryDebugIdIdentifier="sentry-dbid-2f5eeace-af13-4b43-b8f2-3a56eb74bfa3");}catch(e){}}();import { $ as $$BaseLayout } from './base-layout_744HASVC.mjs';
import { c as createComponent } from './_astro_assets_B4WxaL8q.mjs';
import 'piccolore';
import { T as maybeRenderHead, a4 as addAttribute, Q as renderTemplate } from './params-and-props_CQL3fTpr.mjs';
import { r as renderComponent } from './entrypoint_CQSE2Wtj.mjs';
import 'clsx';

const $$PrimaryButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PrimaryButton;
  const { label, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="w-fit px-20 py-5 bg-white text-xl uppercase"${addAttribute(href, "href")}> ${label} </a>`;
}, "/Users/mpacheco/Documents/projects/PROJECT-web-kan/web-kan/src/components/section-components/primaryButton.astro", void 0);

const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="w-full min-h-screen flex justify-center relative"> <div class="w-full h-full absolute top-0"> <div class="w-full h-full relative"> <img class="w-full h-full object-fill" src="/images/hero.jpeg" alt=""> <div class="w-full h-full absolute top-0 bg-black/40"></div> </div> </div> <div class="w-full max-wrapper z-10 flex flex-col justify-end"> <div class="w-full h-full flex justify-center items-center pt-20"> <img id="hero-snake" class="w-20 object-cover transition-all duration-700 ease-out" src="/images/w-snake.png" alt=""> </div> <div class="w-full flex flex-col gap-8 pb-20"> <h1 class="w-full max-w-[480px] text-white text-[40px] font-mozilla font-extralight text-base/10">
LA CONSTANCIA SUPERA LA MOTIVACIÓN
</h1> ${renderComponent($$result, "PrimaryButton", $$PrimaryButton, { "label": "ver colección" })} </div> </div> </section>`;
}, "/Users/mpacheco/Documents/projects/PROJECT-web-kan/web-kan/src/components/sections/hero-section.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "metadata": {
    title: "Home",
    description: "Explore our brand",
    ignoreTitleTemplate: true
  } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$HeroSection, {})} ${maybeRenderHead()}<section class="w-full h-screen"></section> ` })}`;
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
