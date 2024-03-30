/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead, e as addAttribute, i as renderTransition } from '../astro_ovZbvY4O.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { $ as $$SectionContainer, a as $$CardSeccion, b as $$Link, c as $$Github } from './extension_7lr3owSD.mjs';
import { $ as $$Link$1 } from './minesweeper_CXacKoQd.mjs';
import { $ as $$Layout, g as getI18N } from './404_ldrAVvpO.mjs';
/* empty css                             */
/* empty css                          */

const $$Astro$3 = createAstro();
const $$SimonSay$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SimonSay$3;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Simon Say | Nicodev | Porfolio", "description": i18n.PAGES.SIMON_SAY.SEO_DESCRIPTION, "data-astro-cid-hone6umq": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="w-full flex px-4 pt-5 gap-2" data-astro-cid-hone6umq> <span class="bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full p-1 flex items-center w-16 justify-center" data-astro-cid-hone6umq> <picture slot="icon" data-astro-cid-hone6umq${addAttribute(renderTransition($$result2, "xyv6olns", "", "simonSay"), "data-astro-transition-scope")}> <source srcset="/projects/gamesMobile.avif" type="image/avif" media="(max-width: 767px)" data-astro-cid-hone6umq> <img src="/projects/games.png" alt="video games" class="w-6 h-6" data-astro-cid-hone6umq> </picture> </span> <h1 class="text-white text-3xl" data-astro-cid-hone6umq${addAttribute(renderTransition($$result2, "yveoxftd", "", "extencion"), "data-astro-transition-scope")}>Games</h1> </header> <main class="max-w-[1200px] mx-auto" data-astro-cid-hone6umq> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "relative place-content-start justify-center mt-5", "data-astro-cid-hone6umq": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardSeccion", $$CardSeccion, { "title": "Simon Say", "image": "/projects/simonSay.webp", "data-astro-cid-hone6umq": true }, { "background": ($$result4) => renderTemplate`<video autoplay loop muted playsinline id="main-video" preload="metadata" class="video object-cover object-left-top aspect-[52/48] w-full max-h-[500px] place-self-start rounded-xl" src="/media/simonSay.mp4" data-astro-cid-hone6umq></video>`, "description": ($$result4) => renderTemplate`<p class="text-balance text-base py-2 pb-4 opacity-85" data-astro-cid-hone6umq> ${i18n.PAGES.SIMON_SAY.PARRAFO_BEGIN} <span class="text-[#fffb52]" data-astro-cid-hone6umq> ${i18n.PAGES.SIMON_SAY.SPAN_1}</span> ${i18n.PAGES.SIMON_SAY.PARRAFO_MIDDLE_1} <span class="text-[#fffb52]" data-astro-cid-hone6umq> ${i18n.PAGES.SIMON_SAY.SPAN_2}</span> ${i18n.PAGES.SIMON_SAY.PARRAFO_MIDDLE_2} <span class="text-[#fffb52]" data-astro-cid-hone6umq> ${i18n.PAGES.SIMON_SAY.SPAN_3}</span> ${i18n.PAGES.SIMON_SAY.PARRAFO_MIDDLE_3} <span class="text-[#fffb52]" data-astro-cid-hone6umq> ${i18n.PAGES.SIMON_SAY.SPAN_4}</span> ${i18n.PAGES.SIMON_SAY.PARRAFO_END} </p>`, "links": ($$result4) => renderTemplate`<div class="flex items-center ml-auto gap-3 bg-black/30 rounded-full p-2 px-4" data-astro-cid-hone6umq> ${renderComponent($$result4, "Link", $$Link, { "href": "https://simonsay.vercel.app/", "data-astro-cid-hone6umq": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "LinkIcon", $$Link$1, { "class:list": ["size-7"], "data-astro-cid-hone6umq": true })} ` })} <span class="opacity-65" data-astro-cid-hone6umq> | </span> ${renderComponent($$result4, "Link", $$Link, { "href": "https://github.com/nicocarobene/simonsay", "data-astro-cid-hone6umq": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Github", $$Github, { "class:list": ["size-7", "text-white"], "data-astro-cid-hone6umq": true })} ` })} </div>` })} ` })} </main> ` })} `;
}, "/home/nicodev/project/porfolio/src/components/pages/simonSay.astro", "self");

const $$Astro$2 = createAstro();
const $$SimonSay$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SimonSay$2;
  return renderTemplate`${renderComponent($$result, "SimonSayPage", $$SimonSay$3, {})}`;
}, "/home/nicodev/project/porfolio/src/pages/en/simonSay.astro", void 0);

const $$file$2 = "/home/nicodev/project/porfolio/src/pages/en/simonSay.astro";
const $$url$2 = "/en/simonSay";

const simonSay$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SimonSay$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$SimonSay$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SimonSay$1;
  return renderTemplate`${renderComponent($$result, "SimonSayPage", $$SimonSay$3, {})}`;
}, "/home/nicodev/project/porfolio/src/pages/es/simonSay.astro", void 0);

const $$file$1 = "/home/nicodev/project/porfolio/src/pages/es/simonSay.astro";
const $$url$1 = "/es/simonSay";

const simonSay$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SimonSay$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$SimonSay = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SimonSay;
  return renderTemplate`${renderComponent($$result, "SimonSayPage", $$SimonSay$3, {})}`;
}, "/home/nicodev/project/porfolio/src/pages/simonSay.astro", void 0);

const $$file = "/home/nicodev/project/porfolio/src/pages/simonSay.astro";
const $$url = "/simonSay";

const simonSay = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SimonSay,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { simonSay$1 as a, simonSay as b, simonSay$2 as s };
