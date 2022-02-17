export const PasswordTextFieldStyles = {
    '& input:valid + fieldset': {
      borderColor: '#DBB404',
      borderWidth: 2,
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 12,
      padding: '4px !important', // override inline-style
    }
};

export const fixedDraggable = {left:0,right:0,top:0,bottom:0}

export const starwarsTheme = { palette:{
  secondary: {
    light: "#5797a7",
    main: "#0A88A9",
    dark: "#065063"
  },
  primary:{
    light: '#ad9c4d',
    main: '#DBB404',
    dark: '#635410',
    contrastText: '#000000'
  },
  info:{
    light:'#fafafa',
    main:'#F0F0ED',
    dark:'#c0c0c0'
  }
},
typography: {
  fontFamily:'DIN',
  h1:{
    fontSize: '2.1rem',
    fontWeight: 700,
  },
  h2:{
    fontSize: '1.8rem',
    fontWeight: 600
  },
  h3:{
    fontSize: '1.5rem',
    fontWeight: 600
  },
  h4:{
    fontSize: '1.2rem',
    fontWeight: 500
  },
  h5:{
    fontSize: '1rem',
    fontWeight: 400
  },
  h6:{
    fontSize: '.85rem',
  },
 },}