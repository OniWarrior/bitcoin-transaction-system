import axiosWithAuth from '../../Components/Utils/AxiosWithAus'

export const MANAGER_START = 'MANAGER_START'
export const MANAGER_SUCCESS = 'MANAGER_SUCCESS'
export const MANAGER_FAILURE = 'MANAGER_FAILURE'


// api call to retrieve total daily transactions for the manager
export const getTotalDailyTransactions = (date) => (dispatch) => {

    dispatch({ type: MANAGER_START })
    axiosWithAuth.get('/api/user/total-daily-transactions', date)
        .then(response => {
            dispatch({ type: MANAGER_START, payload: response.data })


        })
        .catch(err => {
            dispatch({ type: MANAGER_FAILURE, payload: err.message })
        })



}


// api call to retrieve total weekly transactions for the manager
export const getTotalWeeklyTransactions = (startDate, endDate) => (dispatch) => {
    dispatch({ type: MANAGER_START })
    axiosWithAuth.get('/api/users/total-weekly-transactions', startDate, endDate)
        .then(response => {
            dispatch({ type: MANAGER_SUCCESS, payload: response.data })
        })
        .catch(err => {
            dispatch({ type: MANAGER_FAILURE, payload: err.message })
        })
}


// api call to retrieve total monthly transactions for the manager
export const getTotalMonthlyTransactions = (month, year) => (dispatch) => {
    dispatch({ type: MANAGER_START })
    axiosWithAuth.get('/api/users/total-monthly-transactions', month, year)
        .then(response => {
            dispatch({ type: MANAGER_SUCCESS, payload: response.data })
        })
        .catch(err => {
            dispatch({ type: MANAGER_FAILURE, payload: err.message })
        })
}