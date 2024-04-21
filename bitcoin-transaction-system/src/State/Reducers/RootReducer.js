import { combineReducers } from "redux";
import signupReducer from "./SignupReducer";
import loginReducer from "./LoginReducer";
import managerReducer from "./ManagerReducer";

const rootReducer = combineReducers({
    signupReducer,
    loginReducer,
    managerReducer
})

export default rootReducer