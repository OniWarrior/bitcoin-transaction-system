import { combineReducers } from "redux";
import signupReducer from "./SignupReducer";
import loginReducer from "./LoginReducer";
import managerReducer from "./ManagerReducer";
import clientReducer from "./ClientReducer";
import { bitcoinReducer } from "./BitcoinReducer";
import { traderReducer } from "./TraderReducer";

const rootReducer = combineReducers({
    signupReducer,
    loginReducer,
    managerReducer,
    clientReducer,
    bitcoinReducer,
    traderReducer
})

export default rootReducer