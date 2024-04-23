import axiosWithAuth from '../../Components/Utils/AxiosWithAuth'

export const MANAGER_START = 'MANAGER_START'
export const MANAGER_SUCCESS = 'MANAGER_SUCCESS'
export const MANAGER_FAILURE = 'MANAGER_FAILURE'


// api call to retrieve total daily transactions for the manager
export const getTotalDailyTransactions = (date, navigate) => (dispatch) => {

    dispatch({ type: MANAGER_START })
    axiosWithAuth().post('api/users/daily', date)
        .then(response => {
            dispatch({ type: MANAGER_SUCCESS, payload: response.data })
            navigate('/ManagerDashboard/daily')


        })
        .catch(err => {
            dispatch({ type: MANAGER_FAILURE, payload: err.message })
        })



}


// api call to retrieve total weekly transactions for the manager
export const getTotalWeeklyTransactions = (date, navigate) => (dispatch) => {


    dispatch({ type: MANAGER_START })
    axiosWithAuth().post('/api/users/weekly', {
        start_day: date.start_day,
        start_month: date.start_month,
        start_year: date.start_year,
        end_day: date.end_day,
        end_month: date.end_month,
        end_year: date.end_year
    })
        .then(response => {
            dispatch({ type: MANAGER_SUCCESS, payload: response.data })
            navigate('/ManagerDashboard/weekly')
        })
        .catch(err => {
            dispatch({ type: MANAGER_FAILURE, payload: err.message })
        })
}


// api call to retrieve total monthly transactions for the manager
export const getTotalMonthlyTransactions = (date, navigate) => (dispatch) => {

    dispatch({ type: MANAGER_START })
    axiosWithAuth().post('/api/users/monthly', date)
        .then(response => {
            dispatch({ type: MANAGER_SUCCESS, payload: response.data })
            navigate('/ManagerDashboard/monthly')
        })
        .catch(err => {
            dispatch({ type: MANAGER_FAILURE, payload: err.message })
        })
}