import { style, styleVariants } from '@vanilla-extract/css';

const base = style({
  fontFamily: "'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  fontWeight: 700,
  border: 0,
  borderRadius: '3em',
  cursor: 'pointer',
  display: 'inline-block',
  lineHeight: 1,
});

export const variants = styleVariants({
  primary: [
    base,
    {
      color: 'white',
      backgroundColor: '#1ea7fd',
    },
  ],
  secondary: [
    base,
    {
      color: '#333',
      backgroundColor: 'transparent',
      boxShadow: 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset',
    },
  ],
});

export const sizes = styleVariants({
  small: [
    base,
    {
      fontSize: '12px',
      padding: '10px 16px',
    },
  ],
  medium: [
    base,
    {
      fontSize: '14px',
      padding: '11px 20px',
    },
  ],
  large: [
    base,
    {
      fontSize: '16px',
      padding: '12px 24px',
    },
  ],
});
