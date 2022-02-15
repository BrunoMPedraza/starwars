import React, { useEffect, useState } from 'react'
import { LinearProgress, Typography } from '@mui/material'


export const FunnyLoader = () => {
    const phrases = [
        {id:1 ,phrase: 'Comenzando carga', duration: 8200 },
        {id:2 ,phrase: 'Limpiando hiperdimensionalizador', duration: 12400 },
        {id:3 ,phrase: 'Arreglando drones arregladores', duration: 13000 },
        {id:4 ,phrase: 'Evitando colision interespacial', duration: 12700 },
        {id:5 ,phrase: 'Cazando cazarrecompensas', duration: 9600 },
        {id:6 ,phrase: 'Quitando lapices del motor', duration: 11900 },
        {id:7 ,phrase: 'Observando la nada', duration: 10000 },
        {id:8 ,phrase: 'Secuestrando jovenes aprendices', duration: 20100 },
        {id:9 ,phrase: 'Cargando interestelador', duration: 10250 }
    ]

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
    <>
    <Typography color='primary' component='h2' variant='h5' className='welcome-message'>
        {currentPhrase}...
    <LinearProgress sx={{ width: '100%',}} color="primary" />
    </Typography>
    </>
  )
}
