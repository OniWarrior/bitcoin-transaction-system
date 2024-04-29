import axiosWithAuth from "../../Components/Utils/AxiosWithAuth"
export const BITCOIN_START = 'BITCOIN_START'
export const BITCOIN_SUCCESS = 'BITCOIN_SUCCESS'
export const BITCOIN_FAILURE = 'BITCOIN_FAILURE'



// third party api call to fetch bitcoin and other cryptocurrency info for Client
export const fetchLatestCryptocurrencyForClientBuy = (navigate) => (dispatch) => {
    dispatch({ type: BITCOIN_START });
    axiosWithAuth().get('/api/users/latest',)
        .then(response => {
            dispatch({ type: BITCOIN_SUCCESS, payload: response.data });
            navigate('/ClientDashboard/BuyBitcoin')
        })
        .catch(error => {
            dispatch({ type: BITCOIN_FAILURE, payload: error.message });
        });
}

export const fetchLatestCryptocurrencyForClientSell = (navigate) => (dispatch) => {
    dispatch({ type: BITCOIN_START });
    axiosWithAuth().get('/api/users/latest',)
        .then(response => {
            dispatch({ type: BITCOIN_SUCCESS, payload: response.data });
            navigate('/ClientDashboard/SellBitcoin')
        })
        .catch(error => {
            dispatch({ type: BITCOIN_FAILURE, payload: error.message });
        });
}


// api call to retrieve the current bitcoin price for trader
export const fetchLatestCryptocurrencyForTraderBuy = (navigate, clientId) => (dispatch) => {
    dispatch({ type: BITCOIN_START });
    axiosWithAuth().get('/api/users/latest',)
        .then(response => {
            dispatch({ type: BITCOIN_SUCCESS, payload: response.data });
            navigate(`/TraderDashboard/TraderClientSearch/clients/${clientId}/TraderBuyBitcoin`)
        })
        .catch(error => {
            dispatch({ type: BITCOIN_FAILURE, payload: error.message });
        });
}

// api call to retrieve the current bitcoin price for trader
export const fetchLatestCryptocurrencyForTraderSell = (navigate, clientId) => (dispatch) => {
    dispatch({ type: BITCOIN_START });
    axiosWithAuth().get('/api/users/latest',)
        .then(response => {
            dispatch({ type: BITCOIN_SUCCESS, payload: response.data });
            navigate(`/TraderDashboard/TraderClientSearch/clients/${clientId}/TraderSellBitcoin`)
        })
        .catch(error => {
            dispatch({ type: BITCOIN_FAILURE, payload: error.message });
        });
}