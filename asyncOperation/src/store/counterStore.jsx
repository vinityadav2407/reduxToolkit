import {configureStore} from '@reduxjs/toolkit';
import conunterReducer from './reducers/counterSlice';

export const store=configureStore({
    reducer:{ 
        counter:conunterReducer,
    },
})