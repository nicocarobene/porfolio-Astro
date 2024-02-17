/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, g as renderHead, f as renderSlot, m as maybeRenderHead, s as spreadAttributes, h as renderComponent } from '../astro_doCDC3Zz.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
/* empty css                          */
import { g as getRouteFromUrl, a as getLangFromUrl, L as LANGUAGES, u as useTranslatedPath, b as useTranslations, c as getI18N } from './404_ySsUxqJH.mjs';

const $$Astro$n = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="robots" content="nofollow, noindex"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${title}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Onest:wght@100;300;500;700&display=swap" rel="stylesheet">${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/nicodev/project/porfolio/src/layouts/Layout.astro", void 0);

const $$Astro$m = createAstro();
const $$Sun = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Sun;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path> <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path> </svg>`;
}, "/home/nicodev/project/porfolio/src/components/icons/Sun.astro", void 0);

const $$Astro$l = createAstro();
const $$Moon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$Moon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path> </svg>`;
}, "/home/nicodev/project/porfolio/src/components/icons/Moon.astro", void 0);

const $$Astro$k = createAstro();
const $$System = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$System;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z"></path> <path d="M7 20h10"></path> <path d="M9 16v4"></path> <path d="M15 16v4"></path> </svg>`;
}, "/home/nicodev/project/porfolio/src/components/icons/System.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$j = createAstro();
const $$ThemeToggle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$ThemeToggle;
  const THEMES = ["Light", "Dark", "System"];
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div class="relative ml-1 mr-1" data-astro-cid-x3pjskd3> <button id="theme-toggle-btn" class="appearance-none border-none flex hover:scale-125 transition" data-astro-cid-x3pjskd3> <span class="sr-only" data-astro-cid-x3pjskd3>Elige el tema</span> ', " ", " ", ' </button> <div id="themes-menu" class="absolute opacity-0 scale-80 top-8 right-0 text-sm p-1 min-w-[8rem] rounded-md border border-gray-100 bg-white/70 dark:bg-gray-900/70 dark:border-gray-500/20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-md" data-astro-cid-x3pjskd3> <ul data-astro-cid-x3pjskd3> ', ' </ul> </div> </div>  <script>\n  let remove = null;\n  const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");\n  const themesMenu = document.getElementById("themes-menu");\n\n  const getThemePreference = () => {\n    if (typeof localStorage !== "undefined") {\n      return localStorage.getItem("theme") ?? "system";\n    }\n    return window.matchMedia("(prefers-color-scheme: dark)").matches\n      ? "dark"\n      : "light";\n  };\n\n  const updateIcon = (themePreference) => {\n    document.querySelectorAll(".theme-toggle-icon").forEach((element) => {\n      element.style.scale = element.id === themePreference ? "1" : "0";\n    });\n  };\n\n  const updateTheme = () => {\n    if (remove != null) {\n      remove();\n    }\n    matchMedia.addEventListener("change", updateTheme);\n    remove = () => {\n      matchMedia.removeEventListener("change", updateTheme);\n    };\n\n    const themePreference = getThemePreference();\n    const isDark =\n      themePreference === "dark" ||\n      (themePreference === "system" && matchMedia.matches);\n\n    updateIcon(themePreference);\n    document.documentElement.classList[isDark ? "add" : "remove"]("dark");\n  };\n\n  updateTheme();\n\n  document.addEventListener("click", () => themesMenu.classList.remove("open"));\n\n  document.getElementById("theme-toggle-btn").addEventListener("click", (e) => {\n    e.stopPropagation();\n    const isClosed = !themesMenu.classList.contains("open");\n    themesMenu.classList[isClosed ? "add" : "remove"]("open");\n  });\n\n  document.querySelectorAll(".themes-menu-option").forEach((element) => {\n    element.addEventListener("click", (e) => {\n      localStorage.setItem("theme", e.target.innerText.toLowerCase().trim());\n      updateTheme();\n    });\n  });\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "SunIcon", $$Sun, { "id": "light", "class": "theme-toggle-icon size-5 transition-all", "data-astro-cid-x3pjskd3": true }), renderComponent($$result, "MoonIcon", $$Moon, { "id": "dark", "class": "theme-toggle-icon absolute size-5 transition-all", "data-astro-cid-x3pjskd3": true }), renderComponent($$result, "SystemIcon", $$System, { "id": "system", "class": "theme-toggle-icon absolute size-5 transition-all", "data-astro-cid-x3pjskd3": true }), THEMES.map((theme) => renderTemplate`<li class="themes-menu-option px-2 py-1.5 cursor-default hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm" data-astro-cid-x3pjskd3> ${theme} </li>`));
}, "/home/nicodev/project/porfolio/src/components/ThemeToggle.astro", void 0);

