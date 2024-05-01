import axiosWithAuth from "../../Components/Utils/AxiosWithAuth";

export const TRANSFERS_START = 'TRANSFERS_START'
export const TRANSFERS_SUCCESS = 'TRANSFERS_SUCCESS'
export const TRANSFERS_FAILURE = 'TRANSFERS_FAILURE'






// Fetching transfers
export const fetchTransfers = (clientId) => (dispatch) => {

    dispatch({ type: TRANSFERS_START })
    axiosWithAuth().get(`/api/users/clients/${clientId}/payments`)
        .then(response => {
            dispatch({ type: TRANSFERS_SUCCESS, payload: response.data });
        })
        .catch(error => {
            dispatch({ type: TRANSFERS_FAILURE, payload: error.message });

        });
};