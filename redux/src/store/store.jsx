import { configureStore } from "@reduxjs/toolkit";
import  counterLogic  from "../store/reducers/counterSlice";

export const store=configureStore({
    reducer:{
        counter:counterLogic,
    }
})