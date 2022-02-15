import React from 'react'
import { GlassLimit,LoginForm } from './onboarding/';
import { Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { asidePropsAnimations, formPropsAnimations, glassAnimations } from '../services/shared/libraries/framermotion.service';
import { DisplayScreen } from './DisplayScreen';

export const InfoCube = () => {
  
  return (
    <motion.section className='info-cube-container' {...glassAnimations}>
      <header className='info-cube-header'>
        <AnimatePresence>
          <motion.aside {...asidePropsAnimations}>
            <GlassLimit message='Solo personal autorizado de IM'/>
          </motion.aside>
          <motion.section className='login glass-bg blurred' {...formPropsAnimations}>
            <DisplayScreen screenScene='loading'/>
          </motion.section>
        </AnimatePresence>
      </header>
    </motion.section>
  )
}