const $$Astro$i = createAstro();
const $$HeaderLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const {
    href,
    class: className,
    checkActive = true,
    ...restOfProps
  } = Astro2.props;
  const currentPath = Astro2.url.pathname;
  const isActive = currentPath === href && checkActive;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([className, isActive ? "border-white" : "border-transparent"], "class:list")}${spreadAttributes(restOfProps)}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/home/nicodev/project/porfolio/src/components/HeaderLink.astro", void 0);

const $$Astro$h = createAstro();
const $$Chevron = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Chevron;
  return renderTemplate`${maybeRenderHead()}<svg class="-mr-1 h-5 w-5 text-white group-hover:rotate-180 transition-all duration-200" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path> </svg>`;
}, "/home/nicodev/project/porfolio/src/components/icons/Chevron.astro", void 0);

const $$Astro$g = createAstro();
const $$LanguageSelector = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$LanguageSelector;
  const route = getRouteFromUrl(Astro2.url);
  const lang = getLangFromUrl(Astro2.url);
  const translatePath = useTranslatedPath(lang);
  const currentLocaleData = LANGUAGES[lang];
  const otherLocales = Object.values(LANGUAGES).filter(
    (locale) => locale.code !== lang
  );
  return renderTemplate`${maybeRenderHead()}<div class="relative inline-block text-left"> <div class="group text-white rounded-md text-xs font-semibold bg-black/30 hover:bg-black/70 transition-all"> <button type="button" class="inline-flex justify-start items-center w-full gap-x-2 px-3 py-2" aria-expanded="true" aria-haspopup="true"> ${renderComponent($$result, "currentLocaleData.flag", currentLocaleData.flag, {})} ${currentLocaleData.name} ${renderComponent($$result, "ChevronIcon", $$Chevron, {})} </button> <ul class="group-hover:block group-hover:animate-fade-down group-hover:animate-duration-200 hidden pt-0.5 absolute w-full"> ${otherLocales.map((locale) => renderTemplate`<li class="py-[2px]"> <a class="rounded-md bg-black/30 hover:bg-black/70 whitespace-no-wrap inline-flex justify-start items-center w-full gap-x-2 px-3 py-2"${addAttribute(translatePath(`/${route ? route : ""}`, locale.code), "href")}> ${renderComponent($$result, "locale.flag", locale.flag, {})} ${locale.name} </a> </li>`)} </ul> </div> </div>`;
}, "/home/nicodev/project/porfolio/src/components/LanguageSelector.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$f = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Header;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate(_a || (_a = __template(["", '<header class="fixed top-2 z-20 flex items-center justify-center w-full mx-auto mt-2" data-astro-cid-3ef6ksr2> <nav id="navDesktop" class="z-30 hidden md:flex px-3 gap-3 text-sm font-medium rounded-full justify-center items-center" data-astro-cid-3ef6ksr2> ', " ", " ", " ", " ", " ", ' </nav> <nav class="md:hidden hidden animate-fade-left mobile backdrop-blur-sm h-[dvh-3.5rem] absolute top-0 right-[calc(100vw-11.5rem)]" data-astro-cid-3ef6ksr2> <ul class="flex flex-col gap-4 px-2 dark:text-gray-200" data-astro-cid-3ef6ksr2> ', " ", " ", " ", " ", ' </ul> </nav> <button id="menuToggle" class="md:hidden" data-astro-cid-3ef6ksr2> <span data-astro-cid-3ef6ksr2></span> <span data-astro-cid-3ef6ksr2></span> <span data-astro-cid-3ef6ksr2></span> </button> </header> <script type="module">\n  const $button = document.querySelector("#menuToggle");\n  const $nav = document.querySelector("nav.mobile");\n  if ($button && $nav) {\n    $button.addEventListener("click", () => {\n      const widthDevice = window.matchMedia("(max-width: 768px)");\n      widthDevice.matches ? $nav.classList.toggle("hidden") : null;\n      $button.classList.toggle("open");\n    });\n    window.addEventListener("click", (e) => {\n      const targetElement = e.target;\n      const open = $button.classList.contains("open");\n      const navHidden = !$nav.classList.contains("hidden");\n      if (!targetElement.closest($button.target) && open && navHidden) {\n        console.log("Clic fuera del elemento");\n      }\n    });\n  }\n<\/script> '])), maybeRenderHead(), renderComponent($$result, "HeaderLink", $$HeaderLink, { "class": "text__glowing", "href": "#", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`${t("nav.expirience")}` }), renderComponent($$result, "HeaderLink", $$HeaderLink, { "class": "text__glowing", "href": "#", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`${t("nav.projects")}` }), renderComponent($$result, "HeaderLink", $$HeaderLink, { "class": "text__glowing", "href": "#", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`${t("nav.aboutMe")}` }), renderComponent($$result, "HeaderLink", $$HeaderLink, { "class": "text__glowing", "href": "#", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`${t("nav.contact")}` }), renderComponent($$result, "LanguageSelector", $$LanguageSelector, { "data-astro-cid-3ef6ksr2": true }), renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "data-astro-cid-3ef6ksr2": true }), renderComponent($$result, "HeaderLink", $$HeaderLink, { "class": "text__glowing hover:font-bold", "href": "#projects", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`${t("nav.projects")}` }), renderComponent($$result, "HeaderLink", $$HeaderLink, { "class": "text__glowing hover:font-bold", "href": "#aboutMe", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`${t("nav.aboutMe")}` }), renderComponent($$result, "HeaderLink", $$HeaderLink, { "class": "text__glowing hover:font-bold", "href": "#", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`${t("nav.contact")}` }), renderComponent($$result, "LanguageSelector", $$LanguageSelector, { "data-astro-cid-3ef6ksr2": true }), renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "data-astro-cid-3ef6ksr2": true }));
}, "/home/nicodev/project/porfolio/src/components/Header.astro", void 0);

