
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import UserComponent from './store/components/UserComponet'
import Product from './store/components/Product'

import { Link, Route, Routes } from 'react-router-dom'
import Home from './store/components/Home'

const App = () => {
 const dispatch=useDispatch();

  return (
    <div  style={{
      width:'100%',
      height:'100%',
      }}>
           <nav  style={{
               display:'flex',
               padding:'12px 20px',
               gap:'50px',
               alignItems:'center',
               justifyContent:'center',
               background:'lightgrey'
           }}>
            
            <Link to='/'>Home</Link>
            <Link to='/users'>Users</Link>
            <Link to='/products'>Producs</Link>
           </nav>
        
            <Routes>
               <Route path='/' element={<Home/>}/>
                 <Route path='/users' element={<UserComponent/>}/>
                <Route path='/products' element={<Product/>}/>
            </Routes>
    </div>
  )
}

export default App