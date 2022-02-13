import React, { useEffect } from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { loadSwapi } from "../services/home.service";


export const AppRoutes = () => {
  useEffect(() => {
    async function getInfo(){
      const result = await loadSwapi('planets');
      result.forEach(planet=>console.log('El planeta ',planet.name,' tiene clima ',planet.climate))
    }
    getInfo()
  }, [])
  
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  );


};
