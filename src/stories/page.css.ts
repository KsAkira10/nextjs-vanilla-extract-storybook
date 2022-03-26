import { globalStyle, style } from '@vanilla-extract/css';

globalStyle('section', {
  fontFamily: "'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  fontSize: '14px',
  lineHeight: '24px',
  padding: '48px 20px',
  margin: '0 auto',
  maxWidth: '600px',
  color: '#333',
});

globalStyle('section h2', {
  fontWeight: 900,
  fontSize: '32px',
  lineHeight: 1,
  margin: '0 0 4px',
  display: 'inline-block',
  verticalAlign: 'top',
});

globalStyle('section p', {
  margin: '1em 0',
});

globalStyle('section a', {
  textDecoration: 'none',
  color: '#1ea7fd',
});

globalStyle('section ul', {
  paddingLeft: '30px',
  margin: '1em 0',
});

globalStyle('section li', {
  marginBottom: '8px',
});

export const tip = style({});

globalStyle(`section ${tip}`, {
  display: 'inline-block',
  borderRadius: '1em',
  fontSize: '11px',
  lineHeight: '12px',
  fontWeight: 700,
  background: '#e7fdd8',
  color: '#66bf3c',
  padding: '4px 12px',
  marginRight: '10px',
  verticalAlign: 'top',
});

export const tipWrapper = style({});

globalStyle(`section ${tipWrapper}`, {
  fontSize: '13px',
  lineHeight: '20px',
  marginTop: '40px',
  marginBottom: '40px',
});

globalStyle(`section ${tipWrapper} svg`, {
  display: 'inline-block',
  height: '12px',
  width: '12px',
  marginRight: '4px',
  verticalAlign: 'top',
  marginTop: '3px',
});

globalStyle(`section ${tipWrapper} svg path`, {
  fill: '#1ea7fd',
});
