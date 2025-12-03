import React from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decreament, increament, increamentByAmount, incrementAsync } from './store/reducers/counterSlice';

const App = () => {
 let {value}= useSelector(state=>state.counter);
 let dispatch=useDispatch() // to call the actions we frist need to dispatch them bez this is the redux way 
 // we can't dirctly called the action they are not normal functions/method

  return (
    <div className='app' >
      <h1 className='mainHeading' >Count = {value}</h1>
      <div className="btnContainer">
        <button className='btn' onClick={() => dispatch(increament())}>increament+1</button>
        <button className='btn' onClick={() => dispatch(decreament())}>decreament-1</button>
        <button className='btn'  onClick={() => dispatch(incrementAsync(5))}>increamentBy+5</button>


      </div>
    </div>
  )
}

export default App