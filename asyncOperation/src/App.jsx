import React from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decreament, increament } from './store/reducers/counterSlice';


const App = () => {
 const {value}= useSelector(state=>state.counter);
 const dispatch=useDispatch();
  return (
    <div className='app'>
    <h1 className='main-heading'>Count = {value}</h1>

    <div className="btnContainer">
      <button onClick={()=>dispatch(increament())} className="btn">increament</button>
      <button onClick={()=> dispatch(decreament()) } className="btn">decreament</button>
    </div>
    
    </div>
  )
}

export default App