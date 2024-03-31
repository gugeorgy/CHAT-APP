export const styles = {
  global: {
    '*': {
      minWidth: 0,
      font: 'inherit',
    },
    '*::before, *::after': {
      boxSizing: 'border-box',
    },
    html: {
      scrollBehavior: 'smooth',
    },
    body: {
      margin: 0,
      color: 'text',
    },
    'h1, h2, h3, h4, h5, h6': {
      textWrap: 'balance',
    },
    p: {
      textWrap: 'pretty',
    },
    'ul, ol': {
      listStyleType: 'none',
    },
    'img, video': {
      display: 'block',
      height: 'auto',
      maxWidth: '100%',
    },
    img: {
      objectFit: 'cover',
    },
  },
};
