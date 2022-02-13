import React, { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import {Panel} from '../pages/Panel'
import { loadSwapi } from "../services/home.service";
import {Characters} from '../pages/tabs/Characters'
export const AppRoutes = () => {
  
  

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Panel/>}>
            <Route path='/characters' element={<Characters/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
  );


};
