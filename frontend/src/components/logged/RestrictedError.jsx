import { Typography } from '@mui/material'
import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import { useNavigate,useParams } from 'react-router-dom';

export const RestrictedError = () => {
    let { person } = useParams();

    let navigate = useNavigate();
    useEffect(() => {
      setTimeout(() => {
          navigate('/welcome')
          console.log('bad end')
      }, 3500);
    }, [])
    
  return (
    <motion.section>
        <Typography color='error' component='h1' variant='h1'>
            ¡Atención, acceso no autorizado!
        </Typography>
        <Typography color='warning' component='h2' variant='h2'>
          - Autentifiquese {person} -
        </Typography>
    </motion.section>
  )
}
