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



export const bitcoinReducer = (state = initialState, action) => {
    switch (action.type) {
        case BITCOIN_START:
            return { ...state, loading: true }
        case BITCOIN_SUCCESS:
            return { ...state, bitcoin: action.payload, loading: false }
        case BITCOIN_FAILURE:
            return { ...state, error: action.payload, loading: false }
        default:
            return state
    }
}