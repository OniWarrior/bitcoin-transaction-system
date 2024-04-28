import axiosWithAuth from "../../Components/Utils/AxiosWithAuth";

export const TRADER_START = 'TRADER_START'
export const TRADER_SUCCESS = 'TRADER_SUCCESS'
export const TRADER_FAILURE = 'TRADER_FAILURE'





// api call to retrieve all records in the cancel log table
export const getCancelLog = (navigate) => (dispatch) => {
    dispatch({ type: TRADER_START })
    axiosWithAuth().get('/api/users/cancel-log')
        .then(response => {
            dispatch({ type: TRADER_SUCCESS, payload: response.data })
            navigate('/TraderDashboard/Cancel-Log')

        })
        .catch(err => {
            dispatch({ type: TRADER_FAILURE, payload: err.message })
        })

}


// api call to retrieve a searched client
export const getClient = (client, navigate) => (dispatch) => {
    dispatch({ type: TRADER_START })
    axiosWithAuth().post('/api/users/clients/search', client)
        .then(response => {
            dispatch({ type: TRADER_SUCCESS, payload: response.data })
            navigate('/TraderDashboard/TraderClientSearch/clients/search')
        })
        .catch(err => {
            dispatch({ type: TRADER_FAILURE, payload: err.message })
        })
}
