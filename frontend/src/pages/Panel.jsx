import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes, useLocation } from 'react-router'
import { Data } from '.'
import { InfoCube } from '../components/InfoCube'
import { loadData } from '../redux/peopleRedux/people.actions'

export const Panel = () => {
 
  return (
    <motion.main
    key='app-panel'
    >
      <InfoCube/>
    </motion.main>
  )
}
