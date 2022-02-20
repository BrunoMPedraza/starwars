import React from "react";
import { AnimatePresence } from "framer-motion";
import { Route,Routes,useLocation} from "react-router-dom";
import { LogoContainer } from "../components/LogoContainer";
import { Starbackground } from "../components/Starbackground";
import {Panel,StartApp,Data} from '../pages'
import { Feedback } from "../components/units/Feedback";
import { Unlogger } from "../components/units/Unlogger";
export const AppRoutes = () => {
  const location = useLocation() 
  return (
          <AnimatePresence>
            <Starbackground/>
            <LogoContainer/>
            <Unlogger/>

            <Routes 
            location={location} 
            key={location.pathname}
            >
              <Route path='welcome/' element={<StartApp/>}/>
              <Route path='panel/' element={<Panel/>}/>
              <Route path='panel/logged/:person' element={<Data/>}/>
              
            </Routes>
            
            <Feedback/>
          </AnimatePresence>

  );


};
