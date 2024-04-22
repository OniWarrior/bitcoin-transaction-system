import axiosWithAuth from '../../Components/Utils/AxiosWithAus'

export const MANAGER_START = 'MANAGER_START'
export const MANAGER_SUCCESS = 'MANAGER_SUCCESS'
export const MANAGER_FAILURE = 'MANAGER_FAILURE'


// api call to retrieve total daily transactions for the manager
export const getTotalDailyTransactions = (date, navigate) => (dispatch) => {

    dispatch({ type: MANAGER_START })
    axiosWithAuth.get('/api/user/total-daily-transactions', date)
        .then(response => {
            dispatch({ type: MANAGER_START, payload: response.data })
            navigate('/total-daily-transactions')


        })
        .catch(err => {
            dispatch({ type: MANAGER_FAILURE, payload: err.message })
        })



}


// api call to retrieve total weekly transactions for the manager
export const getTotalWeeklyTransactions = (date, navigate) => (dispatch) => {
    dispatch({ type: MANAGER_START })
    axiosWithAuth.get('/api/users/total-weekly-transactions', date)
        .then(response => {
            dispatch({ type: MANAGER_SUCCESS, payload: response.data })
            navigate('/total-weekly-transactions')
        })
        .catch(err => {
            dispatch({ type: MANAGER_FAILURE, payload: err.message })
        })
}


// api call to retrieve total monthly transactions for the manager
export const getTotalMonthlyTransactions = (date, navigate) => (dispatch) => {
    dispatch({ type: MANAGER_START })
    axiosWithAuth.get('/api/users/total-monthly-transactions', date)
        .then(response => {
            dispatch({ type: MANAGER_SUCCESS, payload: response.data })
            navigate('total-monthly-transactions')
        })
        .catch(err => {
            dispatch({ type: MANAGER_FAILURE, payload: err.message })
        })
}