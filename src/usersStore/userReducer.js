
import {fetch_users,fetch_user_success,fetch_user_error} from "./userType"
const initialState={
    loading:false,
    users:[],
    error:""
}
const userReducer=(state=initialState,action)=>{

    switch(action.type){

     case fetch_users:
     return {
         ...state,
         loading:true,
     }
     case fetch_user_success:

    return {
        ...state,
        loading:false,
        users:action.payload,
        error:""
    }
    case fetch_user_error:

    return  {
        ...state,
        loading:false,
        users:[],
        error:action.payload
    }
    default:
    return state;

    }
}

export default userReducer;