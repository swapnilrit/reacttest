import {fetch_users,fetch_user_success,fetch_user_error} from "./userType";

import axios from "axios";

const fetchUser=()=>{
    return {
        type:fetch_users
    }
}

const fetchUserSuccess=(sucessdata)=>{
    return{
        type:fetch_user_success,
        payload: sucessdata   
    }
}

const fetchUserError=(error)=>{
      return{
          type:fetch_user_error,
          payload:error
      }
}


const fetchUserData=()=>{

    return function(dispatch){
      dispatch(fetchUser())

      axios.get("https://jsonplaceholder.typicode.com/users")
           .then((response)=>{
             const users= response.data.map((user)=>user.name);
             dispatch(fetchUserSuccess(users));
           })
           .catch(error=>{
            dispatch(fetchUserError(error))
           })
    }
}

export default fetchUserData;