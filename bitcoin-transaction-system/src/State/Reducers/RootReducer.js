import { combineReducers } from "redux";
import signupReducer from "./SignupReducer";
import loginReducer from "./LoginReducer";
import managerReducer from "./ManagerReducer";
import clientReducer from "./ClientReducer";
<<<<<<< Updated upstream
import { TraderReducer, traderReducer } from "./TraderReducer";
=======
>>>>>>> Stashed changes
import { bitcoinReducer } from "./BitcoinReducer";

const rootReducer = combineReducers({
    signupReducer,
    loginReducer,
    managerReducer,
    clientReducer,
    bitcoinReducer,
    traderReducer
})

export default rootReducer