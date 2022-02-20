import React from 'react'
import { useSelector } from 'react-redux';
import { LOGGED_KEY } from '../redux/peopleRedux/people.reducer';
import {RestrictedError,Deathstar} from '../components/logged/'

export const Data = () => {
    
    const viewData = useSelector((state) => {
      return state[LOGGED_KEY];
    });


    
  return (
    <div>
      {viewData.isLogged ?
        <Deathstar/>
        :
        <RestrictedError/>
      }
    </div>
  )
}
