import { combineReducers } from "redux";
import signupReducer from "./SignupReducer";
import loginReducer from "./LoginReducer";

const rootReducer = combineReducers({
    signupReducer,
    loginReducer
})

export default rootReducer