/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderSlot, g as renderHead, h as renderComponent } from '../astro_doCDC3Zz.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
/* empty css                        */

const SEO_TITLE_1$1 = "Porfolio - Nicodev 💻";
const SEO_DESCRIPTION$1 = "Welcome to my professional full stack developer portfolio. Explore my profile, projects, and experience. Feel free to reach out for collaborations and web development opportunities.";
const SEO$1 = {
	ERROR_404_TITLE: "Page not found 😭",
	ERROR_404_DESCRIPTION: "Sorry, we couldn't find the page you were looking for.",
	ERROR_404_BACK: "Go back to home"
};
const HEADER$1 = {
	LOGO: "Return to home"
};
const HEADER_EXPERIENCE$1 = "Expirience";
const HEADER_PROJECT$1 = "Projects";
const HEADER_ABOUTME$1 = "About me";
const HEADER_CONTACT$1 = "Contact";
const english = {
	SEO_TITLE_1: SEO_TITLE_1$1,
	SEO_DESCRIPTION: SEO_DESCRIPTION$1,
	SEO: SEO$1,
	HEADER: HEADER$1,
	HEADER_EXPERIENCE: HEADER_EXPERIENCE$1,
	HEADER_PROJECT: HEADER_PROJECT$1,
	HEADER_ABOUTME: HEADER_ABOUTME$1,
	HEADER_CONTACT: HEADER_CONTACT$1
};

const SEO_TITLE_1 = "Porfolio - Nicodev 💻";
const SEO_DESCRIPTION = "Bienvenido a mi portafolio de programador full stack. Explora mi perfil, proyectos, y experiencia. Siempre puedes contactarme para colaborar o para una oportunidad de trabajo.";
const SEO = {
	ERROR_404_TITLE: "Pagina no encontrada 😭",
	ERROR_404_DESCRIPTION: "Lo sentimos, no pudimos encontrar la pagina que estabas buscando.",
	ERROR_404_BACK: "Volver al inicio"
};
const HEADER = {
	LOGO: "Volver al inicio"
};
const HEADER_EXPERIENCE = "Expiriencia";
const HEADER_PROJECT = "Projectos";
const HEADER_ABOUTME = "Sobre mi";
const HEADER_CONTACT = "Contacto";
const spanish = {
	SEO_TITLE_1: SEO_TITLE_1,
	SEO_DESCRIPTION: SEO_DESCRIPTION,
	SEO: SEO,
	HEADER: HEADER,
	HEADER_EXPERIENCE: HEADER_EXPERIENCE,
	HEADER_PROJECT: HEADER_PROJECT,
	HEADER_ABOUTME: HEADER_ABOUTME,
	HEADER_CONTACT: HEADER_CONTACT
};

const LANG = {
  ENGLISH: "en",
  SPANISH: "es"
};
const getI18N = ({
  currentLocale = "en"
}) => {
  if (currentLocale === LANG.SPANISH)
    return spanish;
  return english;
};

const $$Astro$4 = createAstro();
const $$UnitedState = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$UnitedState;
  return renderTemplate`${maybeRenderHead()}<svg class="w-4 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7410 3900"><path fill="#b22234" d="M0 0h7410v3900H0z"></path><path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" stroke-width="300"></path><path fill="#3c3b6e" d="M0 0h2964v2100H0z"></path><g fill="#fff"><g id="d"><g id="c"><g id="e"><g id="b"><path id="a" d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"></path><use xlink:href="#a" y="420"></use><use xlink:href="#a" y="840"></use><use xlink:href="#a" y="1260"></use></g><use xlink:href="#a" y="1680"></use></g><use xlink:href="#b" x="247" y="210"></use></g><use xlink:href="#c" x="494"></use></g><use xlink:href="#d" x="988"></use><use xlink:href="#c" x="1976"></use><use xlink:href="#e" x="2470"></use></g></svg>`;
}, "/home/nicodev/project/porfolio/src/components/flags/UnitedState.astro", void 0);

