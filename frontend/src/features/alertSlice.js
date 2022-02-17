import {createSlice} from '@reduxjs/toolkit'

export const alertSlice = createSlice({
    name: 'alert',
    initialState:{
        alerts:[]
    },
    reducers:{
        // setAlert: (state,action)=>{
        //     state.alert=action.payload
        // }
        createAlert: (state, action) => {
            state.alerts.push({
              message: action.payload.message,
              type: action.payload.type
            });
        }
    }
})
export const actions = alertSlice.actions;
// export const getAlert = (state) =>state.alert
export default alertSlice.reducer;

// HOW TO CALL AN ALERT:
// const dispatch = useDispatch();
// dispatch(
//     setAlert({
//     message:'MESSAGE',
//     type: 'success'
//     })
//   )