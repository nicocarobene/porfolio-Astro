/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead, e as addAttribute, i as renderTransition } from '../astro_ovZbvY4O.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { $ as $$SectionContainer, a as $$CardSeccion, b as $$Link, c as $$Github } from './extension_7lr3owSD.mjs';
import { $ as $$Layout, g as getI18N } from './404_ldrAVvpO.mjs';
import { $ as $$Link$1 } from './minesweeper_CXacKoQd.mjs';
/* empty css                           */
/* empty css                          */

const $$Astro$3 = createAstro();
const $$Wordle$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Wordle$3;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Wordle | Nicodev | Porfolio", "description": i18n.PAGES.WORDLE.SEO_DESCRIPTION, "data-astro-cid-rpsu6xcr": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="w-full flex px-4 pt-5 gap-2 items-center" data-astro-cid-rpsu6xcr> <span class="bg-gradient-to-r from-rose-500 to-orange-500 rounded-full p-1 flex items-center w-16 justify-center" data-astro-cid-rpsu6xcr> <picture class="place-items-start" data-astro-cid-rpsu6xcr${addAttribute(renderTransition($$result2, "4dtnc33k", "", "wordle"), "data-astro-transition-scope")}> <source srcset="/projects/gamesMobile.avif" type="image/avif" media="(max-width: 767px)" data-astro-cid-rpsu6xcr> <img src="/projects/games.png" alt="video games" class="size-7" data-astro-cid-rpsu6xcr> </picture> </span> <h1 class="text-white text-3xl" data-astro-cid-rpsu6xcr${addAttribute(renderTransition($$result2, "vldpix6v", "", "extencion"), "data-astro-transition-scope")}>Wordle</h1> </header> <main class="max-w-[1200px] mx-auto" data-astro-cid-rpsu6xcr> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "relative place-content-start justify-center mt-5", "data-astro-cid-rpsu6xcr": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardSeccion", $$CardSeccion, { "title": "Wordle", "image": "/projects/wordle.webp", "data-astro-cid-rpsu6xcr": true }, { "background": ($$result4) => renderTemplate`<video autoplay loop muted playsinline id="main-video" preload="metadata" class="video object-cover object-left-top aspect-[52/48] w-full max-h-[500px] place-self-start rounded-xl" src="/media/wordle.mp4" data-astro-cid-rpsu6xcr></video>`, "description": ($$result4) => renderTemplate`<p class="text-balance text-base py-2 pb-4 opacity-85" data-astro-cid-rpsu6xcr> ${i18n.PAGES.WORDLE.PARRAFO}<span class="text-[#fffb52]" data-astro-cid-rpsu6xcr>${i18n.PAGES.WORDLE.SPAN_1}</span> ${i18n.PAGES.WORDLE.PARRAFO_MIDDLE_1} <span class="text-[#fffb52]" data-astro-cid-rpsu6xcr>${i18n.PAGES.WORDLE.SPAN_2}</span> ${i18n.PAGES.WORDLE.PARRAFO_MIDDLE_2} <span class="text-[#fffb52]" data-astro-cid-rpsu6xcr> ${i18n.PAGES.WORDLE.SPAN_3} </span> ${i18n.PAGES.WORDLE.PARRAFO_MIDDLE_3} <span class="text-[#fffb52]" data-astro-cid-rpsu6xcr> ${i18n.PAGES.WORDLE.SPAN_4} </span> ${i18n.PAGES.WORDLE.PARRAFO_MIDDLE_4} <span class="text-[#fffb52]" data-astro-cid-rpsu6xcr> ${i18n.PAGES.WORDLE.SPAN_5} </span> ${i18n.PAGES.WORDLE.PARRAFO_MIDDLE_5} <span class="text-[#fffb52]" data-astro-cid-rpsu6xcr> ${i18n.PAGES.WORDLE.SPAN_6} </span> ${i18n.PAGES.WORDLE.PARRAFO_END} <span class="text-[#fffb52]" data-astro-cid-rpsu6xcr>${i18n.PAGES.WORDLE.SPAN_7} </span> ${i18n.PAGES.WORDLE.PARRAFO_END_2} <span class="text-[#fffb52]" data-astro-cid-rpsu6xcr> ${i18n.PAGES.WORDLE.SPAN_8} </span> ${i18n.PAGES.WORDLE.PARRAFO_END_3} </p>`, "links": ($$result4) => renderTemplate`<div class="flex items-center ml-auto gap-3 bg-black/30 rounded-full p-2 px-4" data-astro-cid-rpsu6xcr> ${renderComponent($$result4, "Link", $$Link, { "href": "https://wordle-one-alpha.vercel.app/", "data-astro-cid-rpsu6xcr": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "LinkIcon", $$Link$1, { "class:list": ["size-7", "text-white"], "data-astro-cid-rpsu6xcr": true })} ` })} <span class="opacity-65" data-astro-cid-rpsu6xcr> | </span> ${renderComponent($$result4, "Link", $$Link, { "href": "https://github.com/nicocarobene/wordle", "data-astro-cid-rpsu6xcr": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Github", $$Github, { "class:list": ["size-7", "text-white"], "data-astro-cid-rpsu6xcr": true })} ` })} </div>` })} ` })} </main> ` })} `;
}, "/home/nicodev/project/porfolio/src/components/pages/wordle.astro", "self");

const $$Astro$2 = createAstro();
const $$Wordle$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Wordle$2;
  return renderTemplate`${renderComponent($$result, "WordlePage", $$Wordle$3, {})}`;
}, "/home/nicodev/project/porfolio/src/pages/en/wordle.astro", void 0);

const $$file$2 = "/home/nicodev/project/porfolio/src/pages/en/wordle.astro";
const $$url$2 = "/en/wordle";

const wordle$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Wordle$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Wordle$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Wordle$1;
  return renderTemplate`${renderComponent($$result, "WordlePage", $$Wordle$3, {})}`;
}, "/home/nicodev/project/porfolio/src/pages/es/wordle.astro", void 0);

const $$file$1 = "/home/nicodev/project/porfolio/src/pages/es/wordle.astro";
const $$url$1 = "/es/wordle";

const wordle$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Wordle$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Wordle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Wordle;
  return renderTemplate`${renderComponent($$result, "WordlePage", $$Wordle$3, {})}`;
}, "/home/nicodev/project/porfolio/src/pages/wordle.astro", void 0);

const $$file = "/home/nicodev/project/porfolio/src/pages/wordle.astro";
const $$url = "/wordle";

const wordle = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Wordle,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { wordle$1 as a, wordle as b, wordle$2 as w };