const $$Astro$e = createAstro();
const $$AnimationNave = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$AnimationNave;
  return renderTemplate`${maybeRenderHead()}<picture class="absolute w-24 h-auto float object-cover" data-astro-cid-o3y4w3xu> <source srcset="/nave/naveAvif.avif" type="image/avif" data-astro-cid-o3y4w3xu> <source srcset="/nave/naveWebp.webp" type="image/webp" data-astro-cid-o3y4w3xu> <img src="/nave/naveJpg.jpg" alt="NaveIcon" class="h-full w-full object-cover" data-astro-cid-o3y4w3xu> </picture> `;
}, "/home/nicodev/project/porfolio/src/components/AnimationNave.astro", void 0);

const $$Astro$d = createAstro();
const $$Presentation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Presentation;
  return renderTemplate`${maybeRenderHead()}<article class="flex flex-col justify-center items-center z-10" data-astro-cid-babyewbp> <picture class="w-1/3 md:w-1/3 rounded-full" data-astro-cid-babyewbp> <source srcset="/avatarMobile.avif" media="(max-width: 767px)" data-astro-cid-babyewbp> <img src="/avatar.jpg" alt="image avatar nicodev" class="rounded-full" data-astro-cid-babyewbp> </picture> <h1 class="text-4xl md:text-5xl my-5 text-[#b9fd4b]" data-astro-cid-babyewbp>Hi Human 👽</h1> <h2 class="text-2lg md:text-2xl text-[#e3e6fc] text-balance text-center" data-astro-cid-babyewbp>
I'm
<span class="text-gradient font-bold md:text-3xl text-2xl" data-astro-cid-babyewbp>Nico</span> </h2> </article> ${renderComponent($$result, "AnimationNave", $$AnimationNave, { "data-astro-cid-babyewbp": true })} `;
}, "/home/nicodev/project/porfolio/src/components/Presentation.astro", void 0);

