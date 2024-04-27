import axiosWithAuth from "../../Components/Utils/AxiosWithAuth";

export const TRADER_START = 'TRADER_START'
export const TRADER_SUCCESS = 'TRADER_SUCCESS'
export const TRADER_FAILURE = 'TRADER_FAILURE'





// api call to retrieve all records in the cancel log table
export const getCancelLog = (navigate) => (dispatch) => {
    dispatch({ type: TRADER_START })

}