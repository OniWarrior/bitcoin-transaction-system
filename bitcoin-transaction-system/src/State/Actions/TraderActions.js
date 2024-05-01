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





// api call to post a trader buy bitcoin transaction on behalf of a client
export const postTraderBuyBitcoinTransaction = (client, navigate) => (dispatch) => {

    dispatch({ type: TRADER_START })
    axiosWithAuth().post('/api/users/TraderBuyBitcoin', client)
        .then(response => {
            dispatch({ type: TRADER_SUCCESS, payload: response.data })
            navigate('/TraderDashboard')
            // Extracting the data from response
            const { message, amount } = response.data;
            alert(`message: ${message}\namount: ${amount}`);
        })
        .catch(err => {
            dispatch({ type: TRADER_FAILURE, payload: err.message })
        })
}


// api call to post a trader sell bitcoin transaction on behalf of a client
export const postTraderSellBitcoinTransaction = (client, navigate) => (dispatch) => {
    dispatch({ type: TRADER_START })
    axiosWithAuth().post('/api/users/TraderSellBitcoin', client)
        .then(response => {
            dispatch({ type: TRADER_SUCCESS, payload: response.data })
            navigate('/TraderDashboard')
            // Extracting the data from response
            const { message, amount } = response.data;
            alert(`message: ${message}\namount: ${amount}`);
        })
        .catch(err => {
            dispatch({ type: TRADER_FAILURE, payload: err.message })
        })
}



// api call to cancel an order or transaction
export const cancelTransferOrTransaction = (orderOrTransfer, navigate) => (dispatch) => {

    dispatch({ type: TRADER_START })
    axiosWithAuth().put('/api/users/CancelPaymentOrTransaction', orderOrTransfer)
        .then(response => {
            dispatch({ type: TRADER_SUCCESS, payload: response.data })
            navigate('/TraderDashboard')
            alert('Transaction/Order successfully cancelled')
        })
        .catch(err => {
            dispatch({ type: TRADER_FAILURE, payload: err.message })
        })
}
