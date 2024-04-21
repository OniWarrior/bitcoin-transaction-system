import axios from "axios";

export const MANAGER_START = 'MANAGER_START'
export const MANAGER_SUCCESS = 'MANAGER_SUCCESS'
export const MANAGER_FAILURE = 'MANAGER_FAILURE'

export const getTotalDailyTransactions = (date, navigate) => (dispatch) => {

    dispatch({ type: MANAGER_START })
    axios.get('/api/user/total-daily-transactions', date)
        .then(response => {
            dispatch({ type: MANAGER_START, payload: response.data })


        })
        .catch(err => {
            dispatch({ type: MANAGER_FAILURE, payload: err.message })
        })



}