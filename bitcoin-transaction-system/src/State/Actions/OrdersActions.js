import axiosWithAuth from "../../Components/Utils/AxiosWithAuth";

export const ORDERS_START = 'ORDERS_START'
export const ORDERS_SUCCESS = 'ORDERS_SUCCESS'
export const ORDERS_FAILURE = 'ORDERS_FAILURE'



// Fetching transactions
export const fetchTransactions = (clientId, navigate) => (dispatch) => {
    dispatch({ type: ORDERS_START })
    axiosWithAuth().get(`api/users/clients/${clientId}/transactions`)
        .then(response => {
            dispatch({ type: ORDERS_SUCCESS, payload: response.data });
            navigate(`/TraderDashboard/TraderClientSearch/clients/${clientId}/payments-and-transactions`);

        })
        .catch(error => {
            dispatch({ type: ORDERS_FAILURE, payload: error.message });

        });
};
