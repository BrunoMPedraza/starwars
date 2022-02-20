import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LogoutIcon from '@mui/icons-material/Logout';
import { motion } from 'framer-motion';
import { createAlert, logOut } from '../../redux/peopleRedux/people.actions';
import { LOGGED_KEY } from '../../redux/peopleRedux/people.reducer';

export const Unlogger = () => {
    const dispatch = useDispatch()
    const viewData = useSelector((state) => {
        return state[LOGGED_KEY];
      });
    const clearLog = (e) =>{
        if(viewData.isLogged){
        dispatch(
            createAlert("Deslogeo exitoso","success"),
          )
        dispatch(
            logOut()
        )}
        else{
            dispatch(
                createAlert("No has iniciado sesion","fail"),
              )
        }
    }
    return (
        <motion.aside className='fixed unlogger-container' key='unlogger-container'>
            <LogoutIcon color='primary' onClick={clearLog}/>
        </motion.aside>
    )
}
