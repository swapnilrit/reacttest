
import {increment_counter} from "./counterTypes";

const incrementCounter=(value)=>{

    return {
        type:increment_counter,
        payload:value
    }
 }


export default incrementCounter;