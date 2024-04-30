<<<<<<< Updated upstream
import {
    BITCOIN_START,
    BITCOIN_SUCCESS,
    BITCOIN_FAILURE
} from '../Actions/BitcoinActions'

const initialState = {
    bitcoin: {},
    loading: '',
    error: ''
}

export const bitcoinReducer = (state=initialState,action)=>{
=======
import{
    BITCOIN_START,
    BITCOIN_SUCCESS,
    BITCOIN_FAILURE
}from '../Actions/BitcoinActions'

const initialState={
    bitcoin:{},
    loading: '',
    error:''
}



export const bitcoinReducer=(state=initialState,action)=>{
>>>>>>> Stashed changes
    switch(action.type){
        case BITCOIN_START:
            return{...state,loading:true}
        case BITCOIN_SUCCESS:
            return{...state,bitcoin:action.payload,loading:false}
        case BITCOIN_FAILURE:
<<<<<<< Updated upstream
            return{...state,error:action.payload,loading:false}
        default:
            return state
=======
            return{...state,error:action.payload, loading:false}
        default:
         return state   
>>>>>>> Stashed changes
    }
}