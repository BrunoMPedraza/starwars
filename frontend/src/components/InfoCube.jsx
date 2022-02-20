import React from 'react'
import { GlassLimit } from './onboarding/';
import { AnimatePresence, motion } from 'framer-motion';
import { asidePropsAnimations, formPropsAnimations, glassAnimations } from '../services/shared/libraries/framermotion.service';
import { DisplayScreen } from './DisplayScreen';
import { Unlogger } from './units/Unlogger';

export const InfoCube = () => {

  
  return (
    <motion.section key='glass-container' className='info-cube-container' {...glassAnimations}>
      <header className='info-cube-header'>
        <AnimatePresence>
          <motion.aside key='glass-outer' {...asidePropsAnimations}>
            <GlassLimit message='Solo personal autorizado de IM'/>
          </motion.aside>
          <motion.section 
          key='login-glass'
          className='login glass-bg blurred' 
          {...formPropsAnimations}
          >
            <DisplayScreen screenScene='auth'/>
          </motion.section>
        </AnimatePresence>
      </header>

    </motion.section>
  )
}
