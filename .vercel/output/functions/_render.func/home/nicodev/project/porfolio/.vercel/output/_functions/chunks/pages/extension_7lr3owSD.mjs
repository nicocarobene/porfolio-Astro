/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, e as addAttribute, f as renderSlot, h as renderComponent, i as renderTransition } from '../astro_ovZbvY4O.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { $ as $$Layout, g as getI18N } from './404_ldrAVvpO.mjs';
/* empty css                              */
/* empty css                          */

const $$Astro$8 = createAstro();
const $$Github = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Github;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 250" width="256" height="250" fill="currentColor" preserveAspectRatio="xMidYMid"><path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" fill="currentColor"></path></svg>`;
}, "/home/nicodev/project/porfolio/src/components/icons/Github.astro", void 0);

const $$Astro$7 = createAstro();
const $$Link = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Link;
  const { href, class: classList } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(`${classList} inline-block any-hover:scale-125 any-hover:opacity-70 motion-safe:transition motion-reduce:any-hover:scale-100`, "class")}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/home/nicodev/project/porfolio/src/components/Link.astro", void 0);

const $$Astro$6 = createAstro();
const $$SectionContainer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$SectionContainer;
  const { class: className, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(id, "data-section")}${addAttribute(`section ${className} grid place-content-center items-center w-full h-dvh mx-auto container lg:max-w-4xl md:max-w-2xl`, "class")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/home/nicodev/project/porfolio/src/components/SectionContainer.astro", void 0);

const $$Astro$5 = createAstro();
const $$VsCode = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$VsCode;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 254" width="256" height="254" preserveAspectRatio="xMidYMid"><defs><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF"></stop><stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop></linearGradient><path id="a" d="M180.828 252.605a15.872 15.872 0 0 0 12.65-.486l52.501-25.262a15.94 15.94 0 0 0 9.025-14.364V41.197a15.939 15.939 0 0 0-9.025-14.363l-52.5-25.263a15.877 15.877 0 0 0-18.115 3.084L74.857 96.35l-43.78-33.232a10.614 10.614 0 0 0-13.56.603L3.476 76.494c-4.63 4.211-4.635 11.495-.012 15.713l37.967 34.638-37.967 34.637c-4.623 4.219-4.618 11.502.012 15.714l14.041 12.772a10.614 10.614 0 0 0 13.56.604l43.78-33.233 100.507 91.695a15.853 15.853 0 0 0 5.464 3.571Zm10.464-183.649-76.262 57.889 76.262 57.888V68.956Z"></path></defs><mask id="b" fill="#fff"><use xlink:href="#a"></use></mask><path fill="#0065A9" d="M246.135 26.873 193.593 1.575a15.885 15.885 0 0 0-18.123 3.08L3.466 161.482c-4.626 4.219-4.62 11.502.012 15.714l14.05 12.772a10.625 10.625 0 0 0 13.569.604L238.229 33.436c6.949-5.271 16.93-.315 16.93 8.407v-.61a15.938 15.938 0 0 0-9.024-14.36Z" mask="url(#b)"></path><path fill="#007ACC" d="m246.135 226.816-52.542 25.298a15.887 15.887 0 0 1-18.123-3.08L3.466 92.207c-4.626-4.218-4.62-11.502.012-15.713l14.05-12.773a10.625 10.625 0 0 1 13.569-.603l207.132 157.135c6.949 5.271 16.93.315 16.93-8.408v.611a15.939 15.939 0 0 1-9.024 14.36Z" mask="url(#b)"></path><path fill="#1F9CF0" d="M193.428 252.134a15.892 15.892 0 0 1-18.125-3.083c5.881 5.88 15.938 1.715 15.938-6.603V11.273c0-8.318-10.057-12.483-15.938-6.602a15.892 15.892 0 0 1 18.125-3.084l52.533 25.263a15.937 15.937 0 0 1 9.03 14.363V212.51c0 6.125-3.51 11.709-9.03 14.363l-52.533 25.262Z" mask="url(#b)"></path> </svg>`;
}, "/home/nicodev/project/porfolio/src/components/icons/VsCode.astro", void 0);

