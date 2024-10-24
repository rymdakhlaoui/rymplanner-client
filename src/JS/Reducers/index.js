import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import TaskReducer from "./TaskReducer";


const rootReducer = combineReducers({TaskReducer, AuthReducer})

export default rootReducer