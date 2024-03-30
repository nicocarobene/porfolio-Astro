/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead, i as renderTransition, e as addAttribute } from '../astro_ovZbvY4O.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { $ as $$SectionContainer, a as $$CardSeccion, b as $$Link, c as $$Github } from './extension_7lr3owSD.mjs';
import { $ as $$Link$1 } from './minesweeper_CXacKoQd.mjs';
import { $ as $$Layout, g as getI18N } from './404_ldrAVvpO.mjs';
import { $ as $$Develop } from './index_bdop9gNb.mjs';
/* empty css                                 */
/* empty css                          */

const $$Astro$3 = createAstro();
const $$ShoppingCard$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ShoppingCard$3;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Shopping Card | Nicodev | Porfolio", "description": i18n.PAGES.SHOPPING_CARD.SEO_DESCRIPTION, "data-astro-cid-u3y7rynu": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="w-full flex px-4 pt-5 gap-2" data-astro-cid-u3y7rynu> <span class="bg-gradient-to-r from-blue-600 to-gray-500 rounded-full p-1 flex items-center w-16 justify-center" data-astro-cid-u3y7rynu> ${renderComponent($$result2, "Develop", $$Develop, { "class": "w-6 h-6 text-white", "data-astro-cid-u3y7rynu": true, "data-astro-transition-scope": renderTransition($$result2, "23djw4l3", "", "develop") })} </span> <h1 class="text-white text-3xl" data-astro-cid-u3y7rynu${addAttribute(renderTransition($$result2, "5qta4yxy", "", "extencion"), "data-astro-transition-scope")}>Extension</h1> </header> <main class="max-w-[1200px] mx-auto" data-astro-cid-u3y7rynu> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "relative place-content-start justify-center mt-5", "data-astro-cid-u3y7rynu": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardSeccion", $$CardSeccion, { "title": "Shopping Cart", "image": "/projects/shoppingcart.webp", "data-astro-cid-u3y7rynu": true }, { "background": ($$result4) => renderTemplate`<video autoplay loop muted playsinline id="main-video" preload="metadata" class="video object-cover object-left-top aspect-[52/48] w-full max-h-[500px] place-self-start rounded-xl" src="/media/shoppingCart.mp4" data-astro-cid-u3y7rynu></video>`, "description": ($$result4) => renderTemplate`<p class="text-balance text-base py-2 pb-4 opacity-85" data-astro-cid-u3y7rynu> ${i18n.PAGES.SHOPPING_CARD.PARRAFO_BEGIN} <span class="text-[#fffb52]" data-astro-cid-u3y7rynu> ${i18n.PAGES.SHOPPING_CARD.SPAN_1} </span> ${i18n.PAGES.SHOPPING_CARD.PARRAFO_MIDDLE_1} <span class="text-[#fffb52]" data-astro-cid-u3y7rynu> ${i18n.PAGES.SHOPPING_CARD.SPAN_2} </span> ${i18n.PAGES.SHOPPING_CARD.PARRAFO_MIDDLE_2} <span class="text-[#fffb52]" data-astro-cid-u3y7rynu> ${i18n.PAGES.SHOPPING_CARD.SPAN_3} </span> ${i18n.PAGES.SHOPPING_CARD.PARRAFO_MIDDLE_3} <span class="text-[#fffb52]" data-astro-cid-u3y7rynu> ${i18n.PAGES.SHOPPING_CARD.SPAN_4} </span> ${i18n.PAGES.SHOPPING_CARD.PARRAFO_END} </p>`, "links": ($$result4) => renderTemplate`<div class="flex items-center ml-auto gap-3 bg-black/30 rounded-full p-2 px-4" data-astro-cid-u3y7rynu> ${renderComponent($$result4, "Link", $$Link, { "href": "https://e-comers-theta.vercel.app/", "data-astro-cid-u3y7rynu": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "LinkIcon", $$Link$1, { "class:list": ["size-7"], "data-astro-cid-u3y7rynu": true })} ` })} <span class="opacity-65" data-astro-cid-u3y7rynu> | </span> ${renderComponent($$result4, "Link", $$Link, { "href": "https://github.com/nicocarobene/e-comers", "data-astro-cid-u3y7rynu": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Github", $$Github, { "class:list": ["size-7", "text-white"], "data-astro-cid-u3y7rynu": true })} ` })} </div>` })} ` })} </main> ` })} `;
}, "/home/nicodev/project/porfolio/src/components/pages/shoppingCard.astro", "self");

const $$Astro$2 = createAstro();
const $$ShoppingCard$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ShoppingCard$2;
  return renderTemplate`${renderComponent($$result, "ShoppingCardPage", $$ShoppingCard$3, {})}`;
}, "/home/nicodev/project/porfolio/src/pages/en/shoppingCard.astro", void 0);

const $$file$2 = "/home/nicodev/project/porfolio/src/pages/en/shoppingCard.astro";
const $$url$2 = "/en/shoppingCard";

const shoppingCard$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ShoppingCard$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$ShoppingCard$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ShoppingCard$1;
  return renderTemplate`${renderComponent($$result, "ShoppingCardPage", $$ShoppingCard$3, {})}`;
}, "/home/nicodev/project/porfolio/src/pages/es/shoppingCard.astro", void 0);

const $$file$1 = "/home/nicodev/project/porfolio/src/pages/es/shoppingCard.astro";
const $$url$1 = "/es/shoppingCard";

const shoppingCard$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ShoppingCard$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$ShoppingCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ShoppingCard;
  return renderTemplate`${renderComponent($$result, "ShoppingCardPage", $$ShoppingCard$3, {})}`;
}, "/home/nicodev/project/porfolio/src/pages/shoppingCard.astro", void 0);

const $$file = "/home/nicodev/project/porfolio/src/pages/shoppingCard.astro";
const $$url = "/shoppingCard";

const shoppingCard = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ShoppingCard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { shoppingCard$1 as a, shoppingCard as b, shoppingCard$2 as s };
