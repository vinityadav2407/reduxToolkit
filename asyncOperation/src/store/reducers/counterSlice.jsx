import {createSlice} from '@reduxjs/toolkit'


const initialState={
    value:0,
}

export const counterLogic= createSlice({
    name:'counter',
    initialState,
    reducers:{
         increament:(state)=>{
            state.value+=1;
         },
         decreament:(state)=>{
            state.value-=1;
         }
    }
})

export const { increament,decreament}=counterLogic.actions;
export default counterLogic.reducer;
