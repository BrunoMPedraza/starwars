import { motion } from 'framer-motion'
import React from 'react'
import { glassAnimations } from '../../services/shared/libraries/framermotion.service'
// DELETE
export const Navbar = () => {
  return (
    <motion.nav key='navbar-info' className='info-cube-container' {...glassAnimations}>
        Navbar
    </motion.nav>
  )
}
