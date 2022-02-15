import { motion } from 'framer-motion'
import React from 'react'
import imperial_emblem from '../assets/logos/imperial_emblem.svg'
import { logoAnimations } from '../services/shared/libraries/framermotion.service'
export const LogoContainer = () => {
  return (
    <aside className='logo-container'>
        <motion.img className='logo' src={imperial_emblem} alt="Emblema imperial" {...logoAnimations} />
    </aside>
  )
}
