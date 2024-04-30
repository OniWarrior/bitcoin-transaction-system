import { combineReducers } from "redux";
import signupReducer from "./SignupReducer";
import loginReducer from "./LoginReducer";
import managerReducer from "./ManagerReducer";
import clientReducer from "./ClientReducer";
import { TraderReducer, traderReducer } from "./TraderReducer";

const rootReducer = combineReducers({
    signupReducer,
    loginReducer,
    managerReducer,
    clientReducer,
    traderReducer
})

export default rootReducer