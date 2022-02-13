import React from 'react';
import { AnimatePresence, motion } from "framer-motion"
import { twinklingAnimations } from '../services/shared/libraries/framermotion.service';

export const Starbackground = () => {
  return (
  <AnimatePresence>
    <motion.aside 
      className='bg-container' 
      // initial='initial'
      // animate='animate'
      // // eslint-disable-next-line no-sequences
      // transition={{ duration: 15},{repeat: Infinity}}
      // variants={twinklingAnimations}
    >
      {/* <span className="stars"></span>
      <motion.span  className="twinkling" ></motion.span> */}
      <motion.span className='cloud-container'>
        <motion.span 
        initial='initial' 
        animate='animate'  
        className="cloud-1 clouds" 
        transition={{repeat:Infinity, duration: 55, delay: 9}} 
        variants={twinklingAnimations}
        ></motion.span>
        <motion.span 
        initial='initial' 
        animate='animate'  
        className="cloud-2 clouds" 
        transition={{repeat:Infinity, duration: 55, delay: 5}} 
        variants={twinklingAnimations}
        ></motion.span>
        <motion.span 
        initial='initial' 
        animate='animate'  
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
