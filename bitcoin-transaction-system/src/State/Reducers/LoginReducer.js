import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../Actions/LoginActions.js'

const initialState = {
    login: {},
    loading: false,
    error: ''
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return { ...state, loading: true }
        case LOGIN_SUCCESS:
            return { ...state, login: action.payload, loading: false }
        case LOGIN_FAILURE:
            return { ...state, error: action.payload, loading: false }
        default:
            return state;
    }
}

export default loginReducer