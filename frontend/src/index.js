import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import reportWebVitals from './reportWebVitals';
import { AppRoutes } from './routes/AppRoutes';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux'
import store from './app/store'

// PALLETE: https://color.adobe.com/es/Star-Wars-(RetroMoviePostercom)-color-theme-6247821/
// PRIMARY: BLUE
// SECONDARY: YELLOW
const starwars = createTheme({
  palette:{
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
      fontSize: '2rem',
      fontWeight: 700
    },
    h2:{
      fontSize: '1.4rem',
      fontWeight: 600
    },
    h5:{
      fontSize: '1.1rem',
      fontWeight: 400
    },
    h6:{
      fontSize: '.85rem',
    },
   },
})

ReactDOM.render( 
  <React.StrictMode>
    <ThemeProvider theme={starwars}>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </ThemeProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
