import { combineReducers } from "redux";
import signupReducer from "./SignupReducer";
import loginReducer from "./LoginReducer";
import managerReducer from "./ManagerReducer";
import clientReducer from "./ClientReducer";
import { bitcoinReducer } from "./BitcoinReducer";

const rootReducer = combineReducers({
    signupReducer,
    loginReducer,
    managerReducer,
    clientReducer,
    bitcoinReducer
})

export default rootReducer