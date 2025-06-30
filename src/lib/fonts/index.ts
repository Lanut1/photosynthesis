import localFont from 'next/font/local';

export const fontHardman = localFont({
  src: '/Hardman/hardman.woff2',
  display: 'swap',
  variable: '--font-hardman',
  fallback: [
    'Roboto',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Helvetica Neue',
    'Arial',
    'sans-serif',
  ]
});

export const fontSuisse = localFont({
  src: '/SuisseIntl/SuisseIntl-SemiBold.woff2',
  display: 'swap',
  variable: '--font-suisse',
  fallback: [
    'Roboto',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Helvetica Neue',
    'Arial',
    'sans-serif',
  ]
});

export const fontABCDiatype = localFont({
  src: '/ABCDiatype/abc-diatype-regular.woff2',
  display: 'swap',
  variable: '--font-abcdiatype',
  fallback: [
    'Roboto',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Helvetica Neue',
    'Arial',
    'sans-serif',
  ]
});
