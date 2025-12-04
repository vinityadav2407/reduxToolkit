import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { decreament, increament } from '../reducers/counterSlice';
const counterComponet = () => {

 const {value}= useSelector(state=>state.counter);
 const dispatch=useDispatch();

  return (
    <div>

          <div className='app'>
            <h1 className='main-heading'>Count = {value}</h1>
        
            <div className="btnContainer">
              <button onClick={()=>dispatch(increament())} className="btn">increament</button>
              <button onClick={()=> dispatch(decreament()) } className="btn">decreament</button>
            </div>
            
            </div>
    </div>
  )
}

export default counterComponet