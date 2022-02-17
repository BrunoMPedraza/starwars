// LIBRARIES
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@emotion/react';
//STYLING
import { createTheme } from '@mui/material/styles';
import { starwarsTheme } from './services/shared/libraries/mui.service';
import './App.scss';
// REDUX
import { Provider } from 'react-redux'
import {store} from './redux/store'
// OTHER
import { AppRoutes } from './routes/AppRoutes';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// PALLETE: https://color.adobe.com/es/Star-Wars-(RetroMoviePostercom)-color-theme-6247821/
// PRIMARY: BLUE
// SECONDARY: YELLOW
const starwars = createTheme(starwarsTheme)

ReactDOM.render( 
  <React.StrictMode>
    <ThemeProvider theme={starwars}>
      <Provider store={store}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
