import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { InfoCube } from '../components/InfoCube'
import { loadData } from '../redux/peopleRedux/people.actions'
import { PERSON_KEY } from '../redux/peopleRedux/people.reducer'
export const Panel = () => {
  let dispatch= useDispatch()
  useEffect(() => {
    dispatch(loadData())
  }, [])
  // view store
  let viewPerson = useSelector((state) => {
    return state[PERSON_KEY];
  });
  return (
    <motion.main
    key='app-panel'
    >
      <InfoCube/>
    </motion.main>
  )
}
