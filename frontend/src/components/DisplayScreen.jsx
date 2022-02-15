import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { LoginForm } from './onboarding'
import { FunnyLoader } from './units/FunnyLoader'

export const DisplayScreen = ({screenScene}) => {
    const [isLoading,setIsLoading] = useState(true)
        useEffect(() => {
            setIsLoading(true)
            setTimeout(() => {
                setIsLoading(false)
            }, 5000);
    },  [])
  return (
    <>
        {isLoading ? <FunnyLoader loading={isLoading}/> :
            <>
                {screenScene==='auth' & !isLoading &&  (
                    <>
                        <Typography color='primary' component='h1' variant='h1' className='welcome-message'>
                            Autenticación
                        </Typography>
                        <LoginForm/>
                    </>
                )}
            </>
        }
    </>
  )
}