const $$Astro$c = createAstro();
const $$TitleSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$TitleSection;
  return renderTemplate`${maybeRenderHead()}<h2${spreadAttributes(Astro2.props)} class="text-3xl text-start p-4 relative top-10 -left-5 flex gap-5 items-center"> ${renderSlot($$result, $$slots["default"])} </h2>`;
}, "/home/nicodev/project/porfolio/src/components/TitleSection.astro", void 0);

const $$Astro$b = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} class="size-8" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path><path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path><path d="M15 19l2 2l4 -4"></path></svg>`;
}, "/home/nicodev/project/porfolio/src/components/icons/About.astro", void 0);

const $$Astro$a = createAstro();
const $$AboutMe = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$AboutMe;
  return renderTemplate`${renderComponent($$result, "TitleSection", $$TitleSection, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<span> ${renderComponent($$result2, "About", $$About, {})} </span>
About Me
` })} <article id="aboutMe" class="grid place-content-center gap-4 min-w-full rounded-xl bg-gray-500/55 p-3"> <p class="text-balance text-lg opacity-85">
I'm a passionate programmer with experience in web development using
    technologies such as
<span class="text-[#b9fd4b]">React</span>,
<span class="text-[#b9fd4b]">Angular</span>,
<span class="text-[#b9fd4b]">TypeScript</span>,
<span class="text-[#b9fd4b]">Node</span>,
<span class="text-[#b9fd4b]">MySQL</span>,
<span class="text-[#b9fd4b]">MongoDB</span>
and another tegnologies.
</p> <p class="text-balance text-lg opacity-85">
I have worked on end-to-end web application development, using agile
    methodologies and software development practices. I love learning new
    technologies and taking on new challenges, which has helped me develop
    skills in problem-solving and effective communication with my team.
</p> <p class="text-balance text-lg opacity-85">
If you're looking for a dedicated programmer with strong technical skills
    and a results-oriented approach, don't hesitate to contact me.
</p> </article>`;
}, "/home/nicodev/project/porfolio/src/components/AboutMe.astro", void 0);

