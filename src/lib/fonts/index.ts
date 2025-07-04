import localFont from 'next/font/local';
import { IBM_Plex_Mono } from "next/font/google";

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
  src: '/SuisseIntl/suisseintl-medium.woff2',
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


export const fontIbmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibmplexmono",
  display: "swap",
});