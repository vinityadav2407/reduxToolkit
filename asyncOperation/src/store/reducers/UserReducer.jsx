import {createSlice} from '@reduxjs/toolkit'

const initialState={
    users: [
  {
    id: 1,
    name: "Amit Sharma",
    email: "amit.sharma@example.com",
    age: 24,
    city: "Delhi"
  },
  {
    id: 2,
    name: "Riya Verma",
    email: "riya.verma@example.com",
    age: 22,
    city: "Mumbai"
  },
  {
    id: 3,
    name: "Sahil Gupta",
    email: "sahil.gupta@example.com",
    age: 27,
    city: "Bangalore"
  },
  {
    id: 4,
    name: "Priya Singh",
    email: "priya.singh@example.com",
    age: 25,
    city: "Pune"
  },
  {
    id: 5,
    name: "Rohan Mehta",
    email: "rohan.mehta@example.com",
    age: 26,
    city: "Hyderabad"
  },
  {
    id: 6,
    name: "Neha Kumari",
    email: "neha.kumari@example.com",
    age: 23,
    city: "Noida"
  },
  {
    id: 7,
    name: "Vikas Yadav",
    email: "vikas.yadav@example.com",
    age: 28,
    city: "Gurgaon"
  },
  {
    id: 8,
    name: "Kriti Agarwal",
    email: "kriti.agarwal@example.com",
    age: 24,
    city: "Chennai"
  },
  {
    id: 9,
    name: "Deepak Raj",
    email: "deepak.raj@example.com",
    age: 29,
    city: "Kolkata"
  },
  {
    id: 10,
    name: "Sneha Pathak",
    email: "sneha.pathak@example.com",
    age: 21,
    city: "Ahmedabad"
  }
]
}

export const userSlice=createSlice({
     name:'users',
     initialState,
     reducers:{
        deleteUser:(state,action)=>{
            state.users.splice(action.payload,1);
        }
     }
})

export default userSlice.reducer;

export const {deleteUser}=userSlice.actions;