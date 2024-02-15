import UnitedStatesFlag from '@/components/flags/UnitedState.astro';
import SpainFlag from '@/components/flags/Spain.astro';
export const LANGUAGES: Record<
  string,
  { code: string; name: string; flag: typeof SpainFlag }
> = {
  en: {
    code: 'en',
    name: 'English',
    flag: UnitedStatesFlag,
  },
  es: {
    code: 'es',
    name: 'Español',
    flag: SpainFlag,
  },
};

export const ui = {
  en: {
    'nav.expirience': 'Expirience',
    'nav.projects': 'Projects',
    'nav.aboutMe': 'About Me',
    'nav.contact': 'Contact',
  },
  es: {
    'nav.expirience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.aboutMe': 'Sobre Mi',
    'nav.contact': 'Contacto',
  },
} as const;
export const routes = {
  es: {
    expirience: "experiencia",
    projects: "proyectos",
    aboutMe: "sobre-mi",
    contact: "contacto",
  },
  en: {
    expirience: "expirience",
    projects: "projects",
    aboutMe: "about me",
    contact: "contact",
  }
};
export const defaultLang = 'en';
export const showDefaultLang = false;