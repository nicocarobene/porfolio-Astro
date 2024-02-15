import english from '@/i18n/languages/en.json';
import spanish from '@/i18n/languages/es.json';

const LANG = {
  ENGLISH: 'en',
  SPANISH: 'es',
};

export const getI18N = ({
  currentLocale = 'en',
}: {
  currentLocale: string | undefined;
}) => {
  if (currentLocale === LANG.SPANISH) return spanish;
  return english;
};