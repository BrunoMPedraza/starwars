import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadData } from '../../../redux/peopleRedux/people.actions'
import { FunnyLoader } from '../../units/FunnyLoader'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { PeoplePerson } from './PeoplePerson'


export const People = () => {
  const [isLoading,setIsLoading] = useState(false)
  const [savedArray,setSavedArray] = useState([])
  const [endpointPage,setEndpointPage] = useState (1)
  const [characterAmount,setCharacterAmount] = useState("--");
  let dispatch= useDispatch()
  const fetchedData = useSelector(state => state.dataSwapi.data);
  async function savePeople(page){
    setIsLoading(true)
    try{
      dispatch( loadData('people',page))
      setIsLoading(false)
    }
    catch(error)
    {
      console.error(error)
      setIsLoading(false)
    }
  }
  
  useEffect(() => {
    setIsLoading(true)
    try{
    savePeople(1)
    setIsLoading(false)
    }
    catch(error){
      console.error(error)
    }
  }, [dispatch])
  
  useEffect(() => {
    setSavedArray({...savedArray,[endpointPage]:fetchedData.results})
    // can be unhardcoded
    setCharacterAmount(fetchedData.count)
  }, [fetchedData])

  useEffect(() => {
    console.log(isLoading)
    console.log('Saved array: ',savedArray)
  }, [savedArray])


  const validateEndPointLimit = (target) =>{
    // THIS NEEDS TO BE IMPROVED, I NEED TO CHECK IF THE NEXT ENDPOINT EQUALS ERROR THEN STOP THIS AND MARK THAT AS A LIMIT
    if(target<0)
    setEndpointPage(10)
    if(target>10)
    setEndpointPage(0)
    if(target>0 && target<10)
    setEndpointPage(target)
  }
  useEffect(()=>{
    savePeople(endpointPage)
  },
  [endpointPage])
  

  const requestOtherPage = (e,page) =>{
  }
  
  
  return (
    <motion.div className='option-container'>
      {isLoading ? <FunnyLoader/> :
        <>
          {/* {savedArray &&
            <>
              {savedArray.map((item,index)=>{
                return <PeoplePerson index={index} item={item} />
              })}
              <PeoplePerson />
            </>
             
          } */}
          <ArrowBackIosIcon onClick={(e)=>validateEndPointLimit(endpointPage-1)}/>VOLVER || AVANZAR
          <ArrowForwardIosIcon onClick={(e)=>validateEndPointLimit(endpointPage+1)}/>
        </>
      }
    </motion.div>
  )
}
