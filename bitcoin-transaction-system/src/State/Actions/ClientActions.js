import axiosWithAuth from '../../Components/Utils/AxiosWithAuth'

export const CLIENT_START = 'CLIENT_START'
export const CLIENT_SUCCESS = 'CLIENT_SUCCESS'
export const CLIENT_FAILURE = 'CLIENT_FAILURE'

export const getBitCointWallet=(navigate)=>(dispatch)=>{
dispatch({type:CLIENT_START,})
axiosWithAuth().get('/api/users.BitcoinWallet')
.then(response=>{
    dispatch({type:CLIENT_SUCCESS,payload:response.data})
    navigate('/ClientDashboard/BitcoinWallet')
})
.catch(err=>{
    dispatch({type:CLIENT_FAILURE,payload:err.message})
})
}




export const getPastOrders=(navigate)=>(dispatch)=>{
    dispatch({type:CLIENT_START})
    axiosWithAuth().get('/api/users/Orders')
    .then(response=>{
        dispatch({type:CLIENT_SUCCESS,payload:response.data})
        navigate('/ClientDashboard/Orders')
    })
    .catch(err=>{
        dispatch({type:CLIENT_FAILURE,payload:err.message})
    })
}

export const postBuyBitcoin=(order,navigate)=>(dispatch)=>{
    dispatch({type:CLIENT_START})
    axiosWithAuth().post('/api/users/BuyBitcoin',order)
    .then(response=>{
        dispatch({type:CLIENT_SUCCESS,payload:response.data})
        navigate('/ClientDashboard')
    })
    .catch(err=>{
        dispatch({type:CLIENT_FAILURE,payload:err.message})
    })
}

export const postSellBitcoin=(order,navigate)=>(dispatch)=>{
    dispatch({type:CLIENT_START})
    axiosWithAuth().post('/api/users/SellBitCoin',order)
    .then(response=>{
        dispatch({type:CLIENT_SUCCESS,payload:response.data})
        navigate('/ClientDashboard')
    })
    .catch(err=>{
        dispatch({type:CLIENT_FAILURE,payload:err.message})
    })
}

export const postMoneyTransfer=(transfer,navigate)=>(dispatch)=>{
    dispatch({type:CLIENT_START})
    axiosWithAuth().post('/api/users/TransferMoney',transfer)
    .then(response=>{
        dispatch({type:CLIENT_SUCCESS,payload:response.data})
        navigate('/ClientDashboard')
    })
    .catch(eer=>{
        dispatch({type:CLIENT_FAILURE,payload:err.message})
    })
}