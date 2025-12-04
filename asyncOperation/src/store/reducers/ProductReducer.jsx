import {createSlice} from '@reduxjs/toolkit'

const initialState=({
    prducts:[],
})

export const ProductSlice=createSlice({
    name:'products',
    initialState,
    reducers:{

    }
})
export const {}=ProductSlice.actions;
export default ProductSlice.reducer;