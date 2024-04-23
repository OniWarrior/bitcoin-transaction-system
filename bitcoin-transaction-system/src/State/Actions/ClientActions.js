import axiosWithAuth from '../../Components/Utils/AxiosWithAuth'

export const CLIENT_START = 'CLIENT_START'
export const CLIENT_SUCCESS = 'CLIENT_SUCCESS'
export const CLIENT_FAILURE = 'CLIENT_FAILURE'

// api call to retrieve bitcoin wallet of the client


export const getBitcoinWallet = () => (dispatch) => {
    dispatch({ type: CLIENT_START })
    axiosWithAuth().get('/api/users/BitcoinWallet')
        .then(response => {
            dispatch({ type: CLIENT_SUCCESS, payload: response.data })
        })

}