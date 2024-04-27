import axios from 'axios'
export const BITCOIN_START = 'BITCOIN_START'
export const BITCOIN_SUCCESS = 'BITCOIN_SUCCESS'
export const BITCOIN_FAILURE = 'BITCOIN_FAILURE'



// third party api call to fetch bitcoin and other cryptocurrency info for Client
export const fetchLatestCryptocurrencyForClient = (navigate) => (dispatch) => {
    dispatch({ type: BITCOIN_START });

    const config = {
        headers: {
            'X-CMC_PRO_API_KEY': 'a6f492ca-a732-4331-976f-e9a31e270372',
        }
    };

    axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', config)
        .then(response => {
            dispatch({ type: BITCOIN_SUCCESS, payload: response.data });

            navigate('/ClientDashboard/BuyBitcoin')



        })
        .catch(error => {
            dispatch({ type: BITCOIN_FAILURE, payload: error.message });
        });
}



export const fetchLatestCryptocurrencyForTrader = (navigate, clientId) => (dispatch) => {
    dispatch({ type: BITCOIN_START });

    const config = {
        headers: {
            'X-CMC_PRO_API_KEY': 'a6f492ca-a732-4331-976f-e9a31e270372',
        }
    };

    axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', config)
        .then(response => {
            dispatch({ type: BITCOIN_SUCCESS, payload: response.data });
            navigate(`/TraderClientSearch/clients/${clientId}/TraderBuyBitcoin`)



        })
        .catch(error => {
            dispatch({ type: BITCOIN_FAILURE, payload: error.message });
        });
}