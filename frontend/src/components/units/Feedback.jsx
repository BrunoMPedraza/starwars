import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import GpsFixedSharpIcon from '@mui/icons-material/GpsFixedSharp';
import GpsNotFixedSharpIcon from '@mui/icons-material/GpsNotFixedSharp';
import GpsOffSharpIcon from '@mui/icons-material/GpsOffSharp';
import {  useSelector } from 'react-redux';
import { NOTIFICATIONS_KEY } from '../../redux/peopleRedux/people.reducer';


export const Feedback = () => {
  const [alertTrack,setAlertTrack] = useState([])
  const [display,setDisplay] = useState(0)
  const [counter,setCounter] = useState(0)
  const [color,setColor] = useState('#DBB404')

  const viewAlerts = useSelector((state) => {
    return state[NOTIFICATIONS_KEY];
  });

  const handleColor = (alertType) =>{
    if(alertType==='fail'){
      setColor('#E60909')
    }
    if(alertType==='success'){
      setColor('#41E609')}
   
    setTimeout(() => {
      setColor('#DBB404')
    }, 1500);
  }
  

  useEffect(() => {
    setAlertTrack({...alertTrack,[counter]:viewAlerts})
    setCounter(counter+1)
    handleColor(viewAlerts.type)
  }, [viewAlerts])

  useEffect(()=>{
    console.log(alertTrack)
  },[alertTrack])


  return (
    <motion.footer key='feedback' className='feedback-container' color='primary'>
        <motion.section key='gps' className='gps-icon-container'>
          {display===0 &&
          <GpsFixedSharpIcon onHover={()=>console.log(alertTrack)} onClick={()=>setDisplay(1)} style={{ transition: ".35s", color: color }}/>
          }
          {display===1 &&
          <GpsNotFixedSharpIcon onClick={()=>setDisplay(2)} style={{ transition: ".35s", color: color }}/>
          }
          {display===2 &&
          <GpsOffSharpIcon onClick={()=>setDisplay(0)} color={'primary'}/>
          }
        </motion.section>
        
    </motion.footer>
  )
}
