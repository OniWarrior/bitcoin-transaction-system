import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
export const BITCOIN_START = 'BITCOIN_START'
export const BITCOIN_SUCCESS = 'BITCOIN_SUCCESS'
export const BITCOIN_FAILURE = 'BITCOIN_FAILURE'



// third party api call to fetch bitcoin and other cryptocurrency info
export const fetchLatestCryptocurrency = (navigate) => (dispatch) => {
    dispatch({ type: BITCOIN_START });

    const config = {
        headers: {
            'X-CMC_PRO_API_KEY': 'a6f492ca-a732-4331-976f-e9a31e270372',
        }
    };

    axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', config)
        .then(response => {
            dispatch({ type: BITCOIN_SUCCESS, payload: response.data });
            localStorage.setItem('token', response.data.token)

            // decoded token
            const decoded = jwtDecode(response.data.token)

            // decide which dashboard to redirect to based
            // on user type
            switch (decoded.user_type) {
                case 'Client': navigate('/ClientDashboard/BuyBitcoin')
                    break;
                case 'Trader': navigate('/TraderDashboard/TraderClientSearch/clients/:client_id/TraderBuyBitcoin')
                    break;
                default:
                    return;
            }

        })
        .catch(error => {
            dispatch({ type: BITCOIN_FAILURE, payload: error.message });
        });
}