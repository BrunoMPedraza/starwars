import React from 'react'
import imperial_emblem from '../../assets/logos/imperial_emblem.svg'
import { Typography,Input } from '@mui/material';
import { GlassLimit } from './GlassLimit';
export const Welcome = () => {
  return (
    <header>
        <aside>
            <GlassLimit message='Solo personal autorizado de IM'/>
        </aside>
        <section className='login glass-bg blurred'>
            <Typography color='info.light' component='h1' variant='h1' className='welcome-message'>
                Bienvenido
            </Typography>
        </section>
        <img className='logo' src={imperial_emblem} alt="Emblema imperial" />
    </header>
  )
}
