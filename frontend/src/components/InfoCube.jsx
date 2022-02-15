import React from 'react'
import { GlassLimit,LoginForm } from './onboarding/';
import { Typography } from '@mui/material';
import imperial_emblem from '../assets/logos/imperial_emblem.svg'

export const InfoCube = () => {
  
  return (
    <section className='info-cube-container'>
      <header className=''>
        <aside>
          <GlassLimit message='Solo personal autorizado de IM'/>
        </aside>
        <section className='login glass-bg blurred'>
          <Typography color='primary' component='h1' variant='h1' className='welcome-message'>
              Autenticación
          </Typography>
          <img className='logo' src={imperial_emblem} alt="Emblema imperial" />
          <LoginForm/>
        </section>
    </header>
    </section>
  )
}
