import axios from "axios";

export const SIGNUP_START = 'SIGNUP_START'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE'


export const register = (signup, navigate) => (dispatch) => {
    dispatch({ type: SIGNUP_START })
    axios.post('https://bitcoin-transaction-system-be-72349974fde7.herokuapp.com/api/auth/Signup', signup)
        .then(response => {
            dispatch({ type: SIGNUP_SUCCESS, payload: response.data })
            navigate('/Login')

        })
        .catch(err => {
            dispatch({ type: SIGNUP_FAILURE, payload: err.message })
        })
}