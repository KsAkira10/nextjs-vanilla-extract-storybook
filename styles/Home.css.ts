import { globalStyle, style } from "@vanilla-extract/css";

export const container = style({
  padding: '0 2rem',
});

export const main = style({
  minHeight: '100vh',
  padding: '4rem 0',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const footer = style({
  display: 'flex',
  flex: 1,
  padding: '2rem 0',
  borderTop: '1px solid #eaeaea',
  justifyContent: 'center',
  alignItems: 'center',
});

globalStyle(`${footer} a`, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexGrow: 1,
});

const titlePseudoClass = {
  textDecoration: 'underline'
}

export const title = style({
  margin: 0,
  lineHeight: 1.15,
  fontSize: '4rem',
  textAlign: 'center',
  ':hover': titlePseudoClass, 
  ':focus': titlePseudoClass, 
  ':active': titlePseudoClass,
});

globalStyle(`${title} a`, {
  color: '#0070f3',
  textDecoration: 'none',
})

export const description = style({
  margin: '4rem 0',
  lineHeight: 1.5,
  fontSize: '1.5rem',
  textAlign: 'center',
});

export const code = style({
  background: '#fafafa',
  borderRadius: '5px',
  padding: '0.75rem',
  fontSize: '1.1rem',
  fontFamily: 'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace',
});

export const grid = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  maxWidth: '800px',
  '@media': {
    'screen and (max-width: 600px)': {
      width: '100%',
      flexDirection: 'column',
    }
  }
});

const cardPseudoClass = {
  color: '#0070f3',
  borderColor: '#0070f3',
}

export const card = style({
  margin: '1rem',
  padding: '1.5rem',
  textAlign: 'left',
  color: 'inherit',
  textDecoration: 'none',
  border: '1px solid #eaeaea',
  borderRadius: '10px',
  transition: 'color 0.15s ease, border-color 0.15s ease',
  maxWidth: '300px',
  ':hover': cardPseudoClass,
  ':focus': cardPseudoClass, 
  ':active': cardPseudoClass,
});

globalStyle(`${card} h2`, {
  margin: '0 0 1rem 0',
  fontSize: '1.5rem',
});


globalStyle(`${card} p`, {
  margin: 0,
  fontSize: '1.25rem',
  lineHeight: 1.5,
});

export const logo = style({
  height: '1em',
  marginLeft: '0.5rem',
});
