import React, { useEffect, useState } from 'react'
import { LinearProgress, Typography } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import { loadingAnimations } from '../../services/shared/libraries/framermotion.service'


export const FunnyLoader = ({isLoading}) => {
    const phrases = [
        {id:1 ,phrase: 'Comenzando carga', duration: 4200 },
        {id:2 ,phrase: 'Limpiando túneles de gusano', duration: 4400 },
        {id:3 ,phrase: 'Arreglando drones reparadores', duration: 3500 },
        {id:4 ,phrase: 'Evitando colision interestelar', duration: 4350 },
        {id:5 ,phrase: 'Cazando cazarrecompensas', duration: 3300 },
        {id:6 ,phrase: 'Quitando lapices del motor', duration: 3700 },
        {id:7 ,phrase: 'Observando la nada', duration: 5000 },
        {id:8 ,phrase: 'Secuestrando jovenes aprendices', duration: 2100 },
        {id:9 ,phrase: 'Cargando interestelador', duration: 4250 },
        {id:10 ,phrase: '¿Eso es una tortuga?', duration: 2250 }
    ]
    const usedPhrases = []

    const [index,setIndex] = useState(0)
    const [currentPhrase,setCurrentPhrase] = useState(phrases[0].phrase)
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((index) => (index === phrases.length - 1 ? 0 : index + 1));
        }, phrases[index].duration);
        return () => clearInterval(interval);
    }, []);
    
    useEffect(() => {
      setCurrentPhrase(phrases[index].phrase)
    }, [index])

    
  
  return (
    <AnimatePresence>
       {!isLoading ?
        <motion.section
        key="phraseMOver"
        initial={{opacity:0}}
        animate={{opacity:1}}
        className='loading-container'
        >
          <Typography color='primary' component='h2' variant='h5' className='loading-message'>
              {currentPhrase}...
          </Typography> 
          <LinearProgress className='loading-progress-bar' color="primary" />
        </motion.section>
        :
        <motion.section>
          <Typography color='success' component='h2' variant='h5' className='loading-message'>
            ¡Finalizado!
          </Typography>
        </motion.section>
      }
      
    </AnimatePresence>
  )
}
