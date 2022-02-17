import React from "react";
import { AnimatePresence } from "framer-motion";
import { Route,Routes,useLocation } from "react-router-dom";
import { LogoContainer } from "../components/LogoContainer";
import { Starbackground } from "../components/Starbackground";
import {Panel} from '../pages'
import { StartApp } from "../pages/StartApp";
import { Feedback } from "../components/units/Feedback";
export const AppRoutes = () => {
  const location = useLocation() 

  return (
          <AnimatePresence>
            <Feedback/>
            <Starbackground/>
            <LogoContainer/>
            <Routes 
            location={location} 
            key={location.pathname}
            >
              <Route path='welcome/' element={<StartApp/>}/>
              <Route path='panel/' element={<Panel/>}/>

            </Routes>
          </AnimatePresence>

  );


};
