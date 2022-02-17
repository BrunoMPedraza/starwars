import { styled } from '@mui/material/styles';
import { Box, Button, InputAdornment, TextField } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton';
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import { fixedDraggable, PasswordTextFieldStyles } from '../../services/shared/libraries/mui.service';
import { passwords } from '../../services/home.service';
import { useDispatch } from 'react-redux';
import { login } from '../../features/useSlice';
import { useNavigate } from 'react-router';
import { actions, createAlert, setAlert } from '../../features/alertSlice';

export const LoginForm = () => {
  let navigate = useNavigate();
  const PasswordTextField = styled(TextField)(PasswordTextFieldStyles);
  const [secretCode,setSecretCode] = useState()
  const [isLoading,setIsLoading] = useState()
  const dispatch = useDispatch();
  const handlePassword = (e) =>{
    e.preventDefault()
    setSecretCode((e.target.value).toLowerCase())
  }
  const storePassword = (e) =>{
    e.preventDefault()
    if(passwords.includes(secretCode)){
      dispatch(
        actions.createAlert({
          message:'Ingreso exitoso',
          type:'success'
        })
      )
      dispatch(
        login({
        secretCode:secretCode 
        })
      )
      // navigate(`logged/${secretCode}`)
      // I know this is dumb lol, just moving around stuff
  
    }else{
      dispatch(
        actions.createAlert({
          message:'Usuario desconocido',
          type:'fail'
        })
      )
    }
    

  }

  return (
    <motion.section
    className='login-form-container'
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
            value={secretCode}
            variant='filled'
            label="Credenciales" 
            color="primary"
            onChange={handlePassword}
            InputProps={{
              style: { color: "#DBB404"} ,
              startAdornment: (
                <InputAdornment position="start">
                  {!passwords.includes(secretCode) ? <LockTwoToneIcon color='primary' /> : <LockOpenTwoToneIcon color='primary'/>}
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
          disabled={!secretCode} 
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
