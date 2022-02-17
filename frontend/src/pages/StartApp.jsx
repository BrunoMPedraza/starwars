import { Button, Typography } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { InfoCube } from '../components/InfoCube'
import { githubAnimations, startButtonAnimations } from '../services/shared/libraries/framermotion.service'
import GitHubIcon from '@mui/icons-material/GitHub';

export const StartApp = () => {
    const [isLoading,setIsLoading] = useState(false)
  return (

        <motion.main 
        className={!isLoading ? `start-app-container` : `start-app-container fixed`}
        color='primary'
        key='start-app'
        // initial={{opacity:0}}
        // animate={{opacity:1}}
        // exit={{opacity:0}}
        {...startButtonAnimations}
        >
            <NavLink 
            to='/panel' 
            style={{ textDecoration: 'none' }}
            >
                <Button 
                className='start-app-button'
                color='primary' 
                variant='outlined' 
                size='large' 
                onClick={()=>setIsLoading(true)}
                >
                    <Typography color='primary' component='h4' variant='h4'>
                        Iniciar
                    </Typography>
                </Button>
            </NavLink>
            <motion.aside
            {...githubAnimations}
            >
                <NavLink 
                className='app-github-button'
                to='https://github.com/BrunoMPedraza/starwars' 
                >
                    <GitHubIcon color='primary'/>
                </NavLink>
            </motion.aside>
        </motion.main>

  )
}
