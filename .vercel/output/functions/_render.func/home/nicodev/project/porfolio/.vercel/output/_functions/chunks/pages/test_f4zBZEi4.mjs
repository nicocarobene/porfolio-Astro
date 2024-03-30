/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead, i as renderTransition, e as addAttribute } from '../astro_ovZbvY4O.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { $ as $$SectionContainer, a as $$CardSeccion, b as $$Link, c as $$Github } from './extension_7lr3owSD.mjs';
import { $ as $$Layout, g as getI18N } from './404_ldrAVvpO.mjs';
import { $ as $$Develop } from './index_bdop9gNb.mjs';
import { $ as $$Link$1 } from './minesweeper_CXacKoQd.mjs';
/* empty css                         */
/* empty css                          */

const $$Astro$3 = createAstro();
const $$Test$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Test$3;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Test Skills | Nicodev | Porfolio", "description": i18n.PAGES.TEST.SEO_DESCRIPTION, "data-astro-cid-eemil4it": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="w-full flex px-4 pt-5 gap-2" data-astro-cid-eemil4it> <span class="bg-gradient-to-r from-purple-600 to-blue-500 rounded-full p-1 flex items-center w-16 justify-center" data-astro-cid-eemil4it> ${renderComponent($$result2, "Develop", $$Develop, { "class": "w-8 h-8 bg-sky-600 p-1 rounded-full text-white", "slot": "icon", "data-astro-cid-eemil4it": true, "data-astro-transition-scope": renderTransition($$result2, "rsxwt4by", "", "testSkills") })} </span> <h1 class="text-white text-3xl" data-astro-cid-eemil4it${addAttribute(renderTransition($$result2, "s6csgpcw", "", "extencion"), "data-astro-transition-scope")}>
Bazar Online
</h1> </header> <main class="max-w-[1200px] mx-auto" data-astro-cid-eemil4it> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "relative place-content-start justify-center mt-5", "data-astro-cid-eemil4it": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardSeccion", $$CardSeccion, { "title": "Bazar Online", "image": "/projects/bazarIcon.avif", "data-astro-cid-eemil4it": true }, { "background": ($$result4) => renderTemplate`<video autoplay loop muted playsinline id="main-video" preload="metadata" class="video object-cover object-left-top aspect-[52/48] w-full max-h-[500px] place-self-start rounded-xl" src="/media/bazar-online.mp4" data-astro-cid-eemil4it></video>`, "description": ($$result4) => renderTemplate`<p class="text-balance text-base py-2 pb-4 opacity-85" data-astro-cid-eemil4it> ${i18n.PAGES.TEST.PARRAFO_BEGIN} <span class="text-[#fffb52]" data-astro-cid-eemil4it>${i18n.PAGES.TEST.SPAN_1}</span> ${i18n.PAGES.TEST.PARRAFO_MIDDLE_1} <span class="text-[#fffb52]" data-astro-cid-eemil4it>${i18n.PAGES.TEST.SPAN_2}</span> ${i18n.PAGES.TEST.PARRAFO_MIDDLE_2} <span class="text-[#fffb52]" data-astro-cid-eemil4it> ${i18n.PAGES.TEST.SPAN_3}</span> ${i18n.PAGES.TEST.PARRAFO_MIDDLE_3} <span class="text-[#fffb52]" data-astro-cid-eemil4it> ${i18n.PAGES.TEST.SPAN_4}</span> ${i18n.PAGES.TEST.PARRAFO_MIDDLE_4} <span class="text-[#fffb52]" data-astro-cid-eemil4it> ${i18n.PAGES.TEST.SPAN_5} </span> ${i18n.PAGES.TEST.PARRAFO_MIDDLE_5} <span class="text-[#fffb52]" data-astro-cid-eemil4it> ${i18n.PAGES.TEST.SPAN_6}</span> ${i18n.PAGES.TEST.PARRAFO_MIDDLE_6} <span class="text-[#fffb52]" data-astro-cid-eemil4it> ${i18n.PAGES.TEST.SPAN_7} </span> ${i18n.PAGES.TEST.PARRAFO_MIDDLE_7} <span class="text-[#fffb52]" data-astro-cid-eemil4it> ${i18n.PAGES.TEST.SPAN_8} </span> ${i18n.PAGES.TEST.PARRAFO_MIDDLE_8} <span class="text-[#fffb52]" data-astro-cid-eemil4it> ${i18n.PAGES.TEST.SPAN_9} </span> ${i18n.PAGES.TEST.PARRAFO_END} </p>`, "links": ($$result4) => renderTemplate`<div class="flex items-center ml-auto gap-3 bg-black/30 rounded-full p-2 px-4" data-astro-cid-eemil4it> ${renderComponent($$result4, "Link", $$Link, { "href": "https://bazar-online-ten.vercel.app/", "data-astro-cid-eemil4it": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "LinkIcon", $$Link$1, { "class:list": ["size-7"], "data-astro-cid-eemil4it": true })} ` })} <span class="opacity-65" data-astro-cid-eemil4it> | </span> ${renderComponent($$result4, "Link", $$Link, { "href": "https://github.com/nicocarobene/bazarOnline", "data-astro-cid-eemil4it": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Github", $$Github, { "class:list": ["size-7", "text-white"], "data-astro-cid-eemil4it": true })} ` })} </div>` })} ` })} </main> ` })} `;
}, "/home/nicodev/project/porfolio/src/components/pages/test.astro", "self");

const $$Astro$2 = createAstro();
const $$Test$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Test$2;
  return renderTemplate`${renderComponent($$result, "TestPage", $$Test$3, {})}`;
}, "/home/nicodev/project/porfolio/src/pages/en/test.astro", void 0);

const $$file$2 = "/home/nicodev/project/porfolio/src/pages/en/test.astro";
const $$url$2 = "/en/test";

const test$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Test$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Test$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Test$1;
  return renderTemplate`${renderComponent($$result, "TestPage", $$Test$3, {})}`;
}, "/home/nicodev/project/porfolio/src/pages/es/test.astro", void 0);

const $$file$1 = "/home/nicodev/project/porfolio/src/pages/es/test.astro";
const $$url$1 = "/es/test";

const test$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Test$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Test = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Test;
  return renderTemplate`${renderComponent($$result, "TestPage", $$Test$3, {})}`;
}, "/home/nicodev/project/porfolio/src/pages/test.astro", void 0);

const $$file = "/home/nicodev/project/porfolio/src/pages/test.astro";
const $$url = "/test";

const test = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Test,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { test$1 as a, test as b, test$2 as t };
