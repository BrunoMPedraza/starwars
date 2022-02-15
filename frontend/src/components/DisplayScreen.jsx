import { Typography } from '@mui/material'
import React from 'react'
import { LoginForm } from './onboarding'
import { FunnyLoader } from './units/FunnyLoader'

export const DisplayScreen = ({screenScene}) => {
  return (
    <>
        {screenScene==='loading' && (
        <>
            <FunnyLoader/>
        </>
        )}
        {screenScene==='auth' && (
            <>
                <Typography color='primary' component='h1' variant='h1' className='welcome-message'>
                    Autenticación
                </Typography>
                <LoginForm/>
            </>
        )}
    </>
  )
}
