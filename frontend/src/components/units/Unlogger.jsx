import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../features/useSlice'
import LogoutIcon from '@mui/icons-material/Logout';
import { motion } from 'framer-motion';

export const Unlogger = () => {
    const dispatch = useDispatch()
    const clearLog = (e) =>{
        e.preventDefault()
        dispatch(logout())
    }
    return (
        <motion.aside className='fixed unlogger-container'>
            <LogoutIcon color='primary' onClick={clearLog}/>
        </motion.aside>
    )
}
