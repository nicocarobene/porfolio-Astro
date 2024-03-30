/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead, e as addAttribute, i as renderTransition } from '../astro_ovZbvY4O.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { $ as $$SectionContainer, a as $$CardSeccion, b as $$Link, c as $$Github } from './extension_7lr3owSD.mjs';
import { $ as $$Layout, g as getI18N } from './404_ldrAVvpO.mjs';
/* empty css                               */
/* empty css                          */

const $$Astro$3 = createAstro();
const $$FeriaLibro$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$FeriaLibro$3;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "La Feria del Libro | Nicodev | Porfolio", "description": i18n.PAGES.LAFERIADELLIBRO.SEO_DESCRIPTION, "data-astro-cid-lf7dmmzk": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="w-full flex px-4 pt-5 gap-2" data-astro-cid-lf7dmmzk> <span class="bg-gradient-to-r from-blue-500 to-green-700 rounded-full p-1 flex items-center w-16 justify-center" data-astro-cid-lf7dmmzk> <span class="text-xl" data-astro-cid-lf7dmmzk${addAttribute(renderTransition($$result2, "uxj3w32b", "", "feriaLibro"), "data-astro-transition-scope")}>📚</span> </span> <h1 class="text-white text-3xl" data-astro-cid-lf7dmmzk${addAttribute(renderTransition($$result2, "2fuhtm43", "", "extencion"), "data-astro-transition-scope")}>
La Feria del Libro
</h1> </header> <main class="max-w-[1200px] mx-auto" data-astro-cid-lf7dmmzk> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "relative place-content-start justify-center mt-5", "data-astro-cid-lf7dmmzk": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardSeccion", $$CardSeccion, { "title": "Feria del Libro", "image": "/projects/laferiadellibro.webp", "data-astro-cid-lf7dmmzk": true }, { "background": ($$result4) => renderTemplate`<video autoplay loop muted playsinline id="main-video" preload="metadata" class="video object-cover object-left-top aspect-[52/48] w-full max-h-[500px] place-self-start rounded-xl" src="/media/feriaLibro.mp4" data-astro-cid-lf7dmmzk></video>`, "description": ($$result4) => renderTemplate`<p class="text-balance text-base py-2 pb-4 opacity-85" data-astro-cid-lf7dmmzk> ${i18n.PAGES.LAFERIADELLIBRO.PARRAFO_BEGIN} <span class="text-[#fffb52]" data-astro-cid-lf7dmmzk> ${i18n.PAGES.LAFERIADELLIBRO.SPAN_1} </span> ${i18n.PAGES.LAFERIADELLIBRO.PARRAFO_MIDDLE_1} <span class="text-[#fffb52]" data-astro-cid-lf7dmmzk> ${i18n.PAGES.LAFERIADELLIBRO.SPAN_2} </span> ${i18n.PAGES.LAFERIADELLIBRO.PARRAFO_MIDDLE_2} <span class="text-[#fffb52]" data-astro-cid-lf7dmmzk> ${i18n.PAGES.LAFERIADELLIBRO.SPAN_3} </span> ${i18n.PAGES.LAFERIADELLIBRO.PARRAFO_END} </p>`, "links": ($$result4) => renderTemplate`<div class="flex items-center ml-auto gap-3 bg-black/30 rounded-full p-2 px-4" data-astro-cid-lf7dmmzk> ${renderComponent($$result4, "Link", $$Link, { "href": "https://github.com/nicocarobene/LaFeriaDelLibro", "data-astro-cid-lf7dmmzk": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Github", $$Github, { "class:list": ["size-7", "text-white"], "data-astro-cid-lf7dmmzk": true })} ` })} </div>` })} ` })} </main> ` })} `;
}, "/home/nicodev/project/porfolio/src/components/pages/feriaLibro.astro", "self");

const $$Astro$2 = createAstro();
const $$FeriaLibro$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FeriaLibro$2;
  return renderTemplate`${renderComponent($$result, "FeriaLibroComponent", $$FeriaLibro$3, {})}`;
}, "/home/nicodev/project/porfolio/src/pages/en/feriaLibro.astro", void 0);

const $$file$2 = "/home/nicodev/project/porfolio/src/pages/en/feriaLibro.astro";
const $$url$2 = "/en/feriaLibro";

const feriaLibro$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$FeriaLibro$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$FeriaLibro$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FeriaLibro$1;
  return renderTemplate`${renderComponent($$result, "FeriaLibroComponent", $$FeriaLibro$3, {})}`;
}, "/home/nicodev/project/porfolio/src/pages/es/feriaLibro.astro", void 0);

const $$file$1 = "/home/nicodev/project/porfolio/src/pages/es/feriaLibro.astro";
const $$url$1 = "/es/feriaLibro";

const feriaLibro$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$FeriaLibro$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$FeriaLibro = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FeriaLibro;
  return renderTemplate`${renderComponent($$result, "FeriaLibroComponent", $$FeriaLibro$3, {})}`;
}, "/home/nicodev/project/porfolio/src/pages/feriaLibro.astro", void 0);

const $$file = "/home/nicodev/project/porfolio/src/pages/feriaLibro.astro";
const $$url = "/feriaLibro";

const feriaLibro = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$FeriaLibro,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { feriaLibro$1 as a, feriaLibro as b, feriaLibro$2 as f };
