import {  Typography } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import {  mainGlassMovementAnimations } from '../services/shared/libraries/framermotion.service'
import { LoginForm } from './onboarding'
import { FunnyLoader } from './units/FunnyLoader'

export const DisplayScreen = ({screenScene}) => {
    const [isLoading,setIsLoading] = useState(true)
        useEffect(() => {
            setIsLoading(true)
            setTimeout(() => {
                setIsLoading(false)
            }, 12000);
    },  [])
    return (
    <>
        <AnimatePresence>
            {isLoading ? 
            <motion.aside
            key='loader'
            className='fixed'
            initial={{y:-900,opacity:0,scale:0.5}}
            animate={{y:0,opacity:1,scale:1}}
            exit={{y:-900,opacity:0,scale:0,transition:{duration:1}}}
            transition={{duration:.5,delay:3,ease:"easeOut"}}
            >
                <FunnyLoader loading={isLoading}/>
            </motion.aside> 
            :
            <motion.main
            className='fixed'
            {...mainGlassMovementAnimations}
            >
                {screenScene==='auth' &&  (
                    <>
                        <Typography color='primary' component='h1' variant='h1' className='welcome-message'>
                            Autenticación
                        </Typography>
                        <LoginForm passedPassword={()=>console.log('test')}/>
                    </>
                )}
                {screenScene==='menu'&& (
                    <>
                        <Typography color='primary' component='h2' variant='h1'>
                            Menu
                        </Typography>
                    </>
                )}
            </motion.main>
            }
        </AnimatePresence>
    </>
  )
}
