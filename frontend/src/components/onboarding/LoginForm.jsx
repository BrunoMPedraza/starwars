import { styled } from '@mui/material/styles';
import { Box, Button, InputAdornment, TextField } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton';
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import { fixedDraggable, PasswordTextFieldStyles } from '../../services/shared/libraries/mui.service';
import { passwords } from '../../services/home.service';

export const LoginForm = () => {
  const PasswordTextField = styled(TextField)(PasswordTextFieldStyles);
  const [secretCode,setSecretCode] = useState()
  const handlePassword = (e) =>{
    e.preventDefault()
    setSecretCode((e.target.value).toLowerCase())
  }

  return (
    <motion.section
    drag
    dragConstraints={fixedDraggable}
    dragElastic={0.2}
    className='login-form-container'
    >
      <Box
        component="form"
        noValidate
        autoComplete="off"
        className='login-form'
      >
        <article>
          <PasswordTextField 
            key='password'
            autoFocus="autoFocus"
            value={secretCode}
            variant='filled'
            label="Credenciales" 
            color="primary" 
            disableAutoFocus 
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
          drag
          dragConstraints={fixedDraggable}
          dragElastic={.05}
        >
          <LoadingButton loading={false} loadingIndicator="Verificando ..." disabled={!passwords.includes(secretCode)} color='primary' variant='contained'>
            Ingresar
          </LoadingButton>
        </article>
      </Box>
    </motion.section>
  )
}
