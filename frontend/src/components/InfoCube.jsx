import React from 'react'
import Button from '@mui/material/Button';
import { Welcome } from './onboarding/Welcome';
export const InfoCube = () => {
  return (
    <section className='info-cube-container'>
      <Welcome/>
       {/* <Button variant="contained" color='primary'>Contained</Button> */}
    </section>
  )
}