const $$Astro$4 = createAstro();
const $$CardSeccion = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$CardSeccion;
  const { title, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article id="projects" class="flex flex-col animate-fade-up backdrop-blur-sm p-1 bg-gray-600 items-start min-w-full rounded-xl"> <div class="overflow-hidden w-full"> ${renderSlot($$result, $$slots["background"])} </div> <div class="w-full px-2"> <div class="flex items-center w-full gap-7 justify-start"> <h2 class="text-5xl font-semibold font-cascadia my-3 animate-fade text-[#b9fd4b]"> ${title} </h2> <img id="avatar"${addAttribute(image, "src")} class="size-12 object-cover object-size aspect-square object-center animate-fade rounded-full" alt="avatar extension quick selector"> ${renderSlot($$result, $$slots["links"])} </div> ${renderSlot($$result, $$slots["description"])} </div> </article>`;
}, "/home/nicodev/project/porfolio/src/components/CardSeccion.astro", void 0);

const $$Astro$3 = createAstro();
const $$Extension$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Extension$3;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Extension | Nicodev | Porfolio", "description": i18n.PAGES.EXTENSION.SEO_DESCRIPTION, "data-astro-cid-osk3rdb4": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="w-full flex px-4 pt-5 gap-2" data-astro-cid-osk3rdb4> <span class="bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full p-1 flex items-center w-16 justify-center" data-astro-cid-osk3rdb4> ${renderComponent($$result2, "VsCode", $$VsCode, { "class": "w-6 h-6", "data-astro-cid-osk3rdb4": true, "data-astro-transition-scope": renderTransition($$result2, "ndjlcskh", "", "vscode") })} </span> <h1 class="text-white text-3xl" data-astro-cid-osk3rdb4${addAttribute(renderTransition($$result2, "wqls46oi", "", "extencion"), "data-astro-transition-scope")}> ${i18n.PAGES.EXTENSION.TITLE} </h1> </header> <main class="max-w-[1200px] mx-auto" data-astro-cid-osk3rdb4> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "relative place-content-start justify-center mt-5", "data-astro-cid-osk3rdb4": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardSeccion", $$CardSeccion, { "title": "Quick Selector", "image": "/quickSelector.webp", "data-astro-cid-osk3rdb4": true }, { "background": ($$result4) => renderTemplate`<video autoplay loop muted playsinline id="main-video" preload="metadata" class="video object-cover object-left-top aspect-[52/48] w-full max-h-[500px] place-self-start rounded-xl" src="/media/quickSelector.mp4" data-astro-cid-osk3rdb4></video>`, "description": ($$result4) => renderTemplate`<p class="text-balance text-base py-2 pb-4 opacity-85" data-astro-cid-osk3rdb4> ${i18n.PAGES.EXTENSION.PARRAFO_BEGIN}<span class="text-[#fffb52]" data-astro-cid-osk3rdb4>${i18n.PAGES.EXTENSION.SPAN_1}</span> ${i18n.PAGES.EXTENSION.PARRAFO_MIDDLE} <span class="text-[#fffb52]" data-astro-cid-osk3rdb4>${i18n.PAGES.EXTENSION.SPAN_2}</span> ${i18n.PAGES.EXTENSION.PARRAFO_END} <span class="text-[#fffb52]" data-astro-cid-osk3rdb4> ${i18n.PAGES.EXTENSION.SPAN_3}</span> ${i18n.PAGES.EXTENSION.PARRAFO_END_2} </p>`, "links": ($$result4) => renderTemplate`<div class="flex items-center ml-auto gap-3 bg-black/30 rounded-full p-2 px-4" data-astro-cid-osk3rdb4> ${renderComponent($$result4, "Link", $$Link, { "href": "https://marketplace.visualstudio.com/items?itemName=NicolasCarobene.quickselector", "data-astro-cid-osk3rdb4": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "VsCode", $$VsCode, { "class:list": ["size-7"], "data-astro-cid-osk3rdb4": true })} ` })} <span class="opacity-65" data-astro-cid-osk3rdb4> | </span> ${renderComponent($$result4, "Link", $$Link, { "href": "https://github.com/nicocarobene/quick-selector", "data-astro-cid-osk3rdb4": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Github", $$Github, { "class:list": ["size-7", "text-white"], "data-astro-cid-osk3rdb4": true })} ` })} </div>` })} ` })} </main> ` })} `;
}, "/home/nicodev/project/porfolio/src/components/pages/extension.astro", "self");

const $$Astro$2 = createAstro();
const $$Extension$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Extension$2;
  return renderTemplate`${renderComponent($$result, "ExtendPage", $$Extension$3, {})}`;
}, "/home/nicodev/project/porfolio/src/pages/en/extension.astro", void 0);

const $$file$2 = "/home/nicodev/project/porfolio/src/pages/en/extension.astro";
const $$url$2 = "/en/extension";

const extension$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Extension$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Extension$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Extension$1;
  return renderTemplate`${renderComponent($$result, "ExtendPage", $$Extension$3, {})}`;
}, "/home/nicodev/project/porfolio/src/pages/es/extension.astro", void 0);

const $$file$1 = "/home/nicodev/project/porfolio/src/pages/es/extension.astro";
const $$url$1 = "/es/extension";

const extension$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Extension$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Extension = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Extension;
  return renderTemplate`${renderComponent($$result, "ExtendPage", $$Extension$3, {})}`;
}, "/home/nicodev/project/porfolio/src/pages/extension.astro", void 0);

const $$file = "/home/nicodev/project/porfolio/src/pages/extension.astro";
const $$url = "/extension";

const extension = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Extension,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$SectionContainer as $, $$CardSeccion as a, $$Link as b, $$Github as c, $$VsCode as d, extension$2 as e, extension$1 as f, extension as g };
