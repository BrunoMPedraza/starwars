import React from 'react';
import { AnimatePresence, motion } from "framer-motion"
import { twinklingAnimations } from '../services/shared/libraries/framermotion.service';

export const Starbackground = () => {
  return (
  <AnimatePresence>
    <motion.aside 
      key='outer-space'
      className='bg-container' 
    >
      <motion.span className='cloud-container'>
        <motion.span 
        initial='initial' 
        animate='animate'  
        key='cloud1'
        className="cloud-1 clouds" 
        transition={{repeat:Infinity, duration: 55, delay: 9}} 
        variants={twinklingAnimations}
        ></motion.span>
        <motion.span 
        initial='initial' 
        animate='animate'  
        key='cloud2'
        className="cloud-2 clouds" 
        transition={{repeat:Infinity, duration: 55, delay: 5}} 
        variants={twinklingAnimations}
        ></motion.span>
        <motion.span 
        initial='initial' 
        animate='animate'  
        key='cloud3'
        className="cloud-3 clouds" 
        transition={{repeat:Infinity, duration: 55, delay: 1}} 
        variants={twinklingAnimations}
        ></motion.span>
      </motion.span>
    </motion.aside>
  </AnimatePresence>
  )
  ;
};