const $$Astro$9 = createAstro();
const $$SectionContainer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$SectionContainer;
  const { class: className, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(id, "data-section")}${addAttribute(`section ${className} grid place-content-center items-center w-full h-dvh mx-auto container lg:max-w-4xl md:max-w-2xl snap-start`, "class")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/home/nicodev/project/porfolio/src/components/SectionContainer.astro", void 0);

const $$Astro$8 = createAstro();
const $$VsCode = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$VsCode;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 254" width="256" height="254" preserveAspectRatio="xMidYMid"><defs><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF"></stop><stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop></linearGradient><path id="a" d="M180.828 252.605a15.872 15.872 0 0 0 12.65-.486l52.501-25.262a15.94 15.94 0 0 0 9.025-14.364V41.197a15.939 15.939 0 0 0-9.025-14.363l-52.5-25.263a15.877 15.877 0 0 0-18.115 3.084L74.857 96.35l-43.78-33.232a10.614 10.614 0 0 0-13.56.603L3.476 76.494c-4.63 4.211-4.635 11.495-.012 15.713l37.967 34.638-37.967 34.637c-4.623 4.219-4.618 11.502.012 15.714l14.041 12.772a10.614 10.614 0 0 0 13.56.604l43.78-33.233 100.507 91.695a15.853 15.853 0 0 0 5.464 3.571Zm10.464-183.649-76.262 57.889 76.262 57.888V68.956Z"></path></defs><mask id="b" fill="#fff"><use xlink:href="#a"></use></mask><path fill="#0065A9" d="M246.135 26.873 193.593 1.575a15.885 15.885 0 0 0-18.123 3.08L3.466 161.482c-4.626 4.219-4.62 11.502.012 15.714l14.05 12.772a10.625 10.625 0 0 0 13.569.604L238.229 33.436c6.949-5.271 16.93-.315 16.93 8.407v-.61a15.938 15.938 0 0 0-9.024-14.36Z" mask="url(#b)"></path><path fill="#007ACC" d="m246.135 226.816-52.542 25.298a15.887 15.887 0 0 1-18.123-3.08L3.466 92.207c-4.626-4.218-4.62-11.502.012-15.713l14.05-12.773a10.625 10.625 0 0 1 13.569-.603l207.132 157.135c6.949 5.271 16.93.315 16.93-8.408v.611a15.939 15.939 0 0 1-9.024 14.36Z" mask="url(#b)"></path><path fill="#1F9CF0" d="M193.428 252.134a15.892 15.892 0 0 1-18.125-3.083c5.881 5.88 15.938 1.715 15.938-6.603V11.273c0-8.318-10.057-12.483-15.938-6.602a15.892 15.892 0 0 1 18.125-3.084l52.533 25.263a15.937 15.937 0 0 1 9.03 14.363V212.51c0 6.125-3.51 11.709-9.03 14.363l-52.533 25.262Z" mask="url(#b)"></path><path fill="url(#c)" fill-opacity=".25" d="M180.828 252.605a15.874 15.874 0 0 0 12.65-.486l52.5-25.263a15.938 15.938 0 0 0 9.026-14.363V41.197a15.939 15.939 0 0 0-9.025-14.363L193.477 1.57a15.877 15.877 0 0 0-18.114 3.084L74.857 96.35l-43.78-33.232a10.614 10.614 0 0 0-13.56.603L3.476 76.494c-4.63 4.211-4.635 11.495-.012 15.713l37.967 34.638-37.967 34.637c-4.623 4.219-4.618 11.502.012 15.714l14.041 12.772a10.614 10.614 0 0 0 13.56.604l43.78-33.233 100.506 91.695a15.857 15.857 0 0 0 5.465 3.571Zm10.464-183.65-76.262 57.89 76.262 57.888V68.956Z" mask="url(#b)"></path> </svg>`;
}, "/home/nicodev/project/porfolio/src/components/icons/VsCode.astro", void 0);

const $$Astro$7 = createAstro();
const $$ArrowRight = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ArrowRight;
  return renderTemplate`${maybeRenderHead()}<svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.704 4.284a1 1 0 1 0-1.403 1.424L17.67 11H4a1 1 0 1 0 0 2h13.665L12.3 18.285a1 1 0 0 0 1.403 1.424l6.925-6.822a1.25 1.25 0 0 0 0-1.78l-6.925-6.823Z" fill="#ffffff"></path></svg>`;
}, "/home/nicodev/project/porfolio/src/components/icons/ArrowRight.astro", void 0);

const $$Astro$6 = createAstro();
const $$CardProject = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$CardProject;
  const { title, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a href="#" class="flex gap-4 m-2 relative" data-astro-cid-3qibyvd4> <div${addAttribute(`flex gap-3 items-center w-full px-4 bg-gradient-to-r rounded-xl ${className}`, "class")} data-astro-cid-3qibyvd4> <h4 class="capitalize w-5/12" data-astro-cid-3qibyvd4>${title}</h4> <div class="z-10" data-astro-cid-3qibyvd4> ${renderSlot($$result, $$slots["icon"])} </div> <div class="absolute right-0 h-full w-2/3 rounded-xl gradient" data-astro-cid-3qibyvd4></div> <div class="absolute right-3 z-10" data-astro-cid-3qibyvd4> ${renderComponent($$result, "ArrowRight", $$ArrowRight, { "data-astro-cid-3qibyvd4": true })} </div> </div> </a> `;
}, "/home/nicodev/project/porfolio/src/components/CardProject.astro", void 0);

const $$Astro$5 = createAstro();
const $$Develop = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Develop;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} class="size-7" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 8l-4 4l4 4"></path><path d="M17 8l4 4l-4 4"></path><path d="M14 4l-4 16"></path></svg>`;
}, "/home/nicodev/project/porfolio/src/components/icons/Develop.astro", void 0);

