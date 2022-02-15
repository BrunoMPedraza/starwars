import React from 'react'
import { Route, Routes } from 'react-router'
import { Home } from '.'
import { InfoCube } from '../components/InfoCube'
import { LogoContainer } from '../components/LogoContainer'
import {Starbackground} from '../components/Starbackground'
export const Panel = () => {
  return (
    <main>
      <Starbackground/>
      <InfoCube/>
      <LogoContainer/>
    </main>
  )
}
