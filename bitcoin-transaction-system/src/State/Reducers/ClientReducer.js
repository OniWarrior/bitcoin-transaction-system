import {
    CLIENT_START,
    CLIENT_SUCCESS,
    CLIENT_FAILURE
} from '../Actions/ClientActions'


const initialState={
    client:{},
    loading:'',
    error:''
}

const clientReducer=(state = initialState, action)=>{
    switch(action.type){
        case CLIENT_START:
            return{...state, loading: true}
        case CLIENT_SUCCESS:
            return{...state, client: action.payload, loading: false}
        case CLIENT_FAILURE:
            return{...state, error: action.payload, loading: false}
        default:
            return state;
    }
}

export default clientReducer
