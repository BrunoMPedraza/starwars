import React from 'react'
import { Route, Routes } from 'react-router'
import { Home } from '.'
import { InfoCube } from '../components/InfoCube'
import {Starbackground} from '../components/Starbackground'
export const Panel = () => {
  return (
    <main>
      <Starbackground/>
      <InfoCube/>
    </main>
  )
}
