import { AnimatePresence, motion } from 'framer-motion'
import {FunnyLoader } from '../units/FunnyLoader'
import { authAnimations, mainGlassMovementAnimations } from '../../services/shared/libraries/framermotion.service'
import React, { useState } from 'react'
import { createSvgIcon, List, ListItem, ListItemButton, ListItemIcon, SvgIcon, Typography } from '@mui/material'
import {ReactComponent as TargetIcon} from '../../assets/icons/targets.svg'
import {ReactComponent as ShipsIcon} from '../../assets/icons/ships.svg'
import {ReactComponent  as TravelIcon} from '../../assets/icons/planetTravel.svg'
import { useNavigate } from 'react-router'

export const Deathstar = () => {
    const[ isLoading,setIsLoading] = useState(false)
    return (
        <motion.section className='fixed deathstar-container blurred'
        key='deathstar-logger-container'
        {...authAnimations}
        >
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
                <motion.article
                key='selectionMenu'
                className='fixed deathstar-menu'
                {...mainGlassMovementAnimations}
                >
                    <List>
                        <ListItem disablePadding >
                            <ListItemButton>
                                <ListItemIcon >
                                    <TargetIcon  className='deathstar-navigation-icon'/>
                                </ListItemIcon>
                                <Typography ml={3} color='primary'>Reconocimiento</Typography>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ShipsIcon className='deathstar-navigation-icon'/>
                                </ListItemIcon>
                                <Typography ml={3} color='primary'>Vehiculos</Typography>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TravelIcon className='deathstar-navigation-icon'/>
                                </ListItemIcon>
                                <Typography ml={3} color='primary'>Viajar al hiperespacio</Typography>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </motion.article>
                }
            </AnimatePresence>

        </motion.section>
    )
}
