import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import GpsFixedSharpIcon from '@mui/icons-material/GpsFixedSharp';
import GpsNotFixedSharpIcon from '@mui/icons-material/GpsNotFixedSharp';
import GpsOffSharpIcon from '@mui/icons-material/GpsOffSharp';
import { useSelector } from 'react-redux';


export const Feedback = () => {
    const alerts = useSelector(state=>state.notifications)
    
    useEffect(() => {
        console.log(alerts)
    }, [alerts])
    
  return (
    <motion.footer className='feedback-container' color='primary'>
        <motion.section className='gps-icon-container'>
            <GpsFixedSharpIcon color='primary'/>
        </motion.section>
        
    </motion.footer>
  )
}
