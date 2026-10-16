// Locales de date-fns y nombres nativos de los idiomas soportados por la app.
import { es, enUS, de, fr, it, pt, nl, ca, pl, da, sv, nb } from 'date-fns/locale';
import { format } from 'date-fns';

export const DATE_LOCALES = {
  es,
  en: enUS,
  de,
  fr,
  it,
  pt,
  nl,
  ca,
  pl,
  da,
  sv,
  no: nb, // noruego bokmål
};

export const LANGUAGE_NAMES = {
  es: 'Español',
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  it: 'Italiano',
  pt: 'Português',
  nl: 'Nederlands',
  ca: 'Català',
  pl: 'Polski',
  da: 'Dansk',
  sv: 'Svenska',
  no: 'Norsk',
};

// Fecha larga sin año ("jueves, 16 de julio"), con el patrón natural por idioma
export const formatDayLong = (date, language) => {
  const locale = DATE_LOCALES[language] || enUS;

  if (language === 'ca') {
    const day = format(date, 'EEEE, d', { locale });
    const month = format(date, 'MMMM', { locale });
    const preposition = /^[aeiouàèéíïòóúü]/i.test(month) ? 'd’' : 'de ';
    return `${day} ${preposition}${month}`;
  }

  const pattern =
    language === 'es'
      ? "EEEE, dd 'de' MMMM"
      : language === 'en'
        ? 'EEEE, MMMM dd'
        : 'EEEE, d MMMM';
  return format(date, pattern, { locale });
};
