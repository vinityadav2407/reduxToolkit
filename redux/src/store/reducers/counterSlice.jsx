import { createSlice } from "@reduxjs/toolkit";

const initialState={    // the name of initialState should be always same otherwise error accoure
    value:0,
}

// Bellow is the all the actions or the synchrouns to work on Asynch opertion we need to handle it other way
// we need to make wrapper actions(a higher order function) 
export const counterLogic = createSlice({
    name:'counter',
    initialState,
    reducers:{  // we write all the actions  inside the reducers it's not normal functions/method
        increament:(state)=>{
            state.value+=1;
        },
         decreament:(state)=>{
            state.value-=1;
        },
        increamentByAmount:(state,action)=>{
            state.value+=action.payload;
        }
    }
})

export const {increament,decreament,increamentByAmount}=counterLogic.actions;
// we can't perform the Asynchronus operation directly into the Redux 
// we need to make wrapper actions(a higher order function) 
// so we first finish the async work (complete the asyc work) then we call the our  Synchronous Action 
export const incrementAsync=(amount)=>(dispatch)=>{
    setTimeout(() => {
       dispatch( increamentByAmount(amount));// now here asyc work done and we call it
    }, 2000);
}

export default counterLogic.reducer;
