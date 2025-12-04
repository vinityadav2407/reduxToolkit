import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../reducers/UserReducer';


const UserComponent = () => {
 const {users}= useSelector(state=>state.userReducer);
 const dispatch=useDispatch();

  const deleteHandler=(index)=>{
    console.log(index);
    dispatch(deleteUser(index));
  }

  return (
    <div className='app'>
    <h1 className='main-heading'>User List</h1>

    <div className="userContainer">
      {users.map((ele,index)=>{
        return (
        <div className="userData" key={index}>
      
                <h3 >{ele.name} 
                  <button onClick={()=>deleteHandler(index)} 
                  style={{ 
                     borderRadius:'8px',
                     marginLeft:'20px',
                     borderWidth:'2px',
                     borderColor:'red',
                     color:'#1A1A1A',
                     backgroundColor:'#f96f6fff',
                     fontWeight:'500',
                    }}
                  >Delete</button>  
                </h3>
                
        </div>)
       
      })}
    </div>
  

    </div>
  )
}

export default UserComponent;