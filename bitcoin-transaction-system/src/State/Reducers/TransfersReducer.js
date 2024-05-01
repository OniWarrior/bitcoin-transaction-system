import {
    TRANSFERS_START,
    TRANSFERS_SUCCESS,
    TRANSFERS_FAILURE
} from '../Actions/TransfersActions.js'

const initialState = {
    transfers: {},
    loading: '',
    error: ''
}


export const transfersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TRANSFERS_START:
            return { ...state, loading: true }
        case TRANSFERS_SUCCESS:
            return { ...state, transfers: action.payload, loading: false }
        case TRANSFERS_FAILURE:
            return { ...state, error: action.payload, loading: false }
        default:
            return state;
    }

}