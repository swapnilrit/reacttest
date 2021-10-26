import {combineReducers} from "redux";

import counterReducer from "./counterStore/counterReducer";
import userReducer from "./usersStore/userReducer";

export const rootReducer = combineReducers({
 counter:counterReducer,
 user:userReducer
});