import axiosWithAuth from '../../Components/Utils/AxiosWithAuth'
export const BITCOIN_START='BITCOIN_START'
export const BITCOIN_SUCCESS='BITCOIN_SUCCESS'
export const BITCOIN_FAILURE='BITCOIN_FAILURE'

export const fetchLatestCryptocurrency = () => (dispatch) => {
    dispatch({ type: BITCOIN_START });

    const config = {
        headers:{
            'X-CMC_PRO_API_KEY': 'a6f492ca-a732-4331-976f-e9a31e270372',
        }
    };
    axiosWithAuth().get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', config)
        .then(response => {
            dispatch({type: BITCOIN_SUCCESS, payload: response.data });
        })
        .catch(error => {
            dispatch({type: BITCOIN_FAILURE, payload: error.message });
        });

}

export const fetchLatestCryptoCurrencyForClient=(navigate)=>(dispatch)=>{
    dispatch({type:BITCOIN_START});
    axiosWithAuth().get('/api/users/latest',)
    .then(response=>{
       dispatch({type:BITCOIN_SUCCESS,payload:response.data})
       navigate('/ClientDashboard/BuyBitcoin')
    })
    .catch(error=>{
        dispatch({type:BITCOIN_FAILURE,payload:error.message});
    });
}

export const fetchLatestCryptoCurrencyForClientBuy=(navigate)=>(dispatch)=>{
    dispatch({type:BITCOIN_START});
    axiosWithAuth().get('/api/users/latest',)
    .then(response=>{
       dispatch({type:BITCOIN_SUCCESS,payload:response.data})
       navigate('/ClientDashboard/BuyBitcoin')
    })
    .catch(error=>{
        dispatch({type:BITCOIN_FAILURE,payload:error.message});
    });
}

export const fetchLatestCryptoCurrencyForClientSell=(navigate)=>(dispatch)=>{
    dispatch({type:BITCOIN_START});
    axiosWithAuth().get('/api/users/latest',)
    .then(response=>{
       dispatch({type:BITCOIN_SUCCESS,payload:response.data})
       navigate('/ClientDashboard/SellBitcoin')
    })
    .catch(error=>{
        dispatch({type:BITCOIN_FAILURE,payload:error.message});
    });
}

export const fetchLatestCryptoCurrencyForTrader=(navigate,clientId)=>(dispatch)=>{
   dispatch({type:BITCOIN_START}); 
   axiosWithAuth().get('/api/users/latest',)
    .then(response=>{
        dispatch({type:BITCOIN_SUCCESS,payload:response.data});
        navigate('/TraderClientSearch/clients/${clientId}/TraderBuyBitcoin');
    })
    .catch(error=>{
        dispatch({type:BITCOIN_FAILURE,payload:error.message});
    });
}

export const fetchLatestCryptocurrencyForTraderBuy = (navigate,clientId) => (dispatch) => {
    dispatch({ type: BITCOIN_START });
    axiosWithAuth().get('/api/users/latest',)
        .then(response => {
            dispatch({ type: BITCOIN_SUCCESS, payload: response.data});
            navigate(`/TraderDashboard/TraderClientSearch/clients/${clientId}/TraderBuyBitcoin`)
        })
        .catch(err => {
            dispatch({ type: BITCOIN_FAILURE, payload: err.message});
        })
}

export const fetchLatestCryptocurrencyForTraderSell = (navigate,clientId) => (dispatch) => {
    dispatch({ type: BITCOIN_START });
    axiosWithAuth().get('/api/users/latest',)
        .then(response => {
            dispatch({ type: BITCOIN_SUCCESS, payload: response.data});
            navigate(`/TraderDashboard/TraderClientSearch/clients/${clientId}/TraderSellBitcoin`)
        })
        .catch(err => {
            dispatch({ type: BITCOIN_FAILURE, payload: err.message});
        })
}