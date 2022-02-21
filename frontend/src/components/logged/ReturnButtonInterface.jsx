import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { pickPage } from '../../redux/peopleRedux/people.actions';

export const ReturnButtonInterface = () => {
    const dispatch = useDispatch();
    const handleExit = (e) => {
        e.preventDefault()
        dispatch(
            pickPage({pageChoice:0})
        )
    }
    return (
        <motion.aside>
            <CloseIcon color='primary' onClick={(e)=>handleExit(e)}/>
        </motion.aside>
    )
}
