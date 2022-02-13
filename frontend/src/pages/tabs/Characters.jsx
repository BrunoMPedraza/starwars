import React, { useEffect, useState } from 'react'
import { loadSwapi } from '../../services/home.service'

export const Characters = () => {
  const [planets, setPlanets] = useState(undefined)

  useEffect(() => {
    const loadInfo = async(param)=>{
      try{
        const response = await loadSwapi(param)
        setPlanets(response)
      }
      catch(error){
        console.warn(error)
      }
    }
    loadInfo('characters')
  }, [])
  return (
    <div>
    </div>
  )
}
