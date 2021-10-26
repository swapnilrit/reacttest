
import {increment_counter} from "./counterTypes"

const initialState={
    count:0
}


const counterReducer=(state=initialState,action)=>{


    switch(action.type){
    
        case increment_counter:
        return {
            ...state,
            count:state.count+action.payload
        }
        default:
        return state;
    }

}

export default counterReducer;