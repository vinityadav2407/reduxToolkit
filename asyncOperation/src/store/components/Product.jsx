import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { asyncProductData } from '../actions/ProductsAction';


const Product = () => {
  let {products}=useSelector(state=>state.productReducer);
  console.log(products);

 const dispatch=useDispatch();
   useEffect(()=>{
   dispatch( asyncProductData());
   },[])

  return (
    <div className='app'>
    <h1 className='main-heading'>Products List</h1>

    <div className="userContainer">
         
      { products.length!==0?
        products.map((ele)=>{
          return<h3>{ele.title}</h3>
        }):null
      }

    </div>
  

    </div>
  )
}

export default Product

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { asyncProductData } from "../actions/ProductsAction";

// const Product = () => {
//   const dispatch = useDispatch();

//   // ✅ FIXED useSelector
//   const  {products}  = useSelector((state) => state.productReducer);
//   console.log(products);

//   useEffect(() => {
//     dispatch(asyncProductData());
//   }, []);

//   return (
//     <div className="app">
//       <h1 className="main-heading">Products List</h1>

//       <div className="userContainer">
//         {products.length!==0?
//         products.map((ele)=>{
//           return<h3>{ele.title}</h3>
//         }):null
//         }
      
//       </div>
//     </div>
//   );
// };

// export default Product;
