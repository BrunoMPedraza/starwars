import { styled } from '@mui/material/styles';
import { Box, InputAdornment, TextField } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton';
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import {  PasswordTextFieldStyles } from '../../services/shared/libraries/mui.service';
import { passwords } from '../../services/home.service';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import {createAlert, logIn, pickPage} from '../../redux/peopleRedux/people.actions'
export const LoginForm = () => {
  let navigate = useNavigate();
  const PasswordTextField = styled(TextField)(PasswordTextFieldStyles);
  const [userName,setUserName] = useState()
  const [isLoading,setIsLoading] = useState()
  const dispatch = useDispatch();
  const handlePassword = (e) =>{
    e.preventDefault()
    setUserName((e.target.value).toLowerCase())
  }
  const storePassword = (e) =>{
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
        // FAKE DB LOGIN COLLECTION
      e.preventDefault()
      if(passwords.includes(userName)){
        let isLogged=true
        dispatch(
          pickPage({pageChoice:0})
        )
        dispatch(
          createAlert("Ingreso exitoso","success")
        )
        if(userName==='ani'){
          dispatch(
            logIn(userName,'jedi',isLogged)
          )
        }
        else{
          dispatch(
            logIn(userName,'sith',isLogged)
          )
        }
        navigate(`logged/${userName}`)
    
      }else{
        dispatch(
          createAlert("Usuario desconocido","fail")
        )
      }
    }, 500);
    

  }

  return (
    <motion.section
    className='login-form-container'
    key='login-form-container'
    >
      <Box
        component="form"
        noValidate
        autoCaomplete="off"
        className='login-form'
      >
        <article>
          <PasswordTextField 
            key='password'
            autoFocus
            value={userName}
            variant='filled'
            label="Credenciales" 
            color="primary"
            onChange={handlePassword}
            InputProps={{
              style: { color: "#DBB404"} ,
              startAdornment: (
                <InputAdornment position="start">
                  {!passwords.includes(userName) ? <LockTwoToneIcon color='primary' /> : <LockOpenTwoToneIcon color='primary'/>}
                </InputAdornment>
                ),
              }
            }
          />
        </article>
        <article
          className='login-form-button-container'
        >
          <LoadingButton 
          loading={isLoading} 
          loadingIndicator="Verificando ..." 
          disabled={!userName} 
          color='primary' 
          onClick={storePassword}
          type='submit'
          variant='contained'
          >
            Ingresar
          </LoadingButton>
        </article>
      </Box>
    </motion.section>
  )
}
