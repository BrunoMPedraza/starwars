import { styled } from '@mui/material/styles';
import { Box, Button, InputAdornment, TextField } from '@mui/material'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import { fixedDraggable, PasswordTextFieldStyles } from '../../services/shared/libraries/mui.service';

export const LoginForm = () => {
  const PasswordTextField = styled(TextField)(PasswordTextFieldStyles);
  const [secretCode,setSecretCode] = useState()
  const passwords = ['palpatine','darthvader','kyloren','sith','ani']
  const handlePassword = (e) =>{
    e.preventDefault()
    setSecretCode(e.target.value)
    console.log(secretCode)
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
                  {passwords.includes(secretCode) ? <LockTwoToneIcon color='primary' /> : <LockOpenTwoToneIcon color='primary'/>}
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
          <Button disabled={!passwords.includes(secretCode)}color='primary' variant='contained'>
            Ingresar
          </Button>
        </article>
      </Box>
    </motion.section>
  )
}
