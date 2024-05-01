import {
    ORDERS_START,
    ORDERS_SUCCESS,
    ORDERS_FAILURE
} from '../Actions/OrdersActions.js'

const initialState = {
    orders: {},
    loading: '',
    error: ''
}


export const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDERS_START:
            return { ...state, loading: true }
        case ORDERS_SUCCESS:
            return { ...state, orders: action.payload, loading: false }
        case ORDERS_FAILURE:
            return { ...state, error: action.payload, loading: false }
        default:
            return state;
    }

}