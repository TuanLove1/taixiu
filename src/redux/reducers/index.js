import { combineReducers } from "redux";
import userReducer from "./users/userReducer";
import xucxacReducer from "./xucxac/xucxacReducer";
const rootReducers = combineReducers({
    //key : value
    userReducer,
    xucxacReducer:xucxacReducer
});
export default rootReducers; 