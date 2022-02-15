import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import {Panel} from '../pages'
export const AppRoutes = () => {
  
  return (
    <BrowserRouter>
        <Routes>
          <Route path='onboarding/*' element={<Panel/>}/>
        </Routes>
    </BrowserRouter>
  );


};
