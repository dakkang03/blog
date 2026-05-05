import { ui } from './ui';

export const defaultLang = 'en' as const;

export function getLangFromUrl(url: URL): 'en' | 'ko' {
  const segments = url.pathname.split('/').filter(Boolean);
  for (const seg of segments) {
    if (seg === 'en' || seg === 'ko') return seg;
  }
  return defaultLang;
}

export function useTranslations(lang: 'en' | 'ko') {
  return function t(key: keyof typeof ui['en']): string {
    return ui[lang][key] || ui['en'][key];
  };
}

export function getAlternateLang(lang: string) {
  return lang === 'en' ? 'ko' : 'en';
}