const $$Astro$3 = createAstro();
const $$Spain = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Spain;
  return renderTemplate`${maybeRenderHead()}<svg class="w-4 h-auto" xmlns="http://www.w3.org/2000/svg" width="750" height="500" viewBox="0 0 750 500"> <rect width="750" height="500" fill="#c60b1e"></rect> <rect width="750" height="250" fill="#ffc400" y="125"></rect> </svg>`;
}, "/home/nicodev/project/porfolio/src/components/flags/Spain.astro", void 0);

const LANGUAGES = {
  en: {
    code: "en",
    name: "English",
    flag: $$UnitedState
  },
  es: {
    code: "es",
    name: "Español",
    flag: $$Spain
  }
};
const ui = {
  en: {
    "nav.expirience": "Expirience",
    "nav.projects": "Projects",
    "nav.aboutMe": "About Me",
    "nav.contact": "Contact"
  },
  es: {
    "nav.expirience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.aboutMe": "Sobre Mi",
    "nav.contact": "Contacto"
  }
};
const routes = {
  es: {
    expirience: "experiencia",
    projects: "proyectos",
    aboutMe: "sobre-mi",
    contact: "contacto"
  },
  en: {
    expirience: "expirience",
    projects: "projects",
    aboutMe: "about me",
    contact: "contact"
  }
};
const defaultLang = "en";

function getLangFromUrl(url) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui)
    return lang;
  return defaultLang;
}
function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
function useTranslatedPath(lang) {
  return function translatePath(path, l = lang) {
    const pathName = path.replaceAll("/", "");
    const hasTranslation = defaultLang !== l && routes[l][pathName] !== void 0;
    const translatedPath = hasTranslation ? "/" + routes[l][pathName] : path;
    return l === defaultLang ? translatedPath : `/${l}${translatedPath}`;
  };
}
function getRouteFromUrl(url) {
  const pathname = new URL(url).pathname;
  const parts = pathname?.split("/");
  const path = parts.pop() || parts.pop();
  if (path === void 0) {
    return void 0;
  }
  const currentLang = getLangFromUrl(url);
  if (defaultLang === currentLang) {
    const route = Object.values(routes)[0];
    return route[path] !== void 0 ? route[path] : void 0;
  }
  const getKeyByValue = (obj, value) => {
    return Object.keys(obj).find((key) => obj[key] === value);
  };
  const reversedKey = getKeyByValue(routes[currentLang], path);
  if (reversedKey !== void 0) {
    return reversedKey;
  }
  return void 0;
}

const $$Astro$2 = createAstro();
const $$Error404Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Error404Layout;
  const { description, title } = Astro2.props;
  const { currentLocale } = Astro2;
  return renderTemplate`<html${addAttribute(currentLocale, "lang")}> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="robots" content="nofollow, noindex"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Onest:wght@100;300;500;700&display=swap" rel="stylesheet"><title>${title}</title>${renderSlot($$result, $$slots["preload"])}${renderHead()}</head> <body> <main> ${renderSlot($$result, $$slots["default"])} </main>  </body></html>`;
}, "/home/nicodev/project/porfolio/src/layouts/Error404Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$Error404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Error404;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  const lang = getLangFromUrl(Astro2.url);
  const translatePath = useTranslatedPath(lang);
  return renderTemplate`${renderComponent($$result, "Error404Layout", $$Error404Layout, { "title": `${i18n.SEO.ERROR_404_TITLE}\xA0${(/* @__PURE__ */ new Date()).getFullYear()}`, "description": i18n.SEO.ERROR_404_DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex relative pb-24 min-h-screen">
this page is not found
<a class="absolute bottom-10 right-10"${addAttribute(translatePath("/", currentLocale), "href")}> ${i18n.SEO.ERROR_404_BACK} </a> </section> ` })}`;
}, "/home/nicodev/project/porfolio/src/components/pages/Error404.astro", void 0);

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Error404", $$Error404, {})}`;
}, "/home/nicodev/project/porfolio/src/pages/404.astro", void 0);

const $$file = "/home/nicodev/project/porfolio/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { LANGUAGES as L, _404 as _, getLangFromUrl as a, useTranslations as b, getI18N as c, getRouteFromUrl as g, useTranslatedPath as u };
