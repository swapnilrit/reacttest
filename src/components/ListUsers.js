import React,{useEffect,useState} from 'react';

import {useSelector,useDispatch} from "react-redux";

import fetchUserData from '../usersStore/userActions';



function ListUsers(props) {
  const user = useSelector(state=>state.user); 
  const [message,setMessage]= useState("swapnil"); 
  const dispatch= useDispatch();  

   useEffect(() => {    
        dispatch(fetchUserData());
   }, [dispatch])

    return (
        <div>
            {user.loading ? "Loading" :user.users.map((name,index)=>{
                return <div key={index}>{name}</div>
            })}
            {user.error}
            {message}
            <button onClick={()=>{setMessage("rohit")}}> ChnageMessage </button>
        </div>
    )
}



export default ListUsers;
