import axiosWithAuth from '../../Components/Utils/AxiosWithAuth'

export const CLIENT_START = 'CLIENT_START'
export const CLIENT_SUCCESS = 'CLIENT_SUCCESS'
export const CLIENT_FAILURE = 'CLIENT_FAILURE'

// api call to retrieve bitcoin wallet of the client
export const getBitcoinWallet = (navigate) => (dispatch) => {
    dispatch({ type: CLIENT_START })
    axiosWithAuth().get('/api/users/BitcoinWallet')
        .then(response => {
            dispatch({ type: CLIENT_SUCCESS, payload: response.data })
            navigate('ClientDashboard/BitcoinWallet')

        })
        .catch(err => {
            dispatch({ type: CLIENT_FAILURE, payload: err.message })
        })

}

// api call to retrieve past orders of the client
export const getPastOrders = (navigate) => (dispatch) => {
    dispatch({ type: CLIENT_START })
    axiosWithAuth().get('/api/users/Orders')
        .then(response => {
            dispatch({ type: CLIENT_SUCCESS, payload: response.data })
            navigate('ClientDashboard/Orders')
        })
        .catch(err => {
            dispatch({ type: CLIENT_FAILURE, payload: err.message })
        })
}

// api call to post a buy bitcoin order
export const postBuyBitcoin = (order, navigate) => (dispatch) => {
    dispatch({ type: CLIENT_START })
    axiosWithAuth().post('/api/users/BuyBitcoin', order)
        .then(response => {
            dispatch({ type: CLIENT_SUCCESS, payload: response.data })
            navigate('/ClientDashboard')
        })
        .catch(err => {
            dispatch({ type: CLIENT_FAILURE, payload: err.message })
        })

}

// api call to post a sell bitcoin order
export const postSellBitcoin = (order, navigate) => (dispatch) => {
    dispatch({ type: CLIENT_START })
    axiosWithAuth().post('/api/users/SellBitcoin', order)
        .then(response => {
            dispatch({ type: CLIENT_SUCCESS, payload: response.data })
            navigate('/ClientDashboard')
        })
        .catch(err => {
            dispatch({ type: CLIENT_FAILURE, payload: err.message })
        })
}