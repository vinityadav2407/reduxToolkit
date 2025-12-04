import {configureStore} from '@reduxjs/toolkit';
import conunterReducer from './reducers/counterSlice';
import  userReducer  from './reducers/UserReducer';
import  productReducer  from './reducers/ProductReducer';

export const store=configureStore({
    reducer:{ 
        counter:conunterReducer,
        userReducer:userReducer,
    },
})