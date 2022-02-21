import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { createSvgIcon, List, ListItem, ListItemButton, ListItemIcon, SvgIcon, Typography } from '@mui/material'
// STORE
import { useDispatch, useSelector } from 'react-redux'
import { pickPage } from '../../redux/peopleRedux/people.actions'
import { LOG_CHOICE } from '../../redux/peopleRedux/people.actionTypes'
// ASSETS
import {ReactComponent as TargetIcon} from '../../assets/icons/targets.svg'
import {ReactComponent as ShipsIcon} from '../../assets/icons/ships.svg'
import {ReactComponent  as TravelIcon} from '../../assets/icons/planetTravel.svg'
// OTHERS
import {FunnyLoader } from '../units/FunnyLoader'
import { authAnimations, mainGlassMovementAnimations } from '../../services/shared/libraries/framermotion.service'
import { Interface } from './Interface'

export const Deathstar = () => {
    const[ isLoading,setIsLoading] = useState(false)
    const dispatch = useDispatch();
    const [currentPage,setCurrentPage] = useState(0)
    const loggedAuth = useSelector(state => state.loggedAuth);
    useEffect(() => {
        setCurrentPage(loggedAuth.pageChoice)
    }, [loggedAuth])
    

    

    const handleClick = (e,pageChoice) =>{
        e.preventDefault()
        dispatch(pickPage({pageChoice:pageChoice}))
        setCurrentPage(pageChoice)
    }
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
                    {currentPage===0 &&
                        <List>
                            <ListItem disablePadding >
                                <ListItemButton onClick={(e)=>handleClick(e,1)}>
                                    <ListItemIcon>
                                        <TargetIcon  className='deathstar-navigation-icon'/>
                                    </ListItemIcon>
                                    <Typography ml={3} color='primary'>Reconocimiento</Typography>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton onClick={(e)=>handleClick(e,2)}>
                                    <ListItemIcon>
                                        <ShipsIcon className='deathstar-navigation-icon'/>
                                    </ListItemIcon>
                                    <Typography ml={3} color='primary'>Vehiculos</Typography>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton onClick={(e)=>handleClick(e,3)}>
                                    <ListItemIcon>
                                        <TravelIcon className='deathstar-navigation-icon'/>
                                    </ListItemIcon>
                                    <Typography ml={3} color='primary'>Viajar al hiperespacio</Typography>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    }
                    {currentPage>0 && <Interface picked={currentPage}/>}
                </motion.article>
            }
            </AnimatePresence>

        </motion.section>
    )
}
