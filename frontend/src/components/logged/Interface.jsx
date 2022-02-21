import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { LOG_CHOICE } from '../../redux/peopleRedux/people.actionTypes';
import { People, Travel, Vehicles } from './pages';
import { ReturnButtonInterface } from './ReturnButtonInterface';

export const Interface = ({picked}) => {
    const [currentPage,setCurrentPage] = useState(picked)
    
    const loggedAuth = useSelector(state => state.loggedAuth);
    
    useEffect(() => {
        setCurrentPage(loggedAuth.pageChoice)
    }, [loggedAuth])


    return (
        <motion.article className='interface-container'>
            <AnimatePresence>
                {currentPage===1 && <People/>}
                {currentPage===2 && <Vehicles/>}
                {currentPage===3 && <Travel/>}
                {currentPage!==0 && <ReturnButtonInterface/>}
            </AnimatePresence>
        </motion.article>
    )
}
