import axios from 'axios';
import { getProducts } from '../reducers/ProductReducer'; 

export const asyncProductData=()=>async(dispatch,getState)=>{
    try{
     let response= await axios.get('https://fakestoreapi.com/products');
    //  console.log(response);
     dispatch(getProducts(response.data));
    }
    catch(error){
        console.log(error);
    }
   
}

