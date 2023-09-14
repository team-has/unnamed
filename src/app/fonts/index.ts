import localFont from 'next/font/local';

const samliphopangche = localFont({
  src: [
    {
      path: './SDSamliphopangcheBasic.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  fallback: [
    'SDSamliphopangche_Basic',
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    'Roboto',
    'Helvetica Neue',
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Noto Sans KR',
    'Malgun Gothic',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif',
  ],
});

const miSaeng = localFont({
  src: [
    {
      path: './SDMiSaeng.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  fallback: [
    'SDMiSaeng',
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    'Roboto',
    'Helvetica Neue',
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Noto Sans KR',
    'Malgun Gothic',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif',
  ],
});

const hSYuji = localFont({
  src: [
    {
      path: './HSYuji.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  fallback: [
    'HSYuji-Regular',
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    'Roboto',
    'Helvetica Neue',
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Noto Sans KR',
    'Malgun Gothic',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif',
  ],
});

export default {
  miSaeng: miSaeng.className,
  hSYuji: hSYuji.className,
  samliphopangche: samliphopangche.className,
};
