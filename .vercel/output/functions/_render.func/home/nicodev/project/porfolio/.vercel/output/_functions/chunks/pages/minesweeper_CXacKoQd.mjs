/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, h as renderComponent, e as addAttribute, i as renderTransition } from '../astro_ovZbvY4O.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { $ as $$SectionContainer, a as $$CardSeccion, b as $$Link$1, c as $$Github } from './extension_7lr3owSD.mjs';
import { $ as $$Layout, g as getI18N } from './404_ldrAVvpO.mjs';
/* empty css                                */
/* empty css                          */

const $$Astro$4 = createAstro();
const $$Link = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Link;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 7a1 1 0 0 1 .117 1.993L9 9H7a3 3 0 0 0-.176 5.995L7 15h2a1 1 0 0 1 .117 1.993L9 17H7a5 5 0 0 1-.217-9.995L7 7h2Zm8 0a5 5 0 0 1 .217 9.995L17 17h-2a1 1 0 0 1-.117-1.993L15 15h2a3 3 0 0 0 .176-5.995L17 9h-2a1 1 0 0 1-.117-1.993L15 7h2ZM7 11h10a1 1 0 0 1 .117 1.993L17 13H7a1 1 0 0 1-.117-1.993L7 11h10H7Z" fill="#ffffff"></path></svg>`;
}, "/home/nicodev/project/porfolio/src/components/icons/Link.astro", void 0);

const $$Astro$3 = createAstro();
const $$Minesweeper$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Minesweeper$3;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Minesweeper | Nicodev | Porfolio", "description": i18n.PAGES.MINESWEEPER.SEO_DESCRIPTION, "data-astro-cid-d2mrbem6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="w-full flex px-4 pt-5 gap-2" data-astro-cid-d2mrbem6> <span class="bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full p-1 flex items-center w-16 justify-center" data-astro-cid-d2mrbem6> <picture slot="icon" data-astro-cid-d2mrbem6${addAttribute(renderTransition($$result2, "b7v5xctw", "", "minesweeper"), "data-astro-transition-scope")}> <source srcset="/projects/gamesMobile.avif" type="image/avif" media="(max-width: 767px)" data-astro-cid-d2mrbem6> <img src="/projects/games.png" alt="video games" class="w-6 h-6" data-astro-cid-d2mrbem6> </picture> </span> <h1 class="text-white text-3xl" data-astro-cid-d2mrbem6>Minesweeper</h1> </header> <main class="max-w-[1200px] mx-auto" data-astro-cid-d2mrbem6> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "relative place-content-start justify-center mt-5", "data-astro-cid-d2mrbem6": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardSeccion", $$CardSeccion, { "title": "Quick Selector", "image": "/projects/minesicon.png", "data-astro-cid-d2mrbem6": true }, { "background": ($$result4) => renderTemplate`<video autoplay loop muted playsinline id="main-video" preload="metadata" class="video object-cover object-center aspect-[52/48] w-full max-h-[500px] place-self-start rounded-xl" src="/media/mines.mp4" data-astro-cid-d2mrbem6></video>`, "description": ($$result4) => renderTemplate`<p class="text-balance text-base py-2 pb-4 opacity-85" data-astro-cid-d2mrbem6> ${i18n.PAGES.MINESWEEPER.PARRAFO_BEGIN} <span class="text-[#fffb52]" data-astro-cid-d2mrbem6> ${i18n.PAGES.MINESWEEPER.SPAN_1} </span> ${i18n.PAGES.MINESWEEPER.PARRAFO_MIDDLE_1} <span class="text-[#fffb52]" data-astro-cid-d2mrbem6> ${i18n.PAGES.MINESWEEPER.SPAN_2} </span> ${i18n.PAGES.MINESWEEPER.PARRAFO_MIDDLE_2} <span class="text-[#fffb52]" data-astro-cid-d2mrbem6> ${i18n.PAGES.MINESWEEPER.SPAN_3} </span> ${i18n.PAGES.MINESWEEPER.PARRAFO_MIDDLE_3} <span class="text-[#fffb52]" data-astro-cid-d2mrbem6> ${i18n.PAGES.MINESWEEPER.SPAN_4} </span> ${i18n.PAGES.MINESWEEPER.PARRAFO_END} <span class="text-[#fffb52]" data-astro-cid-d2mrbem6> ${i18n.PAGES.MINESWEEPER.SPAN_5} </span> </p>`, "links": ($$result4) => renderTemplate`<div class="flex items-center ml-auto gap-3 bg-black/30 rounded-full p-2 px-4" data-astro-cid-d2mrbem6> ${renderComponent($$result4, "Link", $$Link$1, { "href": "https://mines-weeper-delta.vercel.app/", "data-astro-cid-d2mrbem6": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "LinkIcon", $$Link, { "class:list": ["size-7"], "data-astro-cid-d2mrbem6": true })} ` })} <span class="opacity-65" data-astro-cid-d2mrbem6> | </span> ${renderComponent($$result4, "Link", $$Link$1, { "href": "https://github.com/nicocarobene/minesWeeper", "data-astro-cid-d2mrbem6": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Github", $$Github, { "class:list": ["size-7", "text-white"], "data-astro-cid-d2mrbem6": true })} ` })} </div>` })} ` })} </main> ` })} `;
}, "/home/nicodev/project/porfolio/src/components/pages/minesweeper.astro", "self");

const $$Astro$2 = createAstro();
const $$Minesweeper$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Minesweeper$2;
  return renderTemplate`${renderComponent($$result, "MinesweeperPage", $$Minesweeper$3, {})}`;
}, "/home/nicodev/project/porfolio/src/pages/en/minesweeper.astro", void 0);

const $$file$2 = "/home/nicodev/project/porfolio/src/pages/en/minesweeper.astro";
const $$url$2 = "/en/minesweeper";

const minesweeper$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Minesweeper$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Minesweeper$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Minesweeper$1;
  return renderTemplate`${renderComponent($$result, "MinesweeperPage", $$Minesweeper$3, {})}`;
}, "/home/nicodev/project/porfolio/src/pages/es/minesweeper.astro", void 0);

const $$file$1 = "/home/nicodev/project/porfolio/src/pages/es/minesweeper.astro";
const $$url$1 = "/es/minesweeper";

const minesweeper$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Minesweeper$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Minesweeper = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Minesweeper;
  return renderTemplate`${renderComponent($$result, "MinesweeperPage", $$Minesweeper$3, {})}`;
}, "/home/nicodev/project/porfolio/src/pages/minesweeper.astro", void 0);

const $$file = "/home/nicodev/project/porfolio/src/pages/minesweeper.astro";
const $$url = "/minesweeper";

const minesweeper = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Minesweeper,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Link as $, minesweeper$1 as a, minesweeper as b, minesweeper$2 as m };
