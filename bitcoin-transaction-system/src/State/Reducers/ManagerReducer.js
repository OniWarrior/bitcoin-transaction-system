import {
    MANAGER_START,
    MANAGER_SUCCESS,
    MANAGER_FAILURE
} from '../Actions/ManagerActions'

const initialState = {
    totalTransactions: '',
    loading: false,
    error: ''

}


const managerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "MANAGER_START":
            return { ...state, loading: true }
        case 'MANAGER_SUCCESS':
            return { ...state, totalTransactions: action.payload, loading: false }
        case 'MANAGER_FAILURE':
            return { ...state, error: action.payload, loading: false }
        default:
            return state

    }

}

export default managerReducer