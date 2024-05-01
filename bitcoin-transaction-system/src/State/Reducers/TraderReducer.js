import{
    TRADER_START,
    TRADER_SUCCESS,
    TRADER_FAILURE
}   from '../Actions/TraderActions.js'

const initialState = {
    trader: {},
    loading:'',
    error:''
}

export const traderReducer = (state = initialState,action)=>{
    switch(action.type){
        case TRADER_START:
            return{...state, loading:true}
        case TRADER_SUCCESS:
            return{...state,trader: action.payload, loading: false}
        case TRADER_FAILURE:
            return{...state,error: action.payload, loading: false}
        default:
            return state;
    }
}

export default traderReducer