const $$Astro$4 = createAstro();
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Projects;
  return renderTemplate`${renderComponent($$result, "TitleSection", $$TitleSection, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<span class="bg-gray-500 rounded-full p-1"> ${renderComponent($$result2, "Develop", $$Develop, { "class": "w-6 h-6" })} </span>Projects
` })} <article id="projects" class="grid auto-rows-[140px] grid-cols-1 md:grid-cols-3 backdrop-blur-sm bg-black/40 min-w-full rounded-xl"> ${renderComponent($$result, "CardProject", $$CardProject, { "title": "Extension", "class": "from-violet-500 to-fuchsia-500" }, { "icon": ($$result2) => renderTemplate`${renderComponent($$result2, "VsCode", $$VsCode, { "slot": "icon", "class": "w-6 h-6" })}` })} ${renderComponent($$result, "CardProject", $$CardProject, { "title": "Project", "class": "from-blue-500 to-purple-500" }, { "icon": ($$result2) => renderTemplate`${renderComponent($$result2, "Develop", $$Develop, { "slot": "icon", "class": "w-6 h-6" })}` })} ${renderComponent($$result, "CardProject", $$CardProject, { "title": "Video Games", "class": "from-rose-500 to-orange-500" }, { "icon": ($$result2) => renderTemplate`<picture> <source srcset="/projects/gamesMobile.avif" type="image/avif" media="(max-width: 767px)"> <img src="/projects/games.png" alt="video games" class="w-8 h-8 z-10"> </picture>` })} </article>`;
}, "/home/nicodev/project/porfolio/src/components/Projects.astro", void 0);

const $$Astro$3 = createAstro();
const $$App = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$App;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": i18n.SEO_TITLE_1, "description": i18n.SEO_DESCRIPTION, "data-astro-cid-jlnvoq4d": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-jlnvoq4d": true })} ${maybeRenderHead()}<main class="max-w-[1200px] mx-auto snap-mandatory snap-y scroll-smooth" data-astro-cid-jlnvoq4d> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "data-astro-cid-jlnvoq4d": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Presentation", $$Presentation, { "data-astro-cid-jlnvoq4d": true })} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "projects", "class": "relative place-content-stretch", "data-astro-cid-jlnvoq4d": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Projects", $$Projects, { "data-astro-cid-jlnvoq4d": true })} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "aboutMe", "class": "relative place-content-stretch", "data-astro-cid-jlnvoq4d": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "AboutMe", $$AboutMe, { "data-astro-cid-jlnvoq4d": true })} ` })} </main> ` })} `;
}, "/home/nicodev/project/porfolio/src/components/pages/App.astro", void 0);

const $$Astro$2 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  return renderTemplate`${renderComponent($$result, "App", $$App, {})}`;
}, "/home/nicodev/project/porfolio/src/pages/index.astro", void 0);

const $$file$2 = "/home/nicodev/project/porfolio/src/pages/index.astro";
const $$url$2 = "";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "App", $$App, {})}`;
}, "/home/nicodev/project/porfolio/src/pages/en/index.astro", void 0);

const $$file$1 = "/home/nicodev/project/porfolio/src/pages/en/index.astro";
const $$url$1 = "/en";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "App", $$App, {})}`;
}, "/home/nicodev/project/porfolio/src/pages/es/index.astro", void 0);

const $$file = "/home/nicodev/project/porfolio/src/pages/es/index.astro";
const $$url = "/es";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$1 as a, index as b, index$2 as i };